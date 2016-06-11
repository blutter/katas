/// <reference path="../typings/globals/jasmine/index.d.ts"/>

import { FizzBuzzPlayer } from './fizzbuzz';

describe('Given a fizzbuzz player', () => {
  describe('when the player has a turn', () => {
    beforeEach(() => {
      this.player = new FizzBuzzPlayer();
      this.result = this.player.play();
    });

    it('then the player returns 1', () => {
      expect(this.result).toEqual('1');
    });

    describe('when the player has 3 more turns', () => {
      beforeEach(() => {
        this.results = [];
        for (var i = 0; i < 3; ++i) {
          this.results.push(this.player.play());
        }
      });

      it('then the results are as expected', () => {
        expect(this.results.join(', ')).toEqual('2, Fizz, 4');
      });
    });
  })
});
