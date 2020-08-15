const GPA = [4, 3.7, 3.3, 3, 2.7, 2.3, 2, 1.7, 1.3, 0];

function calculate() {
	let arrOM = [];
	let arrGPA = [];
	let arrCREDIT = [];
	let arrGRADE = [];
	let arr_CREDIT_GPA = [];

	let sum_Credit_Gpa = 0;
	let sumOM = 0;
	let sumCREDIT = 0;
	let sumGPA = 0;
	let totalGPA = 0;

	let inputOM = document.querySelectorAll("input#obtainedMarks");
	let inputCreditBox = document.querySelectorAll("input#creditBox");

	let percent = document.getElementById("percentage");
	let previousGPA = document.getElementById("PGPA");

	// Sum of All Credits
	for (let i = 0; i < inputCreditBox.length; i++) {
		arrCREDIT.push(parseInt(inputCreditBox[i].value));
		sumCREDIT += arrCREDIT[i];
	}

	// Sum of obtained marks
	for (let i = 0; i < inputOM.length; i++) {
		arrOM.push(parseInt(inputOM[i].value));
		sumOM = sumOM + arrOM[i];

		if (arrOM[i] >= 90 && arrOM[i] <= 100) {
			arrGPA.push(GPA[0]);
			arrGRADE.push("A+");
		} else if (arrOM[i] <= 89 && arrOM[i] >= 85) {
			arrGPA.push(GPA[1]);
			arrGRADE.push("A-");
		} else if (arrOM[i] <= 84 && arrOM[i] >= 80) {
			arrGPA.push(GPA[2]);
			arrGRADE.push("B+");
		} else if (arrOM[i] <= 79 && arrOM[i] >= 75) {
			arrGPA.push(GPA[3]);
			arrGRADE.push("B");
		} else if (arrOM[i] <= 74 && arrOM[i] >= 70) {
			arrGPA.push(GPA[4]);
			arrGRADE.push("B-");
		} else if (arrOM[i] <= 69 && arrOM[i] >= 65) {
			arrGPA.push(GPA[5]);
			arrGRADE.push("C+");
		} else if (arrOM[i] <= 64 && arrOM[i] >= 60) {
			arrGPA.push(GPA[6]);
			arrGRADE.push("C");
		} else if (arrOM[i] <= 59 && arrOM[i] >= 55) {
			arrGPA.push(GPA[7]);
			arrGRADE.push("C-");
		} else if (arrOM[i] <= 54 && arrOM[i] >= 50) {
			arrGPA.push(GPA[8]);
			arrGRADE.push("D");
		} else if (arrOM[i] <= 49) {
			arrGPA.push(GPA[9]);
			arrGRADE.push("F");
		}

		// Sum of All GPA's
		sumGPA = sumGPA + arrGPA[i];

		document.querySelectorAll("#gpaBox")[i].innerText = arrGPA[i];
		document.querySelectorAll("#gradeBox")[i].innerText = arrGRADE[i];
	}

	// Total Percentage
	percent.innerText = ((sumOM / (arrOM.length * 100)) * 100).toFixed(2) + "%";

	// CGPA
	for (let i = 0; i < arrCREDIT.length; i++) {
		arr_CREDIT_GPA[i] = arrCREDIT[i] * arrGPA[i];
		sum_Credit_Gpa += arr_CREDIT_GPA[i];
	}

	// Total GPA
	totalGPA = (sum_Credit_Gpa / sumCREDIT).toFixed(2);

	// CGPA
	if (previousGPA.value == "") {
		gpa.innerText = totalGPA;
	} else {
		gpa.innerText = (
			(parseFloat(totalGPA) + parseFloat(previousGPA.value)) /
			2
		).toFixed(2);
	}

	console.log("CGPA : " + totalGPA + previousGPA.value);
	console.log("PREVIOUS GPA : " + previousGPA.value);
	console.log("MULTIPLY GPA AND CREDITS : " + arr_CREDIT_GPA + ",");
	console.log("OBTAINED MARKS : " + sumOM);
	console.log("ARRAY OBTAINED MARKS : " + arrOM + " , ");
	console.log("ARRAY GPA : " + arrGPA + " , ");
	console.log("ARRAY CREDITS : " + arrCREDIT + " , ");
	console.log("SUM CREDITS : " + sumCREDIT);
	console.log("TOTAL GPA : " + totalGPA);
	console.log("GRADES : " + arrGRADE + "\n\n\n\n");
}

function addRow() {
	// Inserting Obtained Marks Input In Td
	var obtainedMarkInput = document.createElement("INPUT");
	obtainedMarkInput.setAttribute("type", "text");
	obtainedMarkInput.setAttribute("class", "form-control");
	obtainedMarkInput.setAttribute("id", "obtainedMarks");

	// Inserting Credit Per Subject
	var creditInput = document.createElement("input");
	creditInput.setAttribute("type", "text");
	creditInput.setAttribute("class", "form-control");
	creditInput.setAttribute("id", "creditBox");

	const table = document.getElementById("calTable");
	const row = table.insertRow(-1);

	const subject = row.insertCell(0);
	subject.innerText = "SUBJECT";

	const obtainedMarkcell = row.insertCell(1);
	obtainedMarkcell.appendChild(obtainedMarkInput);
	obtainedMarkcell.setAttribute("id", "om");

	const creditCell = row.insertCell(2);
	creditCell.appendChild(creditInput);
	creditCell.setAttribute("id", "cb");

	const gpaCell = row.insertCell(3);
	gpaCell.setAttribute("id", "gpaBox");

	const gradecell = row.insertCell(4);
	gradecell.setAttribute("id", "gradeBox");
}

const table = document.getElementById("calTable");
function delRow() {
	if (table.rows.length > 2) {
		table.deleteRow(-1);
	}
}
