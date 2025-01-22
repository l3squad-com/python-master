export const questions = {
  questions: [
    // Python Basics - Syntax
    {
      id: 1,
      type: "fill-in-the-blanks",
      question: "In Python, the __ keyword is used to define a function.",
      blanks: ["def"],
      note: "Syntax"
    },
    // Python Basics - Data Types
    {
      id: 2,
      type: "multiple-choice",
      question: "Which data type is used to store a sequence of characters in Python?",
      options: ["int", "str", "list", "bool"],
      correctAnswers: ["str"],
      multipleAnswers: false,
      note: "Data Types"
    },
    // Python Basics - Variables
    {
      id: 3,
      type: "fill-in-the-blanks",
      question: "In Python, variables are created when you assign a value using the __ operator.",
      blanks: ["="],
      note: "Variables"
    },
    // Python Basics - Loops
    {
      id: 4,
      type: "fill-in-the-blanks",
      question: "A __ loop is used to iterate over a sequence in Python.",
      blanks: ["for"],
      note: "Loops"
    },
    // Python Basics - Conditionals
    {
      id: 5,
      type: "fill-in-the-blanks",
      question: "The __ keyword is used in Python to check multiple conditions.",
      blanks: ["elif"],
      note: "Conditionals"
    },
    // Python Basics - Lists
    {
      id: 6,
      type: "multiple-choice",
      question: "Which of the following is the correct syntax to create a list in Python?",
      options: ["list = {1, 2, 3}", "list = [1, 2, 3]", "list = (1, 2, 3)", "list = <1, 2, 3>"],
      correctAnswers: ["list = [1, 2, 3]"],
      multipleAnswers: false,
      note: "Lists"
    },
    // Python Basics - Dictionaries
    {
      id: 7,
      type: "multiple-choice",
      question: "Which of the following is NOT a valid way to access a value in a dictionary?",
      options: ["dict['key']", "dict.key", "dict.get('key')", "dict{key}"],
      correctAnswers: ["dict{key}"],
      multipleAnswers: false,
      note: "Dictionaries"
    },
    // Python Basics - Functions
    {
      id: 8,
      type: "fill-in-the-blanks",
      question: "The __ keyword is used to return a value from a function in Python.",
      blanks: ["return"],
      note: "Functions"
    },
    // Python Basics - Exception Handling
    {
      id: 9,
      type: "multiple-choice",
      question: "Which block in Python is used to handle exceptions?",
      options: ["try", "catch", "finally", "except"],
      correctAnswers: ["except"],
      multipleAnswers: false,
      note: "Exception Handling"
    },
    // Python Basics - Strings
    {
      id: 10,
      type: "fill-in-the-blanks",
      question: "In Python, the __ method is used to convert all characters in a string to lowercase.",
      blanks: ["lower"],
      note: "Strings"
    },
    // Python Basics - Tuples
    {
      id: 11,
      type: "fill-in-the-blanks",
      question: "A tuple is created using __ instead of square brackets.",
      blanks: ["parentheses"],
      note: "Tuples"
    },
    // Python Basics - Keywords
    {
      id: 12,
      type: "multiple-choice",
      question: "Which of the following is NOT a valid Python keyword?",
      options: ["global", "class", "include", "lambda"],
      correctAnswers: ["include"],
      multipleAnswers: false,
      note: "Keywords"
    },
    // Python Basics - Modules
    {
      id: 13,
      type: "fill-in-the-blanks",
      question: "To use a module in Python, you need to use the __ keyword.",
      blanks: ["import"],
      note: "Modules"
    },
    // Python Basics - OOP Concepts
    {
      id: 14,
      type: "multiple-choice",
      question: "Which of these is NOT a principle of Object-Oriented Programming?",
      options: ["Encapsulation", "Polymorphism", "Inheritance", "Indexing"],
      correctAnswers: ["Indexing"],
      multipleAnswers: false,
      note: "OOP"
    },
    // Python Basics - File Handling
    {
      id: 15,
      type: "matching",
      question: "Match the file modes with their functionality",
      leftItems: ["r", "w", "a"],
      rightItems: ["Read mode", "Write mode", "Append mode"],
      correctMatches: {
        r: "Read mode",
        w: "Write mode",
        a: "Append mode"
      },
      note: "File Handling"
    }
  ]
};
