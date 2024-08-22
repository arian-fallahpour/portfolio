import CIcon from "@/components/elements/icons/CIcon";
import JavascriptIcon from "@/components/elements/icons/JavascriptIcon";
import PythonIcon from "@/components/elements/icons/PythonIcon";
import codeFormatters, { formatJavascriptCode } from "@/utils/formatCode";

export const tabs = [
  {
    Icon: JavascriptIcon,
    language: "javascript",
    filename: "index.js",
    code: `
function main() {
    const a = 1;
    const b = "2";

    const c = a + b;

    console.log(c); // 3

    return c
}

main();
`,
  },
  {
    Icon: PythonIcon,
    language: "python",
    filename: "script.py",
    code: `
def main():
    a = 1
    b = 2

    c = a + b;

    print(c); # 3

    return c

main();
`,
  },
  {
    Icon: CIcon,
    language: "c",
    filename: "main.c",
    code: `
#include <stdio.h>

int main(void) {
    int a = 1;
    int b = 2;

    int c = a + b;

    printf("%d", c); // 3

    return c
}

main();
`,
  },
];

export const formattedCode = tabs.map((tab) => codeFormatters[tab.language](tab.code));
