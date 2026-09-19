// Student Management System — Add Student functionality

let students = JSON.parse(localStorage.getItem("students")) || [];

function renderStudents() {
  const tbody = document.getElementById("studentTableBody");
  tbody.innerHTML = "";

  students.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.course}</td>
    `;
    tbody.appendChild(row);
  });
}

function addStudent() {
  const id = document.getElementById("studentId").value.trim();
  const name = document.getElementById("studentName").value.trim();
  const course = document.getElementById("studentCourse").value.trim();

  if (!id || !name || !course) {
    alert("Please fill all fields before adding a student.");
    return;
  }

  const isDuplicate = students.some((s) => s.id === id);
  if (isDuplicate) {
    alert("A student with this ID already exists.");
    return;
  }

  students.push({ id, name, course });
  localStorage.setItem("students", JSON.stringify(students));

  document.getElementById("studentId").value = "";
  document.getElementById("studentName").value = "";
  document.getElementById("studentCourse").value = "";

  renderStudents();
}

renderStudents();