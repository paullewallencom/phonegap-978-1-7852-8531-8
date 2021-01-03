describe('Imaginary.controller.Main', function() {
    var controller, app;
    beforeEach(function() {
        app = Ext.create('Ext.app.Application', {
            name: 'Imaginary'
        });
        controller = Ext.create('Imaginary.controller.Main', {
            application: app
        });
        controller.launch();
    });

    afterEach(function() {
        app.destroy();
    });

    describe('#getCameraPicture', function() {

        it('calls to get camera picture', function() {
            spyOn(controller, 'getCameraPicture');
            controller.getCameraPicture();
            expect(controller.getCameraPicture).toHaveBeenCalled();
        })

        it('passes testing url to callback', function() {
            controller.getCameraPicture(function(url) {
                expect(url).toEqual('resources/images/test.jpg');
            });
        })

    });

});