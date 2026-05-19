const students = [
    {
        id: 101,
        name: "Alice Johnson",
        age: 20,
        subjects: ["Math", "Physics", "Chemistry"],
        scores: [85, 90, 78]
    },
    {
        id: 102,
        name: "Bob Smith",
        age: 21,
        subjects: ["Math", "Physics", "Chemistry"],
        scores: [92, 88, 95]
    },
    {
        id: 103,
        name: "Charlie Brown",
        age: 19,
        subjects: ["Math", "Physics", "Biology"],
        scores: [78, 82, 85]
    },
    {
        id: 104,
        name: "Diana Prince",
        age: 20,
        subjects: ["Math", "Chemistry", "Biology"],
        scores: [95, 92, 89]
    },
    {
        id: 105,
        name: "Eve Davis",
        age: 22,
        subjects: ["Physics", "Chemistry", "Biology"],
        scores: [88, 85, 90]
    }
];

function calculateAverage(scores){
    let total =scores.reduce((acc,curr)=>acc+curr);
    return (total/scores.length).toFixed(2);
}

function getGrade(avg){
    avg = Number(avg);
    if(avg >= 90)return "A";
    else if(avg >= 80)return "B";
    else if(avg >= 70)return "C";
    else if(avg >= 60)return "D";
    else return "F";

}

function getGradeClass(grade){
    return `grade-${grade.toLowerCase()}`;
}

let studentTableBody =document.getElementById("studentTableBody");
function renderStudents(data){
    studentTableBody.innerHTML = "";

    let rankedStudents =[...data].sort((a,b)=>{
        return calculateAverage(b.scores)-calculateAverage(a.scores)}
    );

    rankedStudents.forEach((student,index)=>{
        let avg =calculateAverage(student.scores);
        let grade =getGrade(avg);
        let row = `<tr>
            <td>${index+1}</td>
            <td>${student.name}</td>
            <td>${student.id}</td>
            <td>${student.age}</td>
            <td>${student.subjects.join(", ")}</td>
            <td>${avg}</td>
            <td>
                <span class="${getGradeClass(grade)}">${grade}</span>
            </td>
            <td>
                <button class="delete-btn" onclick="deleteStudent(${student.id})">Delete</button>
            </td>
        </tr>`;
         studentTableBody.innerHTML +=row;
    });

}

// DashBoard
let totalStudents =document.getElementById("totalStudents");
let classAverage =document.getElementById("classAverage");
let topGrade =document.getElementById("topGrade");
let totalSubjects =document.getElementById("totalSubjects");

function updateDashboard(){

    totalStudents.textContent =students.length;

    let allScores =students.flatMap(student=>
        student.scores
    );

    let avg =(allScores.reduce((acc,curr)=>
            acc + curr) / allScores.length
    ).toFixed(2);

    classAverage.textContent = avg;

    let grades =students.map(student=>
        getGrade(calculateAverage(student.scores)));

    let gradePriority =["A","B","C","D","F"];

    let bestGrade =gradePriority.find(grade=>
        grades.includes(grade)
    );

    topGrade.textContent =bestGrade;

    let uniqueSubjects =new Set( students.flatMap(student=>
            student.subjects
        )
    );
    totalSubjects.textContent =uniqueSubjects.size;
}

//deleteStudent
function deleteStudent(id){

    let index =students.findIndex(student=>
        student.id === id
    );

    if(index !== -1){
        students.splice(index,1);
        renderStudents(students);
        updateDashboard();
        renderSubjectAnalysis();
    }
}

//Add New Student
let addStudentBtn =document.getElementById("addStudentBtn");

addStudentBtn.addEventListener("click",()=>{

    let name =document.getElementById("studentName").value;
    let id =Number(document.getElementById("studentId").value);
    let age =Number(document.getElementById("studentAge").value);
    let subjectElements =document.querySelectorAll(".subject");

    let scoreElements=document.querySelectorAll(".score");
    let subjects = [];
    let scores = [];

    subjectElements.forEach((subject,index)=>{
        let sub = subject.value;
        let score =Number(scoreElements[index].value);
        if(sub && score){
            subjects.push(sub);
            scores.push(score);
        }
    });

    //validation
    if(!name ||!id || !age ||subjects.length === 0){
        alert("Fill all fields");
        return;
    }

    let idExists =students.some(student=>
        student.id === id
    );

    if(idExists)alert("ID already exists");

    if(age < 18 || age > 30)alert("Age must be between 18-30");
    
    let invalidScore =scores.some(score=>
        score<0 || score>100
    );

    if(invalidScore) alert("Scores must be between 0-100");

    //create student
    let newStudent = {
        id,
        name,
        age,
        subjects,
        scores
    };

    students.push(newStudent);
    renderStudents(students);
    updateDashboard();
    renderSubjectAnalysis();

});

//search
let searchInput =document.getElementById("searchInput");
let gradeFilter =document.getElementById("gradeFilter");
let subjectFilter =document.getElementById("subjectFilter");

searchInput.addEventListener("input",filterStudents);
gradeFilter.addEventListener("change",filterStudents);
subjectFilter.addEventListener("change",filterStudents);

function filterStudents(){
    let searchValue =searchInput.value.toLowerCase();
    let selectedGrade =gradeFilter.value;

    let selectedSubject =subjectFilter.value;

    let filteredStudents =students.filter(student=>{

        let matchesSearch =student.name.toLowerCase().includes(searchValue);

        let avg =calculateAverage(student.scores);

        let grade =getGrade(avg);

        let matchesGrade =selectedGrade === "All" || grade === selectedGrade;

        let matchesSubject =selectedSubject === "All" || student.subjects.includes(selectedSubject);

        return (matchesSearch && matchesGrade && matchesSubject);
    });

    renderStudents(filteredStudents);

}

//individual subject data
let subjectAnalysis =document.getElementById("subjectAnalysis");
function renderSubjectAnalysis(){

    subjectAnalysis.innerHTML = "";
    let subjectMap = new Map();
    students.forEach(student=>{
        student.subjects.forEach((subject,index)=>{
            if(!subjectMap.has(subject)){
                subjectMap.set(subject,[]);
            }
            subjectMap.get(subject).push({
                name: student.name,
                score: student.scores[index]
            });
        });
    });

    for(let [subject,data] of subjectMap){

            let avg =(data.reduce((acc,curr)=>(
                    acc + curr.score),0)/data.length).toFixed(2);

        let top3 =[...data].sort((a,b)=>(b.score - a.score)).slice(0,3);

        let aboveAverage =data.filter(student=>(
            student.score>avg)).length;

        let card =document.createElement("div");
        card.classList.add("analysis-card");
        card.innerHTML = `<h3>${subject}</h3>
            <p>
                <b>Average: </b>
                ${avg}
            </p>

            <p>
                <b>Above Average:</b>
                ${aboveAverage}
            </p>

            <p>
                <b>Top Performers:</b>
         
               ${top3.map(student=>`
                <li>
                    ${student.name}
                    (${student.score})
                </li>
                `).join("")}
            </p>
        `;
        subjectAnalysis.appendChild(card);
    }

}

renderStudents(students);
updateDashboard();
renderSubjectAnalysis();