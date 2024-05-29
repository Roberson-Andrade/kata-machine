export default function two_crystal_balls(breaks: boolean[]): number {
  const jumpSpace = Math.floor(Math.sqrt(breaks.length));

  let i = jumpSpace;

  for(; i < breaks.length; i += jumpSpace) {
    if(breaks[i]) {
      break
    }
  }

  i -= jumpSpace;

  for(let j = 0; j < jumpSpace; j++, i++) {
    if(breaks[i]) {
      return i;
    }
  }

  return -1;
  
}
