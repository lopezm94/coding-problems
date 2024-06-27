// https://leetcode.com/problems/validate-binary-search-tree/description/

import { TreeNode } from "./6_95_leetcode_unique_binary_search_trees_2"

// Solution
class Solution7 {
    MIN_NODE_VAL: number = -(2 ** 31);
    MAX_NODE_VAL: number = (2 ** 31) - 1;

    calcMin(a: number, b: number): number {
        if (a < b) return a
        return b
    }

    calcMax(a: number, b: number): number {
        if (a > b) return a
        return b
    }

    isValidBST(
        root: TreeNode | null, 
        min: number = this.MIN_NODE_VAL, 
        max: number = this.MAX_NODE_VAL
    ): boolean {
        if (root == null) return true
        if (root.val < min || root.val > max) return false

        const isLeftValid = this.isValidBST(
            root.left, 
            min,
            this.calcMin(max, root.val)
        )

        const isRightValid = this.isValidBST(
            root.right, 
            this.calcMax(min, root.val),
            max
        )

        return isLeftValid && isRightValid
    };

    isValidBSTIterative(root: TreeNode | null): boolean {
        if (root == null) return true;

        const stack: { node: TreeNode | null, min: number, max: number }[] = [];
        stack.push({ node: root, min: this.MIN_NODE_VAL, max: this.MAX_NODE_VAL });

        while (stack.length > 0) {
            const { node, min, max } = stack.pop()!;

            if (node === null) continue;
            if (node.val < min || node.val > max) return false;

            stack.push({ node: node.right, min: this.calcMax(node.val, min), max: max });
            stack.push({ node: node.left, min: min, max: this.calcMin(node.val, max) });
        }

        return true;
    }
}

// Tests
describe('tests', () => {
    test('root = [2,1,3]', () => {
        const tree = new TreeNode(2, 
            new TreeNode(1), 
            new TreeNode(3)
        );

        const sol = new Solution7()
        const result = sol.isValidBST(tree)

        const expectedResult = true
        expect(result).toStrictEqual(expectedResult);
    });

    test('root = [5,1,4,null,null,3,6]', () => {
        const tree = new TreeNode(5, 
            new TreeNode(1), 
            new TreeNode(4, 
                new TreeNode(3), 
                new TreeNode(6)
            )
        );

        const sol = new Solution7()
        const result = sol.isValidBST(tree)

        const expectedResult = false
        expect(result).toStrictEqual(expectedResult);
    });
});