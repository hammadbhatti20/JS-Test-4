//Chapter No: 14-16

//Q1
// var studentNames = [];
// studentNames.push("hammad");
// studentNames.push("Sabtain");

//Q2
// var studentNames = {};
// studentNames["hammad"] = null;
// studentNames["sabtain"] = null;

//Q3
// var str = ["Pakistan","India","Australia","Afghanistan"];

//Q4
// var num = [10,20,40,50];

//Q5
// var bool = [true,false];

//Q6
// var arr = ["Pakistan","India","Australia","Afghanistan",10,20,40,50,true,false];

//Q7
// var eduQ = ["SSC","HSC","BCS","BS","BCOM","MS","M. Phil.","PhD"];
// document.write("<h1>Qualifications:</h1>","</br>","</br>","1) ",eduQ[0],"</br>","2) ",eduQ[1],"</br>","3) ",eduQ[2],"</br>","4) ",eduQ[3],"</br>","5) ",eduQ[4],"</br>","6) ",eduQ[5],"</br>","7) ",eduQ[6],"</br>","8) ",eduQ[7],"</br>");

//Q8
// var stuNam = ["Michael","John","Tony"];
// var stuMarks = [320,230,480];
// var totalMarks = 500;
// document.write(`Score of ${stuNam[0]} is ${stuMarks[0]}. Percentage: ${(stuMarks[0] / totalMarks) * 100}% </br> Score of ${stuNam[1]} is ${stuMarks[1]}. Percentage: ${(stuMarks[1] / totalMarks) * 100}% </br> Score of ${stuNam[2]} is ${stuMarks[2]}. Percentage: ${(stuMarks[2] / totalMarks) * 100}%`);

//Q9
// var color = ["Red","Blue","Green","Black","Yellow"];
// console.log("Initial array:", color);
// var usrClrAddBeg = prompt("Enter Your Want Color");
// color.unshift(usrClrAddBeg);
// console.log("Array after adding color to the beginning:", color);
// var usrClrAddEnd = prompt("Enter a color to add to the end of the array:");
// color.push(usrClrAddEnd);
// console.log("Array after adding color to the end:", color);
// color.unshift("Purple", "Orange");
// console.log("Array after adding two more colors to the beginning:", color);
// color.shift();
// console.log("Array after deleting the first color:", color);
// color.pop();
// console.log("Array after deleting the last color:", color);
// var indexToAddColor = prompt("Enter the index where you want to add a color:");
// var colorToAddAtIndex = prompt("Enter a color to add at the specified index:");
// colorArray.splice(indexToAddColor, 0, colorToAddAtIndex);
// console.log("Array after adding color at the specified index:", color);
// var indexToDeleteColor = prompt("Enter the index from which you want to start deleting colors:");
// var numberOfColorsToDelete = prompt("Enter the number of colors you want to delete:");
// colorArray.splice(indexToDeleteColor, numberOfColorsToDelete);
// console.log("Array after deleting colors from the specified index:", color);

//Q10
// var studentScores = [320,230,480,120];
// document.write("Scores of Students :", studentScores);
// studentScores.sort(function (a, b) {
//     return a - b;
//   });
//   document.write("</br>","Ordered Scores of Students :", studentScores);

//Q11
// var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write(`Cities list: </br> ${cities}`);
// var selectedCities = cities.slice(2,4);
// document.write(`</br> </br >Selected cities list: </br> ${selectedCities}`);

//Q12
// var arr = ["This ","is ","my ","cat"];
// document.write(`Array: </br> ${arr} </br> </br>`);
// var singleString = arr.join("");
// document.write(`String: </br> ${singleString}`);

//Q13
// var fifoArray = ["keyboard","mouse","printer","monitor"];
// document.write(`Devices: </br> ${fifoArray} </br> </br> Out: </br> ${fifoArray[0]} </br> Out: </br> ${fifoArray[1]} </br> Out: </br> ${fifoArray[2]} </br> Out: </br> ${fifoArray[3]}`);

//Q14
// var lifoArray = ["keyboard","mouse","printer","monitor"];
// document.write(`Devices: </br> ${lifoArray} </br> </br> Out: </br> ${lifoArray[3]} </br> Out: </br> ${lifoArray[2]} </br> Out: </br> ${lifoArray[1]} </br> Out: </br> ${lifoArray[0]}`);

//Q15
// var product = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
// document.write(`<select> <option> ${product[0]} </option> <option> ${product[1]} </option> <option> ${product[2]} </option> <option> ${product[3]} </option> <option> ${product[4]} </option> <option> ${product[5]} </option> </select>`);