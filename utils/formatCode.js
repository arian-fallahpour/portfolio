export function formatJavascriptCode(code) {
  const keywords = {
    function: "#77BDFB",
    const: "#FAA356",
    let: "#FAA356",
    var: "#FAA356",
    return: "#FA7970",
    if: "#77BDFB",
    else: "#77BDFB",
    for: "#77BDFB",
    while: "#77BDFB",
    true: "#FA7970",
    false: "#FA7970",
  };

  const stringColor = "#FAA356"; // Color for strings
  const numberColor = "#CEA5FA"; // Color for numbers
  const commentColor = "#89929B"; // Color for comments
  const methodColor = "#A2D2FB"; // Color for methods that call a function
  const defaultColor = "white"; // Default color for other characters

  let output = [];
  let currentWord = "";
  let currentColor = defaultColor;
  let inString = false;
  let stringChar = ""; // Tracks the starting quote for strings (single or double)
  let inComment = false;

  for (let i = 0; i < code.length; i++) {
    const char = code[i];

    if (inComment) {
      // Continue adding characters to the comment until the end of the line
      output.push({ char, color: commentColor });
      if (char === "\n") {
        inComment = false; // End of the comment
      }
      continue;
    }

    if (inString) {
      // Continue adding characters to the string until the closing quote is found
      currentColor = stringColor;
      output.push({ char, color: currentColor });

      if (char === stringChar) {
        inString = false; // End of the string
      }
      continue;
    }

    // Check if the current character starts a string
    if (char === '"' || char === "'") {
      inString = true;
      stringChar = char;
      currentColor = stringColor;
      output.push({ char, color: currentColor });
      continue;
    }

    // Check if the current character starts a comment
    if (char === "/" && code[i + 1] === "/") {
      inComment = true;
      output.push({ char, color: commentColor });
      output.push({ char: code[i + 1], color: commentColor });
      i++;
      continue;
    }

    // Check if the current character is part of a number
    if (/\d/.test(char)) {
      currentWord += char;
      currentColor = numberColor;
      continue;
    }

    // If the character is part of a word (alphanumeric or underscore), keep building the word
    if (/\w/.test(char)) {
      currentWord += char;
      continue;
    }

    // If the word is a keyword, method, or number, apply the color to the whole word
    if (currentWord) {
      // Determine if the word is a method (followed by an opening parenthesis)
      if (code[i] === "(") {
        currentColor = methodColor;
      } else if (currentColor !== numberColor) {
        currentColor = keywords[currentWord] || defaultColor;
      }

      for (let j = 0; j < currentWord.length; j++) {
        output.push({ char: currentWord[j], color: currentColor });
      }
      currentWord = ""; // Reset currentWord after processing
      currentColor = defaultColor; // Reset color to default
    }

    // Handle the non-alphanumeric character (like spaces, punctuation, etc.)
    output.push({ char, color: defaultColor });
  }

  // Handle the last word if the code ends with a word or number
  if (currentWord) {
    if (currentColor !== numberColor) {
      currentColor = keywords[currentWord] || defaultColor;
    }
    for (let j = 0; j < currentWord.length; j++) {
      output.push({ char: currentWord[j], color: currentColor });
    }
  }

  return output;
}

export function formatPythonCode(code) {
  const keywords = {
    def: "#77BDFB",
    return: "#FA7970",
    if: "#77BDFB",
    elif: "#77BDFB",
    else: "#77BDFB",
    for: "#77BDFB",
    while: "#77BDFB",
    True: "#FA7970",
    False: "#FA7970",
    import: "#77BDFB",
    from: "#77BDFB",
    as: "#77BDFB",
    class: "#FAA356",
    self: "#FAA356",
    and: "#77BDFB",
    or: "#77BDFB",
    // Add more Python keywords and their colors as needed
  };

  const stringColor = "#FAA356"; // Color for strings
  const numberColor = "#CEA5FA"; // Color for numbers
  const commentColor = "#89929B"; // Color for comments
  const methodColor = "#A2D2FB"; // Color for methods that call a function
  const defaultColor = "white"; // Default color for other characters

  let output = [];
  let currentWord = "";
  let currentColor = defaultColor;
  let inString = false;
  let stringChar = ""; // Tracks the starting quote for strings (single or double)
  let inComment = false;

  for (let i = 0; i < code.length; i++) {
    const char = code[i];

    if (inComment) {
      // Continue adding characters to the comment until the end of the line
      output.push({ char, color: commentColor });
      if (char === "\n") {
        inComment = false; // End of the comment
      }
      continue;
    }

    if (inString) {
      // Continue adding characters to the string until the closing quote is found
      currentColor = stringColor;
      output.push({ char, color: currentColor });

      if (char === stringChar) {
        // Check if it's the end of the string
        inString = false;
      }
      continue;
    }

    // Check if the current character starts a string
    if (char === '"' || char === "'") {
      inString = true;
      stringChar = char;
      currentColor = stringColor;
      output.push({ char, color: currentColor });
      continue;
    }

    // Check if the current character starts a comment
    if (char === "#") {
      inComment = true;
      output.push({ char, color: commentColor });
      continue;
    }

    // Check if the current character is part of a number
    if (/\d/.test(char)) {
      currentWord += char;
      currentColor = numberColor;
      continue;
    }

    // If the character is part of a word (alphanumeric or underscore), keep building the word
    if (/\w/.test(char)) {
      currentWord += char;
      continue;
    }

    // If the word is a keyword or number, apply the color to the whole word
    if (currentWord) {
      // Determine if the word is a method (followed by an opening parenthesis)
      if (code[i] === "(") {
        currentColor = methodColor;
      } else if (currentColor !== numberColor) {
        currentColor = keywords[currentWord] || defaultColor;
      }

      for (let j = 0; j < currentWord.length; j++) {
        output.push({ char: currentWord[j], color: currentColor });
      }
      currentWord = ""; // Reset currentWord after processing
      currentColor = defaultColor; // Reset color to default
    }

    // Handle the non-alphanumeric character (like spaces, punctuation, etc.)
    output.push({ char, color: defaultColor });
  }

  // Handle the last word if the code ends with a word or number
  if (currentWord) {
    if (currentColor !== numberColor) {
      currentColor = keywords[currentWord] || defaultColor;
    }
    for (let j = 0; j < currentWord.length; j++) {
      output.push({ char: currentWord[j], color: currentColor });
    }
  }

  return output;
}

export function formatCCode(code) {
  const keywords = {
    int: "#FAA356",
    float: "#FAA356",
    double: "#FAA356",
    char: "#FAA356",
    return: "#FA7970",
    if: "#77BDFB",
    else: "#77BDFB",
    for: "#77BDFB",
    while: "#77BDFB",
    do: "#77BDFB",
    switch: "#77BDFB",
    case: "#77BDFB",
    break: "#FA7970",
    continue: "#FA7970",
    void: "#FA7970",
    struct: "#77BDFB",
    typedef: "#77BDFB",
    // Add more C keywords and their colors as needed
  };

  const stringColor = "#FAA356"; // Color for strings
  const numberColor = "#CEA5FA"; // Color for numbers
  const commentColor = "#89929B"; // Color for comments
  const methodColor = "#A2D2FB"; // Color for methods that call a function
  const defaultColor = "white"; // Default color for other characters
  const preprocessorColor = "#89929B";

  let output = [];
  let currentWord = "";
  let currentColor = defaultColor;
  let inString = false;
  let stringChar = ""; // Tracks the starting quote for strings (single or double)
  let inComment = false;
  let inPreprocessorDirective = false;

  for (let i = 0; i < code.length; i++) {
    const char = code[i];

    if (inComment) {
      // Continue adding characters to the comment until the end of the line
      output.push({ char, color: commentColor });
      if (char === "\n") {
        inComment = false; // End of the comment
      }
      continue;
    }

    if (inString) {
      // Continue adding characters to the string until the closing quote is found
      currentColor = stringColor;
      output.push({ char, color: currentColor });

      if (char === stringChar) {
        inString = false; // End of the string
      }
      continue;
    }

    // Check if the current character starts a string
    if (char === '"' || char === "'") {
      inString = true;
      stringChar = char;
      currentColor = stringColor;
      output.push({ char, color: currentColor });
      continue;
    }

    // Check if the current character starts a comment
    if (char === "/" && code[i + 1] === "/") {
      inComment = true;
      output.push({ char, color: commentColor });
      output.push({ char: code[i + 1], color: commentColor });
      i++;
      continue;
    }

    // Check if the current character starts a multi-line comment
    if (char === "/" && code[i + 1] === "*") {
      inComment = true;
      output.push({ char, color: commentColor });
      output.push({ char: code[i + 1], color: commentColor });
      i++;
      continue;
    }

    // Check if the current character ends a multi-line comment
    if (inComment && char === "*" && code[i + 1] === "/") {
      output.push({ char, color: commentColor });
      output.push({ char: code[i + 1], color: commentColor });
      i++;
      inComment = false;
      continue;
    }

    // Check if the current character starts a preprocessor directive
    if (char === "#" && !/\w/.test(currentWord)) {
      inPreprocessorDirective = true;
      currentColor = preprocessorColor;
    }

    // If the character is part of a word (alphanumeric or underscore), keep building the word
    if (/\w/.test(char) || (inPreprocessorDirective && char === "#")) {
      currentWord += char;
      continue;
    }

    // If the word is a keyword, method, number, or preprocessor directive, apply the color to the whole word
    if (currentWord) {
      // Determine if the word is a function call (followed by an opening parenthesis)
      if (code[i] === "(") {
        currentColor = methodColor;
      } else if (currentColor !== numberColor && !inPreprocessorDirective) {
        currentColor = keywords[currentWord] || defaultColor;
      }

      for (let j = 0; j < currentWord.length; j++) {
        output.push({ char: currentWord[j], color: currentColor });
      }

      currentWord = ""; // Reset currentWord after processing
      currentColor = defaultColor; // Reset color to default
      inPreprocessorDirective = false;
    }

    // Handle the non-alphanumeric character (like spaces, punctuation, etc.)
    output.push({ char, color: defaultColor });
  }

  // Handle the last word if the code ends with a word or number
  if (currentWord) {
    if (currentColor !== numberColor) {
      currentColor = keywords[currentWord] || defaultColor;
    }
    for (let j = 0; j < currentWord.length; j++) {
      output.push({ char: currentWord[j], color: currentColor });
    }
  }

  return output;
}

const codeFormatters = {
  javascript: formatJavascriptCode,
  python: formatPythonCode,
  c: formatCCode,
};

export default codeFormatters;
