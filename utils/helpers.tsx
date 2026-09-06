export const join = (...classes: (string | undefined | null)[]) =>
  "\n" +
  classes
    .filter((cls) => cls && cls.trim().length > 0)
    .join("\n")
    .trim() +
  "\n";
