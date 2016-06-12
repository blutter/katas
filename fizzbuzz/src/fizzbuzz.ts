export class FizzBuzzPlayer {
  private numberOfPlays : number;

  constructor() {
      this.numberOfPlays = 0;
  }

  play() : string {
    var result : string = '';

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
  }
}
