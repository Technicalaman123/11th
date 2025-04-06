
let totalStudents = 0;
const studentTable = document.getElementById('studentTable');
const totalStudentsDisplay = document.getElementById('totalStudents');

// Mapping of roll numbers to student names
const rollNumberToName = {
    "002": "NANDINI SHARMA",
    "006": "PAYAL VERMA",
    "007": "TAMANNA GUPTA",
    "011": "PUSPANJALI GHOSH",
    "015": "SAHISTA KHATUN",
    "020": "SAKSHI JOGI",
    "021": "ROHAN KUMAR BHARATI",
    "022": "AMAN CHOUDHURY",
    "028": "TANISHA SONI",
    "030": "SANJANA SAHANI",
    "032": "NAYAN PANDEY",
    "034": "ABDUL ALI RAZA",
    "037": "PRASHANT DEWANGAN",
    "040": "SASHANKA DWITIYACHAND",
    "042": "LINGRAJ BEHERA",
    "043": "RUPAM KUMARI SAHANI",
    "046": "MINAKSHI LAHAJAL",
    "047": "SUNIL RAY",
    "048": "SUBHAM SAHU",
    "049": "SAMBHU DORA",
    "050": "ANIKET SAHANI",
    "051": "KRISHNA YADAV",
    "052": "PRITI SAHANI",
    "053": "MOHAMMAD ARMAN",
    "056": "AFREEN BANU",
    "061": "PRIYANKA KUMBHAR",
    "062": "ABU SAALIC",
    "063": "SANJIB NAG",
    "064": "CHANDAN PRASAD",
    "065": "ANJALI YADAV",
    "066": "MEENA DAS",
    "067": "SUMIT GOP",
    "069": "MIRZA HALIM BAIG",
    "072": "AMAN MEHER",
    "073": "LILESWAR MAHANANDA",
    "074": "KIRAN CHOUHAN",
    "075": "DIBAYA SUNA",
    "076": "RINKI KUMARI SAH",
    "077": "GHANASHYAM ORAM",
    "078": "BHARATI BHAINA",
    "079": "SIBU HATI",
    "080": "DIPAK MIRIG",
    "081": "KAMAL SINGH",
    "082": "MANAB ROHIDAS",
    "083": "CHANDAN SUNA",
    "084": "ALOK SUNA",
    "085": "TUSHAR CHAND",
    "087": "SWEETY BISWAKARMA",
    "088": "ANIKET BAG",
    "089": "PREM MUGRI",
    "093": "MD AYUB",
    "096": "SATYAM TANDI",
    "098": "DEVRAJ CHHURA",
    "099": "KISHAN BIBHAR",
    "100": "SAGAR JOGI",
    "101": "DIPALI SUNA",
    "102": "RASHMITA SUNA",
    "104": "SHUBHAM SAHU",
    "105": "UMAR RAJA",
    "106": "ANJALI SHARMA",
    "107": "SIFA PARVEEN",
    "108": "MOHAMMED SAHBAZ",
    "109": "DIBYA BISWAKARMA",
    "110": "DHANANJAY RAO",
    "111": "SABNAM PARWEEN",
    "112": "RAJASHREE SAHU",
    "113": "SUHANI KUMBHAR",
    "114": "SARASWATI YADAV",
    "115": "DEEPTI YADAV",
    "116": "MONI SAHU",
    "117": "KRISHNA BHAINA",
    "118": "JAHINA KHATOON",
    "119": "SAMIRA PARWEEN",
    "121": "KHUSHI KUMARI SAHANI",
    "122": "MANISHA KUMARI CHOUDHURY",
    "123": "SAHIL PARBAT",
    "124": "MD ZAINUL ABDIN",
    "125": "MUSKAN KHATI",
    "126": "ROHIT KUMAR RANA",
    "127": "JASMEET SINGH BHAMRA",
    "128": "MD JAHID KADIR HUSSAIN",
    "129": "MOHAMMAD SHAIF KHAN",
    "130": "MOHAMMED HAFIZ",
    "131": "MOHAMMAD MARUF",
    "132": "MOHAMMED FAIZ KHAN",
    "133": "BHABANI RATAI",
    "134": "DHEEROJ BEHERA",
    "135": "AMAN SUNA",
    "136": "VISHAL KUMAR SAHANI",
    "137": "MD SOHEL AHMAD",
    "138": "MD EHASAN",
    "139": "TUSHAR SUNA",
    "140": "BINIT NAG",
    "142": "PINTU BARIK",
    "143": "MD ZIYA-UR-RAHMAN",
    "144": "SONU CHIRGUNI",
    "145": "ADITYA BISWAKARMA",
    "146": "MOHAMMAD JUNAID RAZA",
    "147": "ARATI SHARMA",
    "148": "MD ZIAUL IMAM",
    "149": "NEHA SAHANI",
    "150": "RITIK PANDIT",
    "151": "TREESA SONKAR",
    "152": "SUSHANTA MEHER",
    "153": "PRIYANKA YADAV",
    "154": "LIPSA DEHURI",
    "155": "NIYATI NAG",
    "156": "ELINA DEEP",
    "157": "BINDIA SAHANI",
    "158": "SHIV SHANKAR SAHANI",
    "159": "PRATHAM SHARMA",
    "160": "BABLU RAJHANSH",
    "161": "AYUSH SAHU",
    "162": "SUKANYA KUMBHAR",
    "163": "JADAV MEHER",
    "167": "AMRIN KHATUN",
    "168": "SUNITA SAHU",
    "169": "AMIT KUMAR SAMANT",
    "170": "SUKANTI BHAGAT",
    "171": "BARSHA THAPA",
    "172": "RAJESWARI KUMBHAR",
    "173": "KRISH JAL",
    "174": "RISHI SAHU",
    "175": "MANJU PATEL"
};


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
        <td><input type="text" class="student-name" placeholder="Student Name"></td>
        <td><input type="text" class="roll-no-input" placeholder="Roll No."></td>
    `;
    
    studentTable.appendChild(row);
    totalStudentsDisplay.textContent = totalStudents;

    // Add event listener to the roll number input
    const rollNoInput = row.querySelector('.roll-no-input');
    const nameInput = row.querySelector('.student-name');

    rollNoInput.addEventListener('input', () => {
        const formattedRollNo = formatRollNo(rollNoInput.value.trim());
        nameInput.value = rollNumberToName[formattedRollNo] || ''; // Lookup name
    });
});

// Sort students by roll number in ascending order
function sortStudentsByRollNo() {
    let rows = Array.from(document.querySelectorAll('#studentTable tr'));

    rows.forEach(row => {
        const rollNoInput = row.querySelector('.roll-no-input');
        if (rollNoInput) {
            const rollNoValue = rollNoInput.value.trim();
            rollNoInput.value = formatRollNo(rollNoValue); // Format roll numbers to 3 digits
        }
    });

    rows.sort((a, b) => {
        const rollA = parseInt(a.querySelector('.roll-no-input').value);
        const rollB = parseInt(b.querySelector('.roll-no-input').value);
        return rollA - rollB;
    });

    studentTable.innerHTML = '';
    rows.forEach(row => studentTable.appendChild(row));
}

// Event listener for sorting when "Done" button is clicked
document.getElementById('doneButton').addEventListener('click', () => {
    sortStudentsByRollNo(); // Sort the table when done
    document.getElementById('doneButton').textContent = 'Print'; // Change button text to "Print"

    document.getElementById('doneButton').removeEventListener('click', sortStudentsByRollNo); // Remove sorting function
    document.getElementById('doneButton').addEventListener('click', openPrintPreview); // Add print preview function
});

// Print preview function
function openPrintPreview() {
    window.print(); // Open the browser's print dialog directly
}
