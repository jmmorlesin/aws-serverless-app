const expect = require('chai').expect;

const SubjectClass = require('../../lib/handlers/lottery-presentation-handler');

const subject = new SubjectClass();

describe('When I call the lottery presendation handler', function () {
    it('Then I get an object with te numbers and a text representing them', function () {
        const MOCK_NUMBERS = [1, 3, 5, 7, 9, 20];

        const actual = subject.handle(MOCK_NUMBERS);

        expect(actual).to.be.an('object');
        expect(actual).to.have.property('numbers');
        expect(actual).to.have.property('text');

        const numbers = actual.numbers;
        expect(numbers).to.be.an('array');

        const numberOne = numbers[0];
        const numberTwo = numbers[1];
        const numberThree = numbers[2];
        const numberFour = numbers[3];
        const numberFive = numbers[4];
        const numberSix = numbers[5];

        const expectedText = `${numberOne} ${numberTwo} ${numberThree} ${numberFour} ${numberFive} [${numberSix}]`;

        const text = actual.text;
        expect(text).to.be.a('string');

        expect(text).to.equal(expectedText);
    });
});
