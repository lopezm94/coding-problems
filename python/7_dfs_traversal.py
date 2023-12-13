from abc import ABC, abstractmethod
from typing import List, Optional

def dfsTraversalIterative(graph, start):
    stack, result = [start], []
    visited = set()

    while stack:
        node = stack.pop()
        if node not in visited:
            visited.add(node)
            result.append(node)
            to_visit = [neighbor for neighbor in graph[node] if neighbor not in visited]
            stack.extend(to_visit)
    return result

def dfsTraversalRecursive(graph, root, visited=set()) -> List[int]:
    if root in visited:
        return []
    visited.add(root)
    result = [root]
    for node in graph[root]:
        result += dfsTraversalRecursive(graph, node)
    return result


# Create a larger graph
graph = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['E'],
    'D': [],
    'E': []
}
start = 'A'

# Call the function and print the result
result = dfsTraversalIterative(graph, start)
print("DFS Traversal Iterative") 
print(f"Input: {graph}")
print(f"Output: {result}")  # Output: [1, 2, 4, 5, 3, 6, 7]

# Call the function and print the result
result = dfsTraversalRecursive(graph, start)
print("DFS Traversal Recursive") 
print(f"Input: {graph}")
print(f"Output: {result}")  # Output: [1, 2, 4, 5, 3, 6, 7]