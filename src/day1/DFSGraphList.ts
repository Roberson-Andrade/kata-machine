function search(graph: WeightedAdjacencyList, curr: number, needle: number, path: number[], seen: boolean[]): boolean {
  if(seen[curr]) {
    return false;
  }

  seen[curr] = true;

  if(graph[curr].length === 0) {
    return false;
  }

  path.push(curr);

  if(curr === needle) {
    return true;
  }

  for(const edge of graph[curr]) {
    if(search(graph, edge.to, needle, path, seen)) {
      return true;
    }
  }

  path.pop()

  return false
}

export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
  const result: number[] = [];
  const seen = new Array(graph.length).fill(false)

  if(search(graph, source, needle, result, seen)) {
    return result
  }

  return null;
} 