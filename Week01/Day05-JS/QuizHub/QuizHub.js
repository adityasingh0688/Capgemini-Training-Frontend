const quizData = [
    {
        question: "Which language runs in browser?",
        options: ["Java","Python","C++","JavaScript"],
        correct:3
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets"
        ],
        correct:1
    },
    {
        question: "Which tag is used for paragraph?",
        options: ["Division","Paragraph","Heading","Span"],
        correct:1
    },
    {
        question: "Which company developed Java?",
        options: ["Google","Sun Microsystems","Apple","Microsoft"],
        correct:1
    },
    {
        question: "Inside which tag do we write JavaScript?",
        options: ["Script","JS","JavaScript","Code"],
        correct:0
    },
    {
        question: "Which HTML tag is used for heading?",
        options: ["Head","H1","Paragraph","Title"],
        correct:1
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["Double Slash","HTML Comment","Hash","Double Star"],
        correct:0
    },
    {
        question: "Which property is used to change text color in CSS?",
        options: ["font-color","text-color","color","background"],
        correct:2
    },
    {
        question: "Which method is used to print in console?",
        options: ["print()","write()","console.log()","display()"],
        correct:2
    },
    {
        question: "Which keyword is used to declare variable in JavaScript?",
        options: ["int","String","var","define"],
        correct:2
    }
];

let currentQuestion = 0;
let timeLeft=60;
let timeInterval;
let selectedAnswer=new Array(quizData.length).fill(-1);

function displayQuestion(){
    if(currentQuestion==quizData.length-1){
        document.getElementById("submitBtn").style.display="inline-block";
    }
    let questionData =quizData[currentQuestion];

    document.getElementById("questionNumber")
    .innerText =

    `Question ${currentQuestion + 1}
    of ${quizData.length}`;

    document.getElementById("questionText")
    .innerText =
        questionData.question;

    document.getElementById("option0")
    .innerText =
        questionData.options[0];

    document.getElementById("option1")
    .innerText =
        questionData.options[1];

    document.getElementById("option2")
    .innerText =
        questionData.options[2];
    document.getElementById("option3")
    .innerText =
        questionData.options[3];


    for(let i = 0; i < 4; i++){
        document.getElementById(`option${i}`)
        .classList.remove("correct", "wrong", "selected");
    }

    // let savedAnswer = selectedAnswer[currentQuestion];
    // if(savedAnswer !== -1){
    //     document.getElementById(`option${savedAnswer}`)
    //     .classList.add("selected");
    // }

}

displayQuestion();
startTimer();

document.getElementById("nextBtn")
.addEventListener("click", function(){
    if(currentQuestion < quizData.length - 1){
        currentQuestion++;
        displayQuestion();
    }
});

document.getElementById("prevBtn")
.addEventListener("click", function(){
    if(currentQuestion > 0){
       currentQuestion--;
        displayQuestion();

    }
});

function selectAnswer(currentQuestion,indx){
    selectedAnswer[currentQuestion]=indx;
    let answeredQuestions = selectedAnswer.filter(answer => answer !== -1).length;
    let progress=((answeredQuestions/selectedAnswer.length)*100).toFixed(2);
    document.getElementById("progressText").innerText=`${progress}% Completed`;
    document.getElementById("progressBar").style.width = `${progress}%`;

    for(let i = 0; i < 4; i++){
        document.getElementById(`option${i}`)
        .classList.remove("correct", "wrong", "selected");
    }

    document.getElementById(`option${indx}`)
    .classList.add("selected");
    
    if(indx === quizData[currentQuestion].correct){
        document.getElementById(`option${indx}`)
        .classList.add("correct");

    }
    else{
        document.getElementById(`option${indx}`)
        .classList.add("wrong");

    }

}

function showResult(){
    let score = 0;
    for(let i = 0; i < quizData.length; i++){
        if(selectedAnswer[i] === quizData[i].correct){
            score++;
        }
    }
    let percentage =((score/quizData.length) * 100).toFixed(2);
    let message = "";
    if(percentage >= 60){
        message = "PASS";
    }
    else{
        message = "FAIL";
    }
    document.getElementById("scoreDisplay")
    .innerText =
    `Score: ${score}/${quizData.length}`;

    document.getElementById("percentageDisplay")
    .innerText =
    `Percentage: ${percentage}%`;

    document.getElementById("passFailMessage")
    .innerText = message;

    document.getElementById("resultContainer")
    .style.display = "block";

    // document.getElementsByClassName("quiz-container").style.display="none";
    document.getElementsByClassName("quiz-container")[0].style.display = "none";
    document.getElementsByClassName("progress-section")[0].style.display="none";

    reviewResult();
}

document.getElementById("option0").
addEventListener("click",function(){
    selectAnswer(currentQuestion,0);
})

document.getElementById("option1").
addEventListener("click",function(){
    selectAnswer(currentQuestion,1);
})

document.getElementById("option2").
addEventListener("click",function(){
    selectAnswer(currentQuestion,2);
})

document.getElementById("option3").
addEventListener("click",function(){
    selectAnswer(currentQuestion,3);
})

document.getElementById("submitBtn").
addEventListener("click",function(){
    clearInterval(timeInterval);
    showResult();
})

document.getElementById("restartBtn").addEventListener("click",function(){
    clearInterval(timeInterval);
     currentQuestion = 0;
     timeLeft=60;
     selectedAnswer=new Array(quizData.length).fill(-1);

     displayQuestion();

     document.getElementById("quizContainer").style.display = "block";
     document.getElementById("resultContainer").style.display = "none";
     document.getElementById("progressBar").style.width = "0%";
     document.getElementById("progressText").innerText = "0% Completed";
     document.getElementById("timer").innerText = timeLeft;
     document.getElementById("reviewContainer").innerHTML = "";
     document.getElementById("submitBtn").style.display = "none";
     review="";

    displayQuestion();
    startTimer();
})

function  startTimer(){
     timeInterval=setInterval(function(){
        timeLeft--;
        document.getElementById("timer").innerText=timeLeft;
        if(timeLeft<=0){
            timeLeft = 0;
            document.getElementById("timer")
            .innerText = timeLeft;
            clearInterval(timeInterval);
            showResult();
        }
    },1000)
}

function reviewResult(){
    let review="";
    for(let i=0; i<quizData.length; i++){
        let questionData=(quizData[i].question);

        let correctIndx=quizData[i].correct;
        let correctAnser=(quizData[i].options[correctIndx]);

        let choosedIndex=selectedAnswer[i];
        let choosedAnswer=(choosedIndex!=-1)?(quizData[i].options[choosedIndex]):"Not Answered";

        let result=(choosedIndex === correctIndx)?"Correct ✅":"Wrong ❌";

        review+=`
            <div class="review-box">
            <br>
            <p><strong>Q${i+1}. Question: </strong>${questionData}</p>
            <p><strong>Correct Answer: </strong>${correctAnser}</p>
            <p><strong>Your Answer: </strong>${choosedAnswer}</p>
            <p><strong>Result: </strong>${result}</p>
            </div>
        `
    }
    document.getElementById("reviewContainer").innerHTML=review;
}

