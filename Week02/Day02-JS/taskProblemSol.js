
const students = [
    { id: 101, name: "Alice Johnson",
      age: 20, 
      subjects: ["Math", "Physics", "Chemistry"], 
      scores: [85, 90, 78] },

    { id: 102, name: "Bob Smith",
      age: 21, 
      subjects: ["Math", "Physics", "Chemistry"], 
      scores: [92, 88, 95] },

    { id: 103, name: "Charlie Brown", 
      age: 19, 
      subjects: ["Math", "Physics", "Biology"], 
      scores: [78, 82, 85] },

    { id: 104, name: "Diana Prince", 
      age: 20, 
      subjects: ["Math", "Chemistry", "Biology"], 
      scores: [95, 92, 89] },

    { id: 105, name: "Eve Davis",
      age: 22, 
      subjects: ["Physics", "Chemistry", "Biology"], 
      scores: [88, 85, 90] }
];

// - Filter students who scored above 85 in ALL subjects
let scoreAbove85=students.filter(student=>{
    return student.scores.every(score=>{
        return score>85;
    });
});
console.log(scoreAbove85);

// - Sort students by their average score (descending order)
let avgScoreList=students.sort((a,b)=>{
    let avgA=a.scores.reduce((acc,curr)=>acc+curr)/a.scores.length;
    let avgB=b.scores.reduce((acc,curr)=>acc+curr)/b.scores.length;
    return avgB-avgA;
})
console.log(avgScoreList);

// - Find students aged between 19-21
let student19to21=students.filter(student =>{
    return student.age >= 19 && student.age <= 21
});
console.log(student19to21);

// - Get list of students who study "Physics"
let physicsStudents =students.filter(student =>{
    return student.subjects.includes("Physics")
});
console.log(physicsStudents);

//task1.2
// - Create new array with only student names and their average scores
let avgScoresList=students.map(student=>{
    let avg=student.scores.reduce((acc,curr)=>(acc+curr))/student.scores.length;
    return {
            name: student.name,
            average: avg}
    }
);
console.log(avgScoresList);

// - Use map() to add "grade" property based on average:
//   * A: 90-100
//   * B: 80-89
//   * C: 70-79
//   * D: 60-69
//   * F: below 60
let addGrade = students.map(student=>{
    let avg=student.scores.reduce((acc,curr)=>acc+curr)/student.scores.length;
    let grade = "";
    if(avg >= 90 && avg <= 100){
        grade = "A";
    }
    else if(avg >= 80 && avg <= 89){
        grade = "B";
    }
    else if(avg >= 70 && avg <= 79){
        grade = "C";
    }
    else if(avg >= 60 && avg <= 69){
        grade = "D";
    }
    else{
        grade = "F";
    }
    return {
        ...student,
        grades: grade
    };

});
console.log(addGrade);


// - Flatten all subjects into a single array (including duplicates)
let allScore=students.flatMap(student=>{
   return student.scores;
})

//task 1.3
// - Calculate the overall class average across all subjects
let totalScore=allScore.reduce((acc,curr)=>{
    return acc+curr;
})
let avgScore=totalScore/allScore.length;
console.log(avgScore);

// - Find the highest score in each subject
let highestScoreinEachSub={};
students.forEach(student=>{
    return student.subjects.forEach((subject,index)=>{
        if(student.scores[index]>highestScoreinEachSub[subject] || !highestScoreinEachSub[subject]){
            highestScoreinEachSub[subject]=student.scores[index];
        }
    });
});
console.log(highestScoreinEachSub);

// - Count total number of students enrolled in each subject
let subjectCount={};
students.forEach(student=>{
    student.subjects.forEach((subject)=>{
        subjectCount[subject]=(subjectCount[subject]||0)+1;
    });
});
console.log(subjectCount);

// - Use reduce() to find the student with highest overall average
let highestAvgStudent={};
let allAvgs=new Map();

students.forEach(student=>{
    let total=student.scores.reduce((acc,curr)=>{
        return acc+curr;
    })
    total=total/student.scores.length;
    allAvgs.set(student.name,total);
});
let x=-1;
let name;
for(let [key,value] of allAvgs){
    if(value>x){
        x=value;
        name=key;
    }
}
highestAvgStudent[name]=x;

//task 1.4

//- Check if any student scored below 70 using some()
let below70Score=students.some(student=>{
    return student.scores.some(score=>{return score<70});
});
console.log(below70Score);

//- Check if all students passed (scored >= 60) using every()
let allPased=students.every(student=>{
    return student.scores.every(score=>{
        return score>=60;
    })
})
console.log(allPased);

//- Get index of a specific student by name using findIndex()
let studentSpec=students.findIndex(student=>{
    return student.name==="Bob Smith";
})
console.log(studentSpec);

// - Find a student by ID using find()
let student=students.find(student=>{
    return student.id==103;
})
console.log(student);

//Task-02
// Create a Map where keys are subject names and values are arrays of all 
// scores in that subject.
// Example: Map { "Math" => [85, 92, 78, 95], "Physics" => [...], ... }

let map=new Map();
students.forEach(student=>{
    return student.subjects.forEach((subject,indx)=>{
        if(!map.has(subject)){
            map.set(subject,[]);
        }
        map.get(subject).push(student.scores[indx]);
    })
})
console.log(map);

// Task 2.3: Grade Distribution Map (5 points)
// --------------------------------------------
// Create a Map showing count of students in each grade (A, B, C, D, F).
// Example: Map { "A" => 2, "B" => 3, "C" => 1, ... }

 map=new Map();
students.forEach(student=>{
     return map.set(
        student.grades,
        (map.get(student.grades) || 0) + 1
    );
})
console.log(map);

// Task 2.4: Subject Statistics Map (5 points)
// --------------------------------------------
// Create a Map for each subject containing:
// - Average score
// - Highest score
// - Lowest score
// - Number of students enrolled
// Example: Map { "Math" => { avg: 87.5, high: 95, low: 78, count: 4 }, ... }

let gradeMap=new Map();
students.forEach(student=>{
    return student.subjects.forEach((subject,indx)=>{
        if(!gradeMap.has(subject)){
            gradeMap.set(subject,[]);
        }
        gradeMap.get(subject).push(student.scores[indx]);
    });
});

let newMap=new Map();
for(let [key,value] of map){
    let total=value.reduce((acc,curr)=>{
        return acc+curr;
    });
    let avg=total/value.length;

    let high=Math.max(...value);
    let low=Math.min(...value);
    let count=value.length;
    newMap.set(key,{
        LowestMarks: low,
        HighestMarks: high,
        TotalCount: count,
        AverageScore: avg
    });
}
console.log(newMap);

//task 03
// Task 3.1: Unique Values (5 points)
// -----------------------------------
// - Create a Set of all unique subjects offered
// - Create a Set of all unique ages
// - Create a Set of all unique scores (across all students and subjects)

let sub=new Set();
students.forEach(student=>{
     student.subjects.forEach(subject=>{
         sub.add(subject);
    });
});
console.log(sub);

let ages=new Set();
students.forEach(student=>{
    ages.add(student.age);
});

let scores=new Set();
students.forEach(student=>{
     student.scores.forEach(score=>{
         scores.add(score);
    });
});

// Task 3.2: Set Operations - Union, Intersection, Difference (10 points)
// -----------------------------------------------------------------------
// Given students' subject enrollments, implement:
// - UNION: Find all subjects taken by either Student A OR Student B
// - INTERSECTION: Find common subjects between Student A AND Student B
// - DIFFERENCE: Find subjects taken by Student A but NOT by Student B
// - SYMMETRIC DIFFERENCE: Subjects taken by either A or B but not both


let studentA=students[0];
let studentB=students[1];

let setA=new Set(studentA.subjects);
let setB=new Set(studentB.subjects);

function getUnion(setA,setB){
    return new Set([...setA,...setB]);
}

let unionSubjects=getUnion(setA,setB);
console.log(unionSubjects);


function getIntersection(setA,setB){
    return new Set(
        [...setA].filter(value=>{
            setB.has(value);
        })
    )
}
let intersectionSubjects= getIntersection(setA,setB);
console.log(intersectionSubjects);

function getDifference(setA,setB) {
    return new Set(
        [...setA].filter(value=>{
            !setB.has(value);
        })
    )
}
let differenceSubjects= getDifference(setA,setB);
console.log(differenceSubjects);

function getSymmDiff(setA,setB){
    return new Set(
        [...setA].filter(value=>{
            return !setB.has(value);
        })
        .concat(
            [...setB].filter(value=>{
               return  !setA.has(value);
            })
        )
    )
}

let getSymmDiffe=getSymmDiff(setA,setB);
console.log(getSymmDiffe);

// Task 3.3: Data Validation with Sets (5 points)
// -----------------------------------------------
// - Create a Set of valid subject names
// - Validate if a student's subjects are all valid
// - Remove duplicate subjects if any student is enrolled in same subject twice
// - Find students with unique subject combinations
 
let validSub=new Set(["Math","English","Physics","Chemistry","Biology"]);

students.forEach(student=>{
    let isValid=student.subjects.every(subject=>{
        return(validSub.has(subject));
    });
    console.log(student.name,isValid);
});

students.forEach(student=>{
    student.subjects=[...new Set(student.subjects)];
});

let uniqueCombos=new Set();
let uniqueStudents=[];
students.forEach(student=>{
    let combo=[...student.subjects].sort().join(",");
    if(!uniqueCombos.has(combo)){
        uniqueCombos.add(combo);
        uniqueStudents.push(student);
    }
});
console.log(uniqueStudents);

//Part 4 
// Task 4.1: Leaderboard Generation (5 points)
// --------------------------------------------
// Create a leaderboard using Arrays, Maps, and Sets:
// - Rank students by average score
// - Handle ties (students with same average get same rank)
// - Display: Rank, Name, Average Score, Grade
// - Use Map to store ranks and Set to track unique average scores

let result=[];
students.forEach(student=>{
    let total=student.scores.reduce((acc,curr)=>{
        return acc+curr;
    });
    let avgScore=total/student.scores.length;
    result.push({
        name: student.name,
        id: student.id,
        score: avgScore.toFixed(2)
    });
})
console.log(result);

result.sort((a,b)=>b.score-a.score);

let uniqueAvg=new Set(
   result.map(student=>
       student.score
    )
)

let rankMap=new Map();
let rank=1;

[...uniqueAvg].sort((a,b)=>b-a).forEach((score)=>{
    rankMap.set(score,rank++);
});

function getGrade(score){
    if(score>90 && score<=100)return "A+";
    else if (score<=90 && score>80)return "A";
    else if (score>70 && score<=80)return "B";
    else if (score>60 && score<=70)return "C";
    else return "F";
}

let scoreCard=[];
result.forEach(student=>{
    scoreCard.push({
        id: student.id,
        name: student.name,
        score: student.score,
        grade: getGrade(student.score),
        rank: rankMap.get(student.score)
    })
})

console.log(scoreCard);

// Task 4.2: Subject Performance Analysis (5 points)
// --------------------------------------------------
// For each subject, generate a report containing:
// - Top 3 performers (use Array methods)
// - Average score (use reduce)
// - Number of students above average (use filter)
// - Store results in a Map with subject as key

let subMap=new Map();
students.forEach(student=>{
    student.subjects.forEach((subject,index)=>{
        if(!subMap.has(subject)){
            subMap.set(subject,[]);
        }
        subMap.get(subject).push({
            id: student.id,
            name: student.name,
            score: student.scores[index]
        });
    });
});

let reportMap=new Map();
for(let [subject,data]of subMap){
    let total=data.reduce((acc,curr)=>{return acc+curr.score});

let avg=total/data.length;

let aboveAvg=data.filter(student=>{
   return student.score>avg;
})

let top3=[...data].sort((a,b)=>b.score-a.score).slice(0,3);

reportMap.set(subject,{
    averageScore:avg.toFixed(2),
    studentsAboveAverage: aboveAvg.length,
    top3:top3
})
}
console.log(reportMap);

// Task 4.3: Student Grouping (5 points)
// --------------------------------------
// Group students using Maps:
// - Group by grade (A, B, C, etc.)
// - Group by age
// - Group by number of subjects enrolled
// - Each group should contain array of student objects
// Group By Grade
let groupByGrade = new Map();
scoreCard.forEach(student => {
    if(!groupByGrade.has(student.grade)){
        groupByGrade.set(student.grade, []);
    }
    groupByGrade.get(student.grade).push(student);
});


let groupByAge = new Map();

students.forEach(student => {
    if(!groupByAge.has(student.age)){
        groupByAge.set(student.age, []);
    }
    groupByAge.get(student.age).push(student);
});

// Group By Number of Subjects
let groupBySubjects = new Map();
students.forEach(student => {
    let subjectCount = student.subjects.length;
    if(!groupBySubjects.has(subjectCount)){
        groupBySubjects.set(subjectCount, []);
    }
    groupBySubjects.get(subjectCount).push(student);
});

// Task 4.4: Data Deduplication and Merging (5 points)
// ----------------------------------------------------
// - Given two arrays of student records, merge them removing duplicates
//   (based on student ID)
// - Use Set to track seen IDs
// - Return merged array with unique students
// - If duplicate found, keep the record with higher average score

let students1 = [
    { id: 101, name: "Alice", average: 85 },
    { id: 102, name: "Bob", average: 90 }
];
let students2 = [
    { id: 102, name: "Bob Smith", average: 95 },
    { id: 103, name: "Charlie", average: 80 }
];
// Merge arrays
let merged = [...students1, ...students2];
let seenIds = new Set();
let uniqueStudents = [];

merged.forEach(student => {
    if(!seenIds.has(student.id)){
        seenIds.add(student.id);
        uniqueStudents.push(student);
    }
    else{
        let existingStudent = uniqueStudents.find(s =>
            s.id === student.id
        );
        if(student.average > existingStudent.average){
            let index = uniqueStudents.findIndex(s =>
                s.id === student.id
            );
            uniqueStudents[index] = student;
        }
    }
});
console.log(uniqueStudents);