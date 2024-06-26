'use strict';

import { quarterOfTheYear } from './solution1.js';

describe('Basic Tests', () => {
    it('should return 6 when 3 is passed', () => {
        expect(addUp(3)).toEqual(6);
    });
    it('should return 3 when 8 is passed', () => {
        expect(addUp(8)).toEqual(3);
    });
    it('should return 4 when 11 is passed', () => {
        expect(quarterOfTheYear(11)).toEqual(4);
    });
});
