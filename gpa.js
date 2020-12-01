const table = document.getElementById("calTable");
const GPA = document.getElementById("GPA");

function calculate() {
	const credits = document.querySelectorAll("#credits");
	// const grade = document.querySelectorAll("#grade");
	const gpa = document.querySelectorAll("#gpa");

	const arrCREDIT = [];
	const arrGPA = [];
	const arr_CREDIT_GPA = [];
	let sumOfCreditGpa = 0;

	let sumGPA = 0;
	let sumCREDIT = 0;
	let totalGPA = 0;

	// Sum of all subject CREDITS Hour and sum of all GPA
	for (let i = 0; i < credits.length; i++) {
		// console.log(credits);
		arrCREDIT.push(parseInt(credits[i].value));
		arrGPA.push(parseFloat(gpa[i].value));
		sumCREDIT += arrCREDIT[i];
		sumGPA += arrGPA[i];
	}

	// Multiplying credits hour to gpa
	for (let i = 0; i < credits.length; i++) {
		arr_CREDIT_GPA[i] = arrCREDIT[i] * arrGPA[i];
		sumOfCreditGpa += arr_CREDIT_GPA[i];
	}
	totalGPA = (sumOfCreditGpa / sumCREDIT).toFixed(2);
	// totalCGPA = ((totalGPA + previousGPA.value) / 2).toFixed(2);
	GPA.innerText = totalGPA;
	// console.log("Sum of all GPA : " + sumGPA);
	// console.log("Sum of all CREDITS : " + sumCREDIT);
	// console.log("Sum of all CREDITS and GPA : " + sumOfCreditGpa);
	// console.log("total GPA : " + totalGPA);
	// console.log("total CGPA : " + totalCGPA);
}

function addRow() {
	const table = document.getElementById("calTable");
	const row = table.insertRow(-1);

	const subject = row.insertCell(0);
	subject.innerText = "SUBJECT";
	subject.setAttribute("class", "p-1");

	const box = creditSelectBox();
	const creditCell = row.insertCell(1);
	creditCell.appendChild(box);

	const box2 = gpaSelectBox();
	const gpaCell = row.insertCell(2);
	gpaCell.appendChild(box2);

	// const box3 = gradeSelectBox();
	// const gradeCell = row.insertCell(3);
	// gradeCell.appendChild(box3);
}

function delRow() {
	if (table.rows.length > 2) {
		table.deleteRow(-1);
	}
}

function creditSelectBox() {
	let creditComboBox = document.createElement("select");
	creditComboBox.setAttribute("id", "credits");
	creditComboBox.setAttribute("class", "form-control");

	let option2 = document.createElement("option");
	option2.text = "2";
	option2.value = "2";

	let option3 = document.createElement("option");
	option3.text = "3";
	option3.value = "3";

	let option4 = document.createElement("option");
	option4.text = "4";
	option4.value = "4";

	creditComboBox.append(option2);
	creditComboBox.append(option3);
	creditComboBox.append(option4);

	return creditComboBox;
}

function gpaSelectBox() {
	let gpaComboBox = document.createElement("select");
	gpaComboBox.setAttribute("id", "gpa");
	gpaComboBox.setAttribute("class", "form-control");

	let option1 = document.createElement("option");
	option1.text = "0";
	option1.value = "0";

	let option2 = document.createElement("option");
	option2.text = "1.3";
	option2.value = "1.3";

	let option3 = document.createElement("option");
	option3.text = "1.7";
	option3.value = "1.7";

	let option4 = document.createElement("option");
	option4.text = "2";
	option4.value = "2";

	let option5 = document.createElement("option");
	option5.text = "2.3";
	option5.value = "2.3";

	let option6 = document.createElement("option");
	option6.text = "2.7";
	option6.value = "2.7";

	let option7 = document.createElement("option");
	option7.text = "3";
	option7.value = "3";

	let option8 = document.createElement("option");
	option8.text = "3.3";
	option8.value = "3.3";

	let option9 = document.createElement("option");
	option9.text = "3.7";
	option9.value = "3.7";

	let option10 = document.createElement("option");
	option10.text = "4";
	option10.value = "4";

	let arr = [
		option1,
		option2,
		option3,
		option4,
		option5,
		option6,
		option7,
		option8,
		option9,
		option10,
	];
	for (let i = 0; i < arr.length; i++) {
		gpaComboBox.append(arr[i]);
	}
	return gpaComboBox;
}

// function gradeSelectBox() {
// 	let gradeComboBox = document.createElement("select");
// 	gradeComboBox.setAttribute("id", "grade");
// 	gradeComboBox.setAttribute("class", "form-control");

// 	let option1 = document.createElement("option");
// 	option1.text = "A+";
// 	option1.value = "A+";

// 	let option2 = document.createElement("option");
// 	option2.text = "A-";
// 	option2.value = "A-";

// 	let option3 = document.createElement("option");
// 	option3.text = "B+";
// 	option3.value = "B+";

// 	let option4 = document.createElement("option");
// 	option4.text = "B";
// 	option4.value = "B";

// 	let option5 = document.createElement("option");
// 	option5.text = "B-";
// 	option5.value = "B-";

// 	let option6 = document.createElement("option");
// 	option6.text = "C+";
// 	option6.value = "C+";

// 	let option7 = document.createElement("option");
// 	option7.text = "C";
// 	option7.value = "C";

// 	let option8 = document.createElement("option");
// 	option8.text = "C-";
// 	option8.value = "C-";

// 	let option9 = document.createElement("option");
// 	option9.text = "D";
// 	option9.value = "D";

// 	let option10 = document.createElement("option");
// 	option10.text = "F";
// 	option10.value = "D";

// 	let arr = [
// 		option1,
// 		option2,
// 		option3,
// 		option4,
// 		option5,
// 		option6,
// 		option7,
// 		option8,
// 		option9,
// 		option10,
// 	];
// 	for (let i = 0; i < arr.length; i++) {
// 		gradeComboBox.append(arr[i]);
// 	}
// 	return gradeComboBox;
// }
