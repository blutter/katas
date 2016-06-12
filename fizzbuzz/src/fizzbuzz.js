"use strict";
var FizzBuzzPlayer = (function () {
    function FizzBuzzPlayer() {
        this.numberOfPlays = 0;
    }
    FizzBuzzPlayer.prototype.play = function () {
        var result = '';
        ++this.numberOfPlays;
        if (this.numberOfPlays % 3 === 0) {
            result = 'Fizz';
        }
        if (this.numberOfPlays % 5 === 0) {
            if (result.length > 0) {
                result += ' ';
            }
            result += 'Buzz';
        }
        if (result.length === 0) {
            result = this.numberOfPlays.toString();
        }
        return result;
    };
    return FizzBuzzPlayer;
}());
exports.FizzBuzzPlayer = FizzBuzzPlayer;
