let totalStudents = 0;
const studentTable = document.getElementById('studentTable');
const totalStudentsDisplay = document.getElementById('totalStudents');

// Function to format roll number to 3 digits
function formatRollNo(rollNo) {
    return rollNo.padStart(3, '0'); // Ensure 3 digits by adding leading zeros
}

// Add student row to the table
document.getElementById('addRow').addEventListener('click', () => {
    totalStudents++;
    const row = document.createElement('tr');
    
    row.innerHTML = `
        <td>${totalStudents}</td>
        <td><input type="text" placeholder="Student Name"></td>
        <td><input type="text" class="roll-no-input" placeholder="Roll No."></td>
        
    `;
    
    studentTable.appendChild(row);
    totalStudentsDisplay.textContent = totalStudents;
});

// Sort students by roll number in ascending order
function sortStudentsByRollNo() {
    let rows = Array.from(document.querySelectorAll('#studentTable tr'));
    
    // Get roll numbers and format them to 3 digits
    rows.forEach(row => {
        const rollNoInput = row.querySelector('.roll-no-input');
        if (rollNoInput) {
            const rollNoValue = rollNoInput.value.trim();
            rollNoInput.value = formatRollNo(rollNoValue); // Format roll numbers to 3 digits
        }
    });
    
    // Sort rows by roll number
    rows.sort((a, b) => {
        const rollA = parseInt(a.querySelector('.roll-no-input').value);
        const rollB = parseInt(b.querySelector('.roll-no-input').value);
        return rollA - rollB;
    });
    
    // Clear and re-add sorted rows
    studentTable.innerHTML = '';
    rows.forEach(row => studentTable.appendChild(row));
}

// Event listener for sorting when "Done" button is clicked
document.getElementById('doneButton').addEventListener('click', () => {
    sortStudentsByRollNo(); // Sort the table when done
});
doneButton.addEventListener('click', () => {
    sortStudentsByRollNo(); // Roll no को sort करो
    doneButton.textContent = 'Print'; // बटन का नाम "Print" में बदलो

    doneButton.removeEventListener('click', sortStudentsByRollNo); // Sorting function हटाओ
    doneButton.addEventListener('click', openPrintPreview); // Print preview function जोड़ो
});

// Print preview function
function openPrintPreview() {
    window.print(); // ब्राउज़र के प्रिंट डायलॉग को सीधे खोलने के लिए
}

