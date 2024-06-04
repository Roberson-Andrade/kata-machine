export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
  const seen = new Array(graph.length).fill(false);
  const prev = new Array(graph.length).fill(-1);

  const queue = [source];

  seen[source] = true;

  do {
    const curr = queue.shift() as number;
    
    if(curr === needle) break;

    const adjs = graph[curr];

    for(let i = 0; i < adjs.length; i++) {
      if(adjs[i] === 0 || seen[i]) continue;

      seen[i] = true;
      prev[i] = curr;

      queue.push(i);
    }
  } while(queue.length);

  if(prev[needle] === -1) return null

  let curr = needle;
  const out = [];

  while(prev[curr] !== -1)  {
    out.push(curr);
    curr = prev[curr];
  }

  return [source].concat(out.reverse())
}