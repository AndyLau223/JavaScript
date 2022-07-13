/**
 * variables & constans
 *
 *  use constants as often as possible to be clear about you intentions(in your code)
 */

const defaultResult = 0;
let currentResult = defaultResult;

currentResult = ((currentResult + 10) * 3) / 2 - 1;

let calculationDescription = '(' + currentResult + '+ 10) * 3 / 2 -1';
let errorMessage = 'An error ' + ' occurred';

outputResult(currentResult, errorMessage);
