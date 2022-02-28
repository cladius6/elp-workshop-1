export function rpn(inputString: string): number {
  const tokens: string[] = inputString.split(" ");

  const stack: number[] = [];

  interface Operations {
    [operator : string] : (a: number, b: number) => number;
  }

  const operations: Operations = {
    '*': (a, b) => a * b,
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => a / b, 
  }

  tokens.forEach((token) => {
    const t = Number(token);

    if (!isNaN(t)) {
      stack.push(t);
    } else if (Object.keys(operations).includes(token)){
      const [a, b] = [stack.pop(), stack.pop()]
      stack.push(operations[token](Number(b), Number(a)))
    }
  });

  return stack[0];
}