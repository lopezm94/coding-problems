import heapq

def dijkstra(graph, start):
    shortest_paths = {vertex: float('infinity') for vertex in graph}
    shortest_paths[start] = 0
    pq = [(0, start)]
    
    while pq:
        current_distance, current_vertex = heapq.heappop(pq)
        if current_distance > shortest_paths[current_vertex]:
            continue

        for neighbor, weight in graph[current_vertex].items():
            distance = current_distance + weight
            if distance < shortest_paths[neighbor]:
                shortest_paths[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))
    
    return shortest_paths

# Example usage
graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 2, 'D': 5},
    'C': {'A': 4, 'B': 2, 'D': 1},
    'D': {'B': 5, 'C': 1}
}
print(dijkstra(graph, 'A'))  # Output: {'A': 0, 'B': 1, 'C': 3, 'D': 4}
