const { assert, expect } = require('chai');
const  { numberOperations } = require('./numberOperations');

describe("Tests …", function() { 
         it("Test for run", function() { 
            expect(true).to.be.equal(true);
         }); 
         it("Testing powNum", function() { 
            expect(numberOperations.powNumber(10)).to.be.equal(100);
            //expect(()=>numberOperations.powNumber(0)).to.throw();
         }); 
         it("Testing NumberChecker", function() { 
            expect(()=>numberOperations.numberChecker('Az sum Ivan')).to.throw('The input is not a number!');
            expect(()=>numberOperations.numberChecker({})).to.throw('The input is not a number!');
            expect(()=>numberOperations.numberChecker(NaN)).to.throw('The input is not a number!');
            expect(numberOperations.numberChecker([])).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(50)).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(150)).to.be.equal('The number is greater or equal to 100!');

         }); 
         it("Testing sumArrays", function() { 
            expect(numberOperations.sumArrays([10,20,30,100],[20,30,40])).to.deep.equal([30, 50, 70, 100]);
         }); 
})