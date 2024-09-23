#!/usr/bin/env ts-node

// main.ts exercises 1-4
// Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

// Create an instance of Teacher
const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
};

// Log the teacher instance
console.log(teacher3);

// Extend the Teacher interface to include numberOfReports for Directors
interface Directors extends Teacher {
    numberOfReports: number;
}

// Create an instance of Directors
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

// Log the director instance
console.log(director1);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Define the interfaces for class structure and constructor
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

// Define the class according to the interfaces
class StudentClass implements StudentClassInterface {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}
