// https://leetcode.com/problems/add-two-numbers/description/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// Solution
class Solution2 {
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null, remainer: number = 0): ListNode | null {
        // Edge cases
        if (l1 == null) return this.recursiveAddWithRemainer(l2, remainer)
        if (l2 == null) return this.recursiveAddWithRemainer(l1, remainer)

        const sum = l1.val + l2.val + remainer
        const newRemainer = sum >= 10 ? 1 : 0
        return new ListNode(sum%10, this.addTwoNumbers(l1.next, l2.next, newRemainer))
    };

    private recursiveAddWithRemainer(l: ListNode | null, remainer: number = 0): ListNode | null {
        if (l == null) {
            if (remainer > 0) return new ListNode(1)
            else return null
        }
        const sum = l.val + remainer
        const newRemainer = sum >= 10 ? 1 : 0
        return new ListNode(sum%10, this.recursiveAddWithRemainer(l.next, newRemainer))
    }

    addTwoNumbersSequential(l1: ListNode | null, l2: ListNode | null): ListNode | null {
        // Edge cases
        if (l1 == null) return l2
        if (l2 == null) return l1

        // First iteration
        let sum = l1!!.val+l2!!.val
        let remainer = (sum >= 10) ? 1 : 0
        const result = new ListNode(sum%10)

        let resultDigitPointer = result
        let l1Pointer: ListNode | null = l1.next
        let l2Pointer: ListNode | null = l2.next
        // Rest of iterations
        while (l1Pointer != null && l2Pointer != null) {
            sum = l1Pointer!!.val+l2Pointer!!.val + remainer
            remainer = (sum >= 10) ? 1 : 0
            resultDigitPointer.next = new ListNode(sum%10, null)
            resultDigitPointer = resultDigitPointer.next 
            l1Pointer = l1Pointer.next
            l2Pointer = l2Pointer.next
        }

        if (l1Pointer != null || l2Pointer != null) {
            // Sum remainer with rest of reminaing pointer
            let remainingPointer: ListNode | null = (l1Pointer == null) ? l2Pointer : l1Pointer
            while (remainingPointer != null) {
                sum = remainingPointer.val + remainer
                remainer = (sum >= 10) ? 1 : 0
                resultDigitPointer.next = new ListNode(sum%10, null)
                resultDigitPointer = resultDigitPointer.next
                remainingPointer = remainingPointer.next
            }
        }

        // Append remainer
        if (remainer > 0) {
            resultDigitPointer.next = new ListNode(1, null) 
        }

        return result
    };
}

// Tests
describe('tests', () => {
    test('sum [5,6,4] + [2,4,3]', () => {
        const numberOne = new ListNode(3, new ListNode(4, new ListNode(2, null)))
        const numberTwo = new ListNode(4, new ListNode(6, new ListNode(5, null)))

        const filter = new Solution2()
        const result = filter.addTwoNumbers(numberOne, numberTwo)

        const expectedResult = new ListNode(7, new ListNode(0, new ListNode(8, null)))
        expect(result).toStrictEqual(expectedResult);
    });

    test('sum [0] + [0]', () => {
        const numberOne = new ListNode(0, null)
        const numberTwo = new ListNode(0, null)

        const filter = new Solution2()
        const result = filter.addTwoNumbers(numberOne, numberTwo)

        const expectedResult =  new ListNode(0, null)
        expect(result).toStrictEqual(expectedResult);
    });

    test('sum [9,9,9,9,9,9,9] + [9,9,9,9]', () => {
        const numberOne = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null)))))))
        const numberTwo = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null))))

        const filter = new Solution2()
        const result = filter.addTwoNumbers(numberOne, numberTwo)

        const expectedResult = new ListNode(8, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1, null))))))))
        expect(result).toStrictEqual(expectedResult);
    });
});