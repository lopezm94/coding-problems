// https://leetcode.com/problems/reverse-integer/description/

// Solution
class Solution3 {
    maxNumberAsString = "2147483647"
    minNumberAsString = "2147483648"

    reverse(num: number): number {
        // Reverse
        const isNegative = num < 0
        // Transform to list to ease transformations
        let numAsString = num.toString().split("")
        // Remove leading zeros
        while (numAsString[numAsString.length-1] == "0") {
            numAsString.pop()
        }
        // Reverse with sign
        const reversedAsList = numAsString.reverse()
        // Remove sign
        if (isNegative) {
            reversedAsList.pop()
        }
        // Turn back to string
        const reversed = reversedAsList.join("")

        // Validate
        const numberToCompare = isNegative ? this.minNumberAsString : this.maxNumberAsString
        if (reversed.length == numberToCompare.length) {
            for (let i=0; i<reversed.length; i++) {
                if (reversed[i] > numberToCompare[i]) {
                    // Not valid
                    return 0
                }
            }
        }

        // Is Valid
        return isNegative ? -1*Number(reversed) : Number(reversed)
    };
}

// Tests
describe('tests', () => {
    test('reverse 123', () => {
        const num = 123

        const filter = new Solution3()
        const result = filter.reverse(num)

        const expectedResult = 321
        expect(result).toStrictEqual(expectedResult);
    });

    test('reverse -123', () => {
        const num = -123

        const filter = new Solution3()
        const result = filter.reverse(num)

        const expectedResult = -321
        expect(result).toStrictEqual(expectedResult);
    });

    test('reverse 120', () => {
        const num = 120

        const filter = new Solution3()
        const result = filter.reverse(num)

        const expectedResult = 21
        expect(result).toStrictEqual(expectedResult);
    });
});