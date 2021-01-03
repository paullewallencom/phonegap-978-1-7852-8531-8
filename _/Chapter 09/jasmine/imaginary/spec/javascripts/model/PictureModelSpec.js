describe('Imaginary.model.Picture', function() {
    it('exists', function() {
        var model = Ext.create('Imaginary.model.Picture');
        expect(model.$className).toEqual('Imaginary.model.Picture');
    });

    it('has data', function() {
        var model = Ext.create('Imaginary.model.Picture', {
            id: 1,
            url: 'some/test/url.jpg'
        });
        expect(model.get('id')).toEqual(1);
        expect(model.get('url')).toEqual('some/test/url.jpg');
    });
});