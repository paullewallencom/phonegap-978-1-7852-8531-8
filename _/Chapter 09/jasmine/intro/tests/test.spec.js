describe("Testing the reading of the file's content.", function() {
	it("should require of app.js", function(done) {
		var app = require("../app.js");
		expect(app).toBeDefined();
		done();
	});
	it("should read the file", function(done) {
		var app = require("../app.js");
		var content = app.read("./intro.txt");
		expect(content).toBe("Lorem ipsum dolor sit amet, diceret percipit ea cum, porro vituperata comprehensam usu ea, tation fastidii molestiae eu nam.");
		done();
	});
});

describe("Testing if the file contains certain words", function() {
	it("should contains 'dolor'", function(done) {
		var app = require("../app.js");
		var found = app.check("dolor", "Lorem ipsum dolor sit amet");
		expect(found).toBe(true);
		done();
	});
});

describe("Testing the whole module", function() {
	it("read the file and search for 'dolor'", function(done) {
		var app = require("../app.js");
		app.read("./intro.txt")
		expect(app.check("dolor")).toBe(true);
		done();
	});
});