var isBrowser = document.URL.indexOf( 'http://' ) !== -1 || document.URL.indexOf( 'https://' ) !== -1;
if ( !isBrowser ) {
    document.addEventListener('deviceready', init, false);
} else {
    init();
}

function init() {

    var PeerConnection = window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    var IceCandidate = window.mozRTCIceCandidate || window.RTCIceCandidate;
    var SessionDescription = window.mozRTCSessionDescription || window.RTCSessionDescription;
    navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;

    var pc; // PeerConnection

    var SERVER_IP = '192.168.0.102';
    var SERVER_PORT = '1234';

    // DOM elements manipulated as user interacts with the app
    var callButton = document.querySelector("#callButton");
    var localVideo = document.querySelector("#localVideo");
    var remoteVideo = document.querySelector("#remoteVideo");

    callButton.addEventListener('click', createOffer);

    // Step 1
    navigator.getUserMedia({
            audio: true,
            video: true
        },
        gotStream,
        function(error) {
            console.log(error)
        }
    );

    function gotStream(stream) {

        callButton.style.display = 'block';
        localVideo.src = URL.createObjectURL(stream);

        pc = new PeerConnection(null);
        pc.addStream(stream);
        pc.onicecandidate = gotIceCandidate;
        pc.onaddstream = gotRemoteStream;
    }

    // Step 2
    function createOffer() {
        pc.createOffer(
            gotLocalDescription,
            function(error) {
                console.log(error)
            }, {
                'mandatory': {
                    'OfferToReceiveAudio': true,
                    'OfferToReceiveVideo': true
                }
            }
        );
    }

    // Step 3
    function createAnswer() {
        pc.createAnswer(
            gotLocalDescription,
            function(error) {
                console.log(error)
            }, {
                'mandatory': {
                    'OfferToReceiveAudio': true,
                    'OfferToReceiveVideo': true
                }
            }
        );
    }

    function gotLocalDescription(description) {
        pc.setLocalDescription(description);
        sendMessage(description);
    }

    function gotIceCandidate(event) {
        if (event.candidate) {
            sendMessage({
                type: 'candidate',
                label: event.candidate.sdpMLineIndex,
                id: event.candidate.sdpMid,
                candidate: event.candidate.candidate
            });
        }
    }

    function gotRemoteStream(event) {
        remoteVideo.src = URL.createObjectURL(event.stream);
    }

    var socket = io.connect('http://' + SERVER_IP + ':' + SERVER_PORT);

    function sendMessage(message) {
        socket.emit('message', message);
    }

    socket.on('message', function(message) {
        if (message.type === 'offer') {
            pc.setRemoteDescription(new SessionDescription(message));
            createAnswer();
        } else if (message.type === 'answer') {
            pc.setRemoteDescription(new SessionDescription(message));
        } else if (message.type === 'candidate') {
            var candidate = new IceCandidate({
                sdpMLineIndex: message.label,
                candidate: message.candidate
            });
            pc.addIceCandidate(candidate);
        }
    });

}