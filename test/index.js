var fixtures = require('../');

describe('fixtures', function() {

  describe('with no arguments', function() {
    it('load all fixtures', function(done) {
      fixtures().then(function(data) {
        expect(data).to.have.property('users');
        expect(data).to.have.deep.property('users.user1');
        expect(data).to.have.deep.property('users.user2');
        expect(data).to.have.property('roles');
        expect(data).to.have.deep.property('roles.guest');
        done();
      }, done);
    });
  });

  describe('with "users"', function() {
    it('load "users" fixtures', function(done) {
      fixtures('users').then(function(users) {
        expect(users).to.have.property('user1');
        done();
      }, done);
    });
  });

  describe('with { dir: ... }', function() {
    it('load from ...', function(done) {
      fixtures({ dir: './test/fixtures2' }).then(function(data) {
        expect(data).to.have.property('animals');
        expect(data).to.have.deep.property('animals.cat');
        expect(data).to.have.deep.property('animals.slave');
        expect(data).to.have.property('drinks');
        expect(data).to.have.deep.property('drinks.chai');
        done();
      });
    });
  });

  describe('with { dir: ..., name: "drinks" }', function() {
    it('load "drinks" fixtures from ...', function(done) {
      fixtures({
        dir: './test/fixtures2',
        name: 'drinks'
      }).then(function(data) {
        expect(data).to.have.deep.property('chai');
        done();
      });
    });
  });

});

