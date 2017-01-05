'use strict';

const code = require('../main.js');
const expect = require('chai').expect;

describe("Greeting", () => {
  //TODO accepts only one argument
  it("Should accept one argument", () => {
    expect(code.greeting()).to.equal('invalid argument length');
    expect(code.greeting("arg1", "arg2")).to.equal('invalid argument length');
  });
  //TODO input is a string
  it ("Should accept a string", () => {
    expect(code.greeting(123)).to.equal("invalid input type");
    expect(code.greeting(["hello"])).to.equal("invalid input type");
    expect(code.greeting({"object":"item"})).to.equal("invalid input type");
  });
  //TODO output is a string

  it ("Should ouput a string", () => {
    expect(code.greeting("name")).to.be.a("string");
  });
  //TODO output is expected string
  it ("Should ouput gtreeting", () => {
    expect(code.greeting('name')).to.equal("Hello name");
  });

});



describe("Reduce", () => {


});
