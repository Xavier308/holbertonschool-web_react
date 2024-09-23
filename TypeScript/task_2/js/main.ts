#!/usr/bin/env ts-node

// Interfaces
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Classes
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// Function to create employees
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

// Function to check if employee is a Director (type predicate)
function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

// Testing function for the code
function executeWork(employee: Director | Teacher): void {
    if (employee instanceof Director) {
        console.log(employee.workDirectorTasks());
    } else if (employee instanceof Teacher) {
        console.log(employee.workTeacherTasks());
    }
}

// String literal type for subjects
type Subjects = 'Math' | 'History';

// Function to teach a class based on the subject
function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return "Teaching Math";
    } else if (todayClass === 'History') {
        return "Teaching History";
    }
    throw new Error("Invalid class");
}

// Using the executeWork function like Intranet example
executeWork(createEmployee(200));
executeWork(createEmployee(1000));

// Testing the teachClass function
console.log(teachClass('Math'));
console.log(teachClass('History'));
