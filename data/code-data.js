import CPlusPlusIcon from "@/components/elements/icons/skills/CPlusPlusIcon";
import JavascriptIcon from "@/components/elements/icons/skills/JavaScriptIcon";
import PythonIcon from "@/components/elements/icons/skills/PythonIcon";

export const codeData = [
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

    return c;
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
    Icon: CPlusPlusIcon,
    language: "cpp",
    filename: "main.cpp",
    code: `
#include <stdio.h>

int main(void) {
    int a = 1;
    int b = 2;

    int c = a + b;

    printf("%d", c); // 3

    return c;
}

main();

`,
  },
];
