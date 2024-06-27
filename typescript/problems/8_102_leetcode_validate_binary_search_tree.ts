// https://leetcode.com/problems/binary-tree-level-order-traversal/description/

import { TreeNode } from "./6_95_leetcode_unique_binary_search_trees_2"

// Solution
class Solution8 {
    levelOrder(root: TreeNode | null): number[][] {
        if (root == null) return []

        const visitOrder: number[][] = []

        const queue: {node: TreeNode | null, level: number}[] = [{node: root, level: 0}]
        while (queue.length > 0) {
            const vertex = queue.shift()!!

            const node = vertex.node
            if (node == null) continue

            const level = vertex.level
            if (visitOrder.length <= level) {
                visitOrder.push([])
            }

            visitOrder[level].push(node.val)

            queue.push({node: node.left, level: level+1})
            queue.push({node: node.right, level: level+1})
        }

        return visitOrder
    };
}

// Tests
describe('tests', () => {
    test('root = [3,9,20,null,null,15,7]', () => {
        const tree = new TreeNode(
            3,
            new TreeNode(9),
            new TreeNode(20, new TreeNode(15), new TreeNode(7))
        );

        const sol = new Solution8()
        const result = sol.levelOrder(tree)

        const expectedResult = [[3],[9,20],[15,7]]
        expect(result).toStrictEqual(expectedResult);
    });

    test('root = [1]', () => {
        const tree = new TreeNode(1);

        const sol = new Solution8()
        const result = sol.levelOrder(tree)

        const expectedResult = [[1]]
        expect(result).toStrictEqual(expectedResult);
    });

    test('root = []', () => {
        const tree = null;

        const sol = new Solution8()
        const result = sol.levelOrder(tree)

        const expectedResult: number[][] = []
        expect(result).toStrictEqual(expectedResult);
    });
});