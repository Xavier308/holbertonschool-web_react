# TypeScript Project

This project contains various TypeScript exercises and tasks to help you learn and practice TypeScript concepts.

## Learning Objectives

- Basic types in TypeScript
- Interfaces, Classes, and functions
- How to work with the DOM and TypeScript
- Generic types
- How to use namespaces
- How to merge declarations
- How to use an ambient Namespace to import an external library
- Basic nominal typing with TypeScript

## Requirements

- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- All files will be transpiled on Ubuntu 18.04
- TS scripts will be checked with jest (version 24.9.*)
- A README.md file at the root of the project folder is mandatory
- Code should use the ts extension when possible
- The TypeScript compiler should not show any warning or error when compiling your code

## Running TypeScript Files Directly

To run a TypeScript file directly from the command line like a script with a shebang (#!), follow these steps:

1. Install ts-node and TypeScript:
   ```
   npm install -g typescript ts-node
   ```

2. If using Node.js specific APIs, install the TypeScript declarations:
   ```
   npm install -g @types/node
   ```

3. Add the shebang to your TypeScript file:
   ```typescript
   #!/usr/bin/env ts-node

   // Your TypeScript code goes here
   console.log('Hello from TypeScript');
   ```

4. Make the TypeScript file executable:
   ```
   chmod +x script.ts
   ```

5. Run your TypeScript file:
   ```
   ./script.ts
   ```

Note: This method compiles the TypeScript to JavaScript first, as Node.js does not execute TypeScript directly.