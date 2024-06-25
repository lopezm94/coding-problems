// https://leetcode.com/problems/reverse-integer/description/

// Solution
class Solution4 {
    problemSpace = new Map<number, Map<number, string>>()
    addString(outerKey: number, innerKey: number, value: string) {
        const innerMap = this.problemSpace.get(outerKey) || new Map<number, string>();
        innerMap.set(innerKey, value);
        this.problemSpace.set(outerKey, innerMap);
    }

    closeParentheses(open: number): string {
        let result = ""
        for (let i=0; i<open; i++) {
            result += ")"
        }
        return result
    }

    generateParenthesis(n: number, open: number = 0): string[] {
        let memoizedResult = this.problemSpace.get(n)?.get(open)
        if (memoizedResult != null) {
            return [memoizedResult]
        }
        if (n == 0) {
            return [this.closeParentheses(open)]
        }
        let permutations = []
        permutations.push(
            this.generateParenthesis(n-1, open+1)
            .map(result => "(" + result)
        )
        if (open > 0) {
            permutations.push(
                this.generateParenthesis(n, open-1)
                .map(result => ")" + result)
            )
        }
        return permutations.flat()
    };
}

// Tests
describe('tests', () => {
    test('n = 3', () => {
        const n = 3

        const filter = new Solution4()
        const result = filter.generateParenthesis(n)

        const expectedResult = ["((()))","(()())","(())()","()(())","()()()"]
        expect(result).toStrictEqual(expectedResult);
    });

    test('n = 1', () => {
        const n = 1

        const filter = new Solution4()
        const result = filter.generateParenthesis(n)

        const expectedResult = ["()"]
        expect(result).toStrictEqual(expectedResult);
    });
});