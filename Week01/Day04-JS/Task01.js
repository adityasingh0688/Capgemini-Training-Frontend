function generateResult(){
    
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    let sub1 = Number(document.getElementById("sub1").value);
    let sub2 = Number(document.getElementById("sub2").value);
    let sub3 = Number(document.getElementById("sub3").value);

    let marks = [sub1, sub2, sub3];
    let total = 0;

    for(let i=0; i<marks.length; i++){
        total += marks[i];
    }

    let average = (total/marks.length).toFixed(2);
    let percentage =((total/(marks.length * 100))*100).toFixed(2);
    let grade;
    let status;

    if(percentage >= 90){
        grade = "A+";
        status = "Pass";
    }
    else if(percentage >=80){
        grade = "A";
        status = "Pass";
    }
    else if(percentage >=70){
        grade = "B";
        status = "Pass";
    }
    else if(percentage >= 40){
        grade = "C";
        status = "Pass";
    }
    else{
        grade = "Fail";
        status = "Fail";
    }

    let student = {
        studentName : name,
        rollNumber : roll,
        totalMarks : total,
        averageMarks : average,
        percentageMarks : percentage,
        studentGrade : grade
    };

    document.getElementById("result").innerHTML =
    `<h3>Student Result</h3>
    <p><b>Name:</b> ${student.studentName}</p>
    <p><b>Roll Number:</b> ${student.rollNumber}</p>
    <p><b>Total Marks:</b> ${student.totalMarks}</p>
    <p><b>Average:</b> ${student.averageMarks}</p>
    <p><b>Percentage:</b> ${student.percentageMarks}%</p>
    <p><b>Grade:</b> ${student.studentGrade}</p>
    <p><b>Status:</b> ${status}</p>`;
}