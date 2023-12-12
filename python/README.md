# Python Practice Problems

For type verifications execute `mypy <file_path>`

## Problem Summaries

### 1. Sum of a Range of Integers
**Objective:** Create the `add_it_up()` function to sum integers from 0 to the input. Non-integer inputs should return 0.

### 2. Caesar Cipher Redux
**Objective:** Implement a function for the Caesar cipher that shifts letters by a given number, maintaining punctuation, whitespace, and case sensitivity. You should not use the `.translate()` function.
**Example:**
- Input: `"abc", 2`
- Output: `"cde"` (each letter shifted by 2)

### 3. List swap first and last
**Objective:** Given a list, write a Python program to swap first and last element of the list.
**Example:**
- Input : [12, 35, 9, 56, 24]
- Output : [24, 35, 9, 56, 12]

### 4. Implement an interface I
**Objective:** Define an interface object with two implementations.

### 5. Reverse words
**Objective:** Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

### 6. Inorder traversal
**Objective:** Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:

Input: root = [1,null,2,3]
Output: [1,3,2]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]