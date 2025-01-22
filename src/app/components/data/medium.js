export const questions = {
  questions: [
    // Python Intermediate - Functions
    {
      id: 1,
      type: "fill-in-the-blanks",
      question: "In Python, a __ function is a function defined inside another function.",
      blanks: ["nested"],
      note: "Functions"
    },
    // Python Intermediate - Lambda Functions
    {
      id: 2,
      type: "multiple-choice",
      question: "What is the output of the following code: `(lambda x: x + 3)(5)`?",
      options: ["3", "5", "8", "15"],
      correctAnswers: ["8"],
      multipleAnswers: false,
      note: "Lambda Functions"
    },
    // Python Intermediate - List Comprehension
    {
      id: 3,
      type: "fill-in-the-blanks",
      question: "The syntax for list comprehension in Python is `[expression __ iterable if condition]`.",
      blanks: ["for"],
      note: "List Comprehension"
    },
    // Python Intermediate - Dictionaries
    {
      id: 4,
      type: "multiple-choice",
      question: "Which method is used to get all the keys from a dictionary?",
      options: ["values()", "keys()", "items()", "get()"],
      correctAnswers: ["keys()"],
      multipleAnswers: false,
      note: "Dictionaries"
    },
    // Python Intermediate - Sets
    {
      id: 5,
      type: "fill-in-the-blanks",
      question: "The __ method is used to find the intersection of two sets.",
      blanks: ["intersection"],
      note: "Sets"
    },
    // Python Intermediate - Exception Handling
    {
      id: 6,
      type: "multiple-choice",
      question: "What will the `finally` block do in Python exception handling?",
      options: [
        "Execute if no exception occurs",
        "Execute only if an exception occurs",
        "Execute whether or not an exception occurs",
        "Ignore exceptions"
      ],
      correctAnswers: ["Execute whether or not an exception occurs"],
      multipleAnswers: false,
      note: "Exception Handling"
    },
    // Python Intermediate - File Handling
    {
      id: 7,
      type: "fill-in-the-blanks",
      question: "The __ method is used to read a specific number of characters from a file.",
      blanks: ["read"],
      note: "File Handling"
    },
    // Python Intermediate - OOP Concepts
    {
      id: 8,
      type: "multiple-choice",
      question: "Which of these statements about Python classes is FALSE?",
      options: [
        "A class can inherit from multiple classes.",
        "Private members are accessible outside the class.",
        "A class can have methods and attributes.",
        "Objects are instances of classes."
      ],
      correctAnswers: ["Private members are accessible outside the class."],
      multipleAnswers: false,
      note: "OOP"
    },
    // Python Intermediate - Iterators
    {
      id: 9,
      type: "fill-in-the-blanks",
      question: "The __ function is used to get the next item from an iterator.",
      blanks: ["next"],
      note: "Iterators"
    },
    // Python Intermediate - Generators
    {
      id: 10,
      type: "fill-in-the-blanks",
      question: "A generator in Python is created using the __ keyword.",
      blanks: ["yield"],
      note: "Generators"
    },
    // Python Intermediate - Decorators
    {
      id: 11,
      type: "multiple-choice",
      question: "What is the purpose of decorators in Python?",
      options: [
        "To create new functions",
        "To modify the behavior of a function or class",
        "To debug code",
        "To define constants"
      ],
      correctAnswers: ["To modify the behavior of a function or class"],
      multipleAnswers: false,
      note: "Decorators"
    },
    // Python Intermediate - Modules and Packages
    {
      id: 12,
      type: "fill-in-the-blanks",
      question: "The __ file is used to mark a directory as a Python package.",
      blanks: ["__init__.py"],
      note: "Modules and Packages"
    },
    // Python Intermediate - Regular Expressions
    {
      id: 13,
      type: "matching",
      question: "Match the regular expression metacharacters with their functionality",
      leftItems: ["^", "$", "\\d", "\\w"],
      rightItems: ["Start of a string", "End of a string", "Digit", "Word character"],
      correctMatches: {
        "^": "Start of a string",
        "$": "End of a string",
        "\\d": "Digit",
        "\\w": "Word character"
      },
      note: "Regular Expressions"
    },
    // Python Intermediate - Multithreading
    {
      id: 14,
      type: "multiple-choice",
      question: "Which module in Python is used for multithreading?",
      options: ["thread", "threading", "multiprocessing", "os"],
      correctAnswers: ["threading"],
      multipleAnswers: false,
      note: "Multithreading"
    },
    // Python Intermediate - Memory Management
    {
      id: 15,
      type: "fill-in-the-blanks",
      question: "In Python, the __ module is used for garbage collection.",
      blanks: ["gc"],
      note: "Memory Management"
    }
  ]
};
