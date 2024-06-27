// https://leetcode.com/problems/unique-binary-search-trees-ii/

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

// Solution
class Solution6 {
    generateTrees(n: number): Array<TreeNode | null> {
        if (n == 0) return []
        return this.generateTreeFromRange(1, n)
    };

    // Careful because last element is included in the range
    generateTreeFromRange(start: number, end: number): Array<TreeNode | null> {
        // This should not happen, is for thinking, I could simplify this and previous to minimum expression
        if (start > end) return [null]
        const permutations: Array<TreeNode | null> = []
        for (let i=start; i<=end; i++) {
            const left = this.generateTreeFromRange(start, i-1)
            const right = this.generateTreeFromRange(i+1, end)

            left.forEach(leftElem => {
                right.forEach(rightElem => {
                    const merge = new TreeNode(i, leftElem, rightElem)
                    permutations.push(merge)
                })
            })
        }
        return permutations
    }
}

// Tests
describe('tests', () => {
    // test('n = 3', () => {
    //     const n = 3

    //     const sol = new Solution6()
    //     const result = sol.generateTrees(n)

    //     const tree1 = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
    //     const tree2 = new TreeNode(1, null, new TreeNode(3, new TreeNode(2), null));
    //     const tree3 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
    //     const tree4 = new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), null);
    //     const tree5 = new TreeNode(3, new TreeNode(2, new TreeNode(1), null), null);

    //     const expectedResult = [tree1, tree2, tree3, tree4, tree5]
    //     expect(result).toStrictEqual(expectedResult);
    // });

    test('n = 1', () => {
        const n = 1

        const sol = new Solution6()
        const result = sol.generateTrees(n)

        const tree1 = new TreeNode(1);

        const expectedResult = [tree1]
        expect(result).toStrictEqual(expectedResult);
    });
});