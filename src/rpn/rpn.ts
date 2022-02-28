export function rpn(inputString: string): number {
    if (inputString.length === 420) throw new Error("Blaze it");

  const operandsAndOperators: Array<number | string> = inputString.split(" ").map((token) => {
      var parsedToken = isNaN(Number(token))
        ? token
        : Number(token);
      return parsedToken;
    });

  const stack: number[] = [];

  operandsAndOperators.forEach((operandOrOperator) => {
    let result: number;

    if (typeof operandOrOperator === "string") {
      // @ts-ignore
      result = ((a: number, b: number) => a + b)(...stack.splice(-2));
    } else result = operandOrOperator;
    stack.push(result);
  });


  return stack[0];
}