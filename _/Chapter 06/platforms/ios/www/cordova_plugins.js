cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.statusbar/www/statusbar.js",
        "id": "org.apache.cordova.statusbar.statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/nl.x-services.plugins.socialsharing/www/SocialSharing.js",
        "id": "nl.x-services.plugins.socialsharing.SocialSharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    },
    {
        "file": "plugins/com.vladstirbu.cordova.instagram/www/CDVInstagramPlugin.js",
        "id": "com.vladstirbu.cordova.instagram.InstagramPlugin",
        "clobbers": [
            "Instagram"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.statusbar": "0.1.10",
    "nl.x-services.plugins.socialsharing": "4.3.15",
    "com.vladstirbu.cordova.instagram": "0.4.1"
}
// BOTTOM OF METADATA
});