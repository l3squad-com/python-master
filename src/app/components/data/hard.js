export const questions = {
  questions: [
    // Python Advanced - Metaclasses
    {
      id: 1,
      type: "fill-in-the-blanks",
      question: "In Python, a __ defines the behavior of a class, similar to how a class defines the behavior of an object.",
      blanks: ["metaclass"],
      note: "Metaclasses"
    },
    // Python Advanced - Coroutines
    {
      id: 2,
      type: "multiple-choice",
      question: "Which keyword is used to pause a coroutine in Python?",
      options: ["await", "yield", "pause", "stop"],
      correctAnswers: ["await"],
      multipleAnswers: false,
      note: "Coroutines"
    },
    // Python Advanced - Context Managers
    {
      id: 3,
      type: "fill-in-the-blanks",
      question: "To create a context manager, a class must implement the __ and __ methods.",
      blanks: ["__enter__", "__exit__"],
      note: "Context Managers"
    },
    // Python Advanced - Decorators
    {
      id: 4,
      type: "multiple-choice",
      question: "What does the `@staticmethod` decorator in Python do?",
      options: [
        "Makes the method private",
        "Makes the method a static method that doesn't require an instance",
        "Turns the method into a coroutine",
        "Enforces type-checking on arguments"
      ],
      correctAnswers: ["Makes the method a static method that doesn't require an instance"],
      multipleAnswers: false,
      note: "Decorators"
    },
    // Python Advanced - Multiprocessing
    {
      id: 5,
      type: "fill-in-the-blanks",
      question: "The __ class in the `multiprocessing` module is used to create shared memory for multiple processes.",
      blanks: ["Value"],
      note: "Multiprocessing"
    },
    // Python Advanced - Thread Synchronization
    {
      id: 6,
      type: "multiple-choice",
      question: "Which object is used to prevent race conditions in multithreaded Python programs?",
      options: ["Semaphore", "Event", "Lock", "Queue"],
      correctAnswers: ["Lock"],
      multipleAnswers: false,
      note: "Thread Synchronization"
    },
    // Python Advanced - Regular Expressions
    {
      id: 7,
      type: "fill-in-the-blanks",
      question: "The __ function in the `re` module is used to search for a pattern at the start of a string.",
      blanks: ["match"],
      note: "Regular Expressions"
    },
    // Python Advanced - Abstract Base Classes
    {
      id: 8,
      type: "multiple-choice",
      question: "Which module provides abstract base classes in Python?",
      options: ["abc", "base", "abstract", "collections"],
      correctAnswers: ["abc"],
      multipleAnswers: false,
      note: "Abstract Base Classes"
    },
    // Python Advanced - Memory Management
    {
      id: 9,
      type: "fill-in-the-blanks",
      question: "The __ module provides utilities to inspect and manipulate object references in memory.",
      blanks: ["sys"],
      note: "Memory Management"
    },
    // Python Advanced - Asyncio
    {
      id: 10,
      type: "multiple-choice",
      question: "What does `asyncio.gather()` do?",
      options: [
        "Executes a coroutine sequentially",
        "Runs multiple coroutines concurrently",
        "Creates a coroutine object",
        "Terminates a coroutine"
      ],
      correctAnswers: ["Runs multiple coroutines concurrently"],
      multipleAnswers: false,
      note: "Asyncio"
    },
    // Python Advanced - C Extensions
    {
      id: 11,
      type: "fill-in-the-blanks",
      question: "Python allows the inclusion of C code using the __ module.",
      blanks: ["ctypes"],
      note: "C Extensions"
    },
    // Python Advanced - Serialization
    {
      id: 12,
      type: "multiple-choice",
      question: "Which module is used to serialize Python objects into JSON format?",
      options: ["pickle", "json", "marshal", "shelve"],
      correctAnswers: ["json"],
      multipleAnswers: false,
      note: "Serialization"
    },
    // Python Advanced - Garbage Collection
    {
      id: 13,
      type: "fill-in-the-blanks",
      question: "The __ function in the `gc` module triggers an immediate garbage collection cycle.",
      blanks: ["collect"],
      note: "Garbage Collection"
    },
    // Python Advanced - Testing
    {
      id: 14,
      type: "matching",
      question: "Match the testing tools with their purpose in Python",
      leftItems: ["unittest", "pytest", "mock"],
      rightItems: [
        "Built-in framework for unit testing",
        "Third-party framework for testing",
        "Simulates objects for testing"
      ],
      correctMatches: {
        unittest: "Built-in framework for unit testing",
        pytest: "Third-party framework for testing",
        mock: "Simulates objects for testing"
      },
      note: "Testing"
    },
    // Python Advanced - Metaprogramming
    {
      id: 15,
      type: "fill-in-the-blanks",
      question: "The __ function in Python allows dynamic attribute access.",
      blanks: ["getattr"],
      note: "Metaprogramming"
    }
  ]
};
