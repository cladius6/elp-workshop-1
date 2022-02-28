export function rpn(inputString: string): number {
  const tokens: string[] = inputString.split(" ");

  const stack: number[] = [];

  tokens.forEach((token) => {
    const t = Number(token);

    if (!isNaN(t)) {
      stack.push(t);
    } else {
      const [a, b] = [stack.pop(), stack.pop()]
    }
  });


  return stack[0];
}