export function rpn(inputString: string): number {
  const tokens: Array<number | string> = inputString.split(" ").map((token) => {
      var parsedToken = isNaN(Number(token))
        ? token
        : Number(token);
      return parsedToken;
    });

  const stack: number[] = [];

  tokens.forEach((token) => {
    let result: number;

    if (typeof token === "string") {
      // @ts-ignore
      result = ((a: number, b: number) => a + b)(...stack.splice(-2));
    } else result = token;
    stack.push(result);
  });


  return stack[0];
}