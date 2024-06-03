function traverse_post_order(node: BinaryNode<number> | null, values: number[]) {
  if (node === null) {
      return;
  }

  traverse_post_order(node.left, values);
  traverse_post_order(node.right, values);
  values.push(node.value)
}

export default function post_order_search(head: BinaryNode<number>): number[] {
  const values: number[] = []
  
  traverse_post_order(head, values);

  return values
}