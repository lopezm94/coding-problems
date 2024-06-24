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

### 7. Depth-First Search (DFS) Traversal

**Objective:** Implement both recursive and iterative versions of the Depth-First Search (DFS) algorithm to traverse a graph. The graph will be represented as an adjacency list, and you should return the order of nodes visited during the traversal.

**Example 1:**

Input: 
graph = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['E'],
    'D': [],
    'E': []
}, 
start = 'A'

Output: 
Recursive: ['A', 'B', 'D', 'C', 'E']
Iterative: ['A', 'C', 'E', 'B', 'D']

**Example 2:**

Input: 
graph = {
    '1': ['2', '3'],
    '2': ['4'],
    '3': ['5'],
    '4': [],
    '5': []
}, 
start = '1'

Output: 
Recursive: ['1', '2', '4', '3', '5']
Iterative: ['1', '3', '5', '2', '4']

### 8. Dijkstra's Shortest Path Algorithm

**Objective:** Implement Dijkstra's algorithm to find the shortest path from a start node to all other nodes in a weighted graph.

**Example 1:**

Input: 
graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 2, 'D': 5},
    'C': {'A': 4, 'B': 2, 'D': 1},
    'D': {'B': 5, 'C': 1}
}, 
start = 'A'

Output: 
Shortest paths from A: {'A': 0, 'B': 1, 'C': 3, 'D': 4}

**Example 2:**

Input: 
graph = {
    '1': {'2': 6, '3': 5, '4': 5},
    '2': {'1': 6, '5': -1},
    '3': {'1': 5, '5': 1, '4': 2},
    '4': {'1': 5, '3': 2, '6': -2},
    '5': {'2': -1, '3': 1, '6': 3},
    '6': {'4': -2, '5': 3}
}, 
start = '1'

Output: 
Shortest paths from 1: {'1': 0, '2': 5, '3': 5, '4': 7, '5': 6, '6': 5}

---

### 9. Sorting an Array

**Objective:** Write two functions to sort an array. The first function should use Python's standard library sorting methods. The second should implement Quick Sort and Merge Sort algorithms.

**Example 1:**

Input: 
array = [3, 6, 8, 10, 1, 2, 1]

Output: 
Standard Library Sort: [1, 1, 2, 3, 6, 8, 10]
Quick Sort: [1, 1, 2, 3, 6, 8, 10]
Merge Sort: [1, 1, 2, 3, 6, 8, 10]

**Example 2:**

Input: 
array = [12, 11, 13, 5, 6, 7]

Output: 
Standard Library Sort: [5, 6, 7, 11, 12, 13]
Quick Sort: [5, 6, 7, 11, 12, 13]
Merge Sort: [5, 6, 7, 11, 12, 13]
