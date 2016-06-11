/// <reference path="../typings/globals/jasmine/index.d.ts"/>
"use strict";
var _this = this;
var fizzbuzz_1 = require('./fizzbuzz');
describe('Given a fizzbuzz player', function () {
    describe('when the player has a turn', function () {
        beforeEach(function () {
            _this.player = new fizzbuzz_1.FizzBuzzPlayer();
            _this.result = _this.player.play();
        });
        it('then the player returns 1', function () {
            expect(_this.result).toEqual('1');
        });
        describe('when the player has 3 more turns', function () {
            beforeEach(function () {
                _this.results = [];
                for (var i = 0; i < 3; ++i) {
                    _this.results.push(_this.player.play());
                }
            });
            it('then the results are as expected', function () {
                expect(_this.results.join(', ')).toEqual('2, Fizz, 4');
            });
        });
    });
});
