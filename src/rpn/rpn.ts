/**
 * Evaluates reverse polish notation string input and return the result
 * 
 * @param {string }inputString 
 * @returns {number}
 */
export function rpn(inputString: string): number {
  const tokens: string[] = inputString.trim().split(" ").filter((el) => el != '');
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
      if (stack.length < 2) throw new Error('Not Enough Operands');
      const [a, b] = [stack.pop(), stack.pop()]
      stack.push(operations[token](Number(b), Number(a)))
    }else throw new Error('Invalid Expression');
  });

  if (stack.length != 1) throw new Error('Invalid Expression');
  return stack[0];
}