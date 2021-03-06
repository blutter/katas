/// // <reference path="../typings/globals/jasmine/index.d.ts"/>

import { FizzBuzzPlayer } from './fizzbuzz';

describe('Given a fizzbuzz player', () => {
  describe('when the player has a turn', () => {
    let player : FizzBuzzPlayer;
    let result : string;

    beforeEach(() => {
      player = new FizzBuzzPlayer();
      result = player.play();
    });

    it('then the player returns 1', () => {
      expect(result).toEqual('1');
    });

    describe('when the player has 3 more turns', () => {
      let results : string [] = [];
      
      beforeEach(() => {
        for (var i = 0; i < 3; ++i) {
          results.push(player.play());
        }
      });

      it('then the results are as expected', () => {
        expect(results.join(', ')).toEqual('2, Fizz, 4');
      });
    });

    describe('when the player has 100 turns', () => {
      let results : string [] = [];

      beforeEach(() => {
        for (var i = 0; i < 50; ++i) {
          results.push(player.play());
        }
      });

      it('then the results are as expected', () => {
        expect(results.join(', ')).toEqual('2, Fizz, 4, Buzz, Fizz, 7, 8, ' +
          'Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, ' +
          '22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, ' +
          'Fizz, 37, 38, Fizz, Buzz, 41, Fizz, 43, 44, Fizz Buzz, 46, 47, Fizz, 49, ' +
          'Buzz, Fizz');
      });
    });
  })
});
