let studentTable = document.getElementById("studentTable");
let totalStudents = 0;

// ✅ Full Students Data
let studentData = {
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

// Add row function
function addRow(rollNo) {
  totalStudents++;
  let row = document.createElement("tr");

  // Roll ko string bana ke check karo
  let rollKey = rollNo.toString().padStart(3, "0");  

  row.innerHTML = `
    <td>${totalStudents}</td>
    <td>${studentData[rollKey] || "Unknown"}</td>
    <td>${rollKey}</td>
    <td><button class="deleteBtn" onclick="deleteRow(this)">Delete</button></td>
  `;

  studentTable.appendChild(row);
}

// Delete row function
function deleteRow(btn) {
  btn.closest("tr").remove();
}

// Bulk Add
document.getElementById("bulkAddButton").addEventListener("click", () => {
  let rolls = document.getElementById("bulkRollInput").value.trim().split(/\s+/);
  rolls.forEach(r => addRow(r));
  document.getElementById("bulkRollInput").value = "";
});

// Dialpad functions
function dialPress(num) {
  document.getElementById("dialInput").value += num;
}
function dialDelete() {
  let input = document.getElementById("dialInput");
  input.value = input.value.slice(0, -1);
}
function dialNext() {
  let roll = document.getElementById("dialInput").value.trim();
  if (roll) addRow(roll);
  document.getElementById("dialInput").value = "";
}

// ✅ Done Button - Sort Roll Nos
document.getElementById("doneButton").addEventListener("click", () => {
  let rows = Array.from(studentTable.querySelectorAll("tr"));

  rows.sort((a, b) => {
    let rollA = parseInt(a.cells[2].innerText);
    let rollB = parseInt(b.cells[2].innerText);
    return rollA - rollB;
  });

  studentTable.innerHTML = "";
  totalStudents = 0;
  rows.forEach(r => {
    totalStudents++;
    r.cells[0].innerText = totalStudents; 
    studentTable.appendChild(r);
  });
});

// Save
document.getElementById("saveButton").addEventListener("click", () => {
  localStorage.setItem("studentTable", studentTable.innerHTML);
  alert("Saved!");
});

// Restore
document.getElementById("restoreButton").addEventListener("click", () => {
  let saved = localStorage.getItem("studentTable");
  if (saved) {
    studentTable.innerHTML = saved;
    alert("Restored!");
  }
});

// Print
document.getElementById("printButton").addEventListener("click", () => {
  window.print();
});

// Export CSV
document.getElementById("exportCsvButton").addEventListener("click", () => {
  let csv = [];
  document.querySelectorAll("table tr").forEach(row => {
    let cols = Array.from(row.querySelectorAll("td,th")).map(td => td.innerText);
    cols = cols.filter(c => c !== "Delete");
    csv.push(cols.join(","));
  });
  let blob = new Blob([csv.join("\n")], { type: "text/csv" });
  let a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "students.csv";
  a.click();
});

// ✅ Export PDF
document.getElementById("exportPdfButton").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  let doc = new jsPDF();

  let today = new Date();
  let formattedDate = today.toLocaleDateString("en-GB").replace(/\//g, "-"); 

  doc.setFontSize(14);
  doc.text("Student Attendance - Class 12th Commerce", 10, 10);
  doc.text("Date: " + formattedDate, 150, 10);

  let rows = [];
  rows.push(["SR. No", "Name", "Roll No"]);

  document.querySelectorAll("#studentTable tr").forEach(tr => {
    let sr = tr.cells[0].innerText;
    let name = tr.cells[1].innerText;
    let roll = tr.cells[2].innerText;
    rows.push([sr, name, roll]);
  });

  let y = 20;
  rows.forEach(r => {
    doc.text(r.join("   "), 10, y);
    y += 10;
  });

  let fileName = `${formattedDate} Class 12th Commerce Attendance.pdf`;
  doc.save(fileName);
});
