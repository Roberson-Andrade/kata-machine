function traverse_in_order(node: BinaryNode<number> | null, values: number[]) {
  if (node === null) {
      return;
  }

  traverse_in_order(node.left, values);
  values.push(node.value)
  traverse_in_order(node.right, values);
}

export default function in_order_search(head: BinaryNode<number>): number[] {
  const values: number[] = []
  
  traverse_in_order(head, values);

  return values
}
