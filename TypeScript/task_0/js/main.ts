// Defining the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Creating student variables
const student1: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
  location: "New York"
};

const student2: Student = {
  firstName: "John",
  lastName: "Smith",
  age: 24,
  location: "California"
};

// Storing students in an array
const studentsList: Student[] = [student1, student2];

// Function to render the table
document.addEventListener('DOMContentLoaded', () => {
  const table = document.createElement('table');
  table.innerHTML = `<tr><th>First Name</th><th>Location</th></tr>`; // Creating headers for the table
  studentsList.forEach(student => {
      const row = table.insertRow();
      const firstNameCell = row.insertCell();
      const locationCell = row.insertCell();
      const ageCell = row.insertCell();
      firstNameCell.textContent = student.firstName;
      locationCell.textContent = student.location;
  });

  // Appending the table to the body of the webpage
  document.body.appendChild(table);
});
