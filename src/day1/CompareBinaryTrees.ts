export function compareTrees(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
  // structural check
  if (a === null && b === null) {
      return true;
  }

  // structural check
  if(a === null || b === null) {
    return false;
  }

  // value check
  if(a.value !== b.value) {
    return false;
  }

  return compareTrees(a.left, b.left) && compareTrees(a.right, b.right)
}

export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
  return compareTrees(a, b)
}
