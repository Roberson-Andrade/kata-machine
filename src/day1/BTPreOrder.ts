function traverse_pre_order(node: BinaryNode<number> | null, values: number[]) {
  if (node === null) {
      return;
  }

  values.push(node.value)
  traverse_pre_order(node.left, values);
  traverse_pre_order(node.right, values);
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
  const values: number[] = []
  
  traverse_pre_order(head, values);

  return values
}