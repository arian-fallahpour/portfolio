export const join = (...classes: (string | undefined)[]) =>
  "\n" +
  classes
    .filter((c) => c != undefined)
    .map((c: string) => c.trim())
    .join("\n");
