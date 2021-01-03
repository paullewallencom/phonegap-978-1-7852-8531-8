var url = 'http://localhost:1841/';
var title = 'DalekJS test';
module.exports = {
	'should interact with the application': function (test) {
	  	test
		.open(url)
		.assert.title().is('Imaginary')
		.wait(500)
		.assert.text('#takePhotoBtn', 'Take Photo', 'The title on the button "Take Photo"')
		.click('#takePhotoBtn')
		.wait(500)
		.assert.text('#retakePhotoBtn', 'Retake', 'The title on the retake button "Retake"')
		.assert.text('#savePhotoBtn', 'Save', 'The title on the save button "Save"')
		.assert.text('#cancelPhotoBtn', 'Close', 'The title on the close button "Close"')
		.screenshot('./screen.jpg')
		.done()
	}
};
