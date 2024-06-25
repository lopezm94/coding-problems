// https://leetcode.com/problems/4sum/description/

// Solution
class Solution5 {
    fourSum(nums: number[], target: number, index: number = 0, remaining: number = 4): number[][] {
        // Edge cases
        if (remaining < 0 || index > nums.length) {
            return []
        }
        if (remaining == 0) {
            if (target == 0) {
                return [[]]
            } else {
                return []
            }
        }
        // Result
        const combinations: number[][][] = []

        // Skip element
        const skipped = this.fourSum(nums, target, index+1, remaining)
        combinations.push(skipped)

        // Take element
        const taken = this.fourSum(nums, target-nums[index], index+1, remaining-1)
        const takenWithNumber: number[][] = taken.map(elem => {
            elem.push(nums[index])
            return elem
        })
        combinations.push(takenWithNumber)

        // Merge
        return combinations.flat()
    };
}

// Tests
describe('tests', () => {
    function orderAndRemoveDuplicates(result: number[][]): Set<string> {
        const ordered = result.map(elem => elem.sort())
        return new Set(ordered.map(elem => JSON.stringify(elem)))
    }

    test('nums = [1,0,-1,0,-2,2], target = 0', () => {
        const nums = [1,0,-1,0,-2,2]
        const target = 0

        const sol = new Solution5()
        const result = orderAndRemoveDuplicates(sol.fourSum(nums, target)!!)

        const expectedResult = orderAndRemoveDuplicates([[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]])
        expect(result).toStrictEqual(expectedResult);
    });

    test('nums = [2,2,2,2,2], target = 8', () => {
        const nums = [2,2,2,2,2]
        const target = 8

        const sol = new Solution5()
        const result = orderAndRemoveDuplicates(sol.fourSum(nums, target)!!)

        const expectedResult = orderAndRemoveDuplicates([[2,2,2,2]])
        expect(result).toStrictEqual(expectedResult);
    });
});