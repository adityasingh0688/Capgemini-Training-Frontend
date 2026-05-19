// 1.⁠ ⁠*addAssessmentRow()*
//    - Add new row to assessment table
//    - Include all input fields
//    - Attach event listeners
//    - Validate maximum 15 assessments

document.getElementById("add-row").addEventListener("click",function(){
    let table=document.getElementById("assess-input-section");
    let row=table.insertRow();
    row.innerHTML=`
    <tr>
                <td> 
                    <select name="AssessType">
                            <option value="">Select Type</option>
                            <option>Quiz</option>
                            <option>Assignment</option>
                            <option>Mid-Term</option>
                            <option>Final</option>
                            <option>Project</option>
                            <option>Lab</option>
                    </select> 
                </td>
                <td>
                    <input type="text" placeholder="Enter Assesment Name: " name="ass_name">
                </td>
                <td>
                    <input type="number" placeholder="Enter Maximum Number: " name="maxi_marks">
                </td>
                <td>
                    <input type="number" placeholder="Marks Obtained: " name="marks_obt">
                </td>
                <td>
                    <input type="number" placeholder="Exam Weightage: " name="exam_weig">
                </td>
            </tr>`
});
 
//  2.⁠ ⁠*removeAssessmentRow(rowIndex)*
//    - Remove specific row from table
//    - Validate minimum 1 row must remain
//    - Recalculate totals if grades already calculated

document.getElementById("rem-row").addEventListener("click",function(){
    let table=document.getElementById("assess-input-section");
    let rows=table.rows;
    if (rows.length > 2) {
        rows[rows.length - 1].remove();
    }
});
 
//  3.⁠ ⁠*validateInputs()*
//    - Check all required fields are filled
//    - Ensure marks obtained not greater than maximum marks
//    - Verify weight percentages sum to 100%
//    - Ensure all numeric values are positive
//    - Return validation result and error messages

function assessmentInputs(){


     let table=document.getElementById("assess-input-section");
     let rows=table.rows;
     let cols=table.cols;

     for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){

        }
     }
}

 
//  4.⁠ ⁠*calculateWeightedAverage()*
//    - Loop through all assessments
//    - Calculate percentage for each assessment
//    - Multiply by weight and sum
//    - Return weighted average score
//    - Handle edge cases (division by zero)
 
//  5.⁠ ⁠*calculateLetterGrade(percentage)*
//    - Use conditional statements to determine letter grade:
//      - A+: 95-100
//      - A: 90-94
//      - B+: 85-89
//      - B: 80-84
//      - C+: 75-79
//      - C: 70-74
//      - D: 60-69
//      - F: Below 60
//    - Return letter grade
 
//  6.⁠ ⁠*calculateGPA(letterGrade)*
//    - Convert letter grade to GPA scale:
//      - A+: 4.0
//      - A: 3.7
//      - B+: 3.3
//      - B: 3.0
//      - C+: 2.7
//      - C: 2.3
//      - D: 2.0
//      - F: 0.0
//    - Return GPA value
 
//  7.⁠ ⁠*determinePassFail(percentage)*
//    - Check if percent
// - Return "PASS" or "FAIL"
//    - Consider special conditions (minimum 40% in final exam if applicable)
 
//  8.⁠ ⁠*analyzePerformance()*
//    - Loop through all assessments
//    - Find highest scoring assessment
//    - Find lowest scoring assessment
//    - Calculate average across assessments (unweighted)
//    - Count failed assessments
//    - Return analysis object
 
//  9.⁠ ⁠*generatePerformanceText(analysisData)*
//    - Create descriptive performance summary
//    - Use conditional statements to provide feedback:
//      - Excellent performance (90%+)
//      - Good performance (80-89%)
//      - Satisfactory performance (70-79%)
//      - Needs improvement (60-69%)
//      - Poor performance (below 60%)
//    - Include specific suggestions based on weak areas
//    - Return formatted text
 
// 10.⁠ ⁠*displayResults()*
//     - Show results section
//     - Populate all result fields
//     - Create assessment breakdown table
//     - Apply color coding based on grades
//     - Show/hide pass/fail indicator
 
// 11.⁠ ⁠*calculateAssessmentTypeStats()*
//     - Group assessments by type
//     - Calculate average for each type
//     - Loop through types and sum scores
//     - Return object with statistics per type
 
// 12.⁠ ⁠*saveToHistory()*
//     - Create grade report object with:
//       - Student name, ID, course
//       - Overall score, letter grade, GPA
//       - Date and time
//     - Add to history array
//     - Keep only last 5 entries using array manipulation
//     - Store in history table
 
// 13.⁠ ⁠*displayHistory()*
//     - Loop through history array
//     - Create table rows for each entry
//     - Format date/time properly
//     - Show in grade history section

// 14.⁠ ⁠*clearHistory()*
//     - Empty history array
//     - Clear history table display
//     - Show confirmation message
 
// 15.⁠ ⁠*resetCalculator()*
//     - Clear all input fields
//     - Remove extra assessment rows
//     - Hide results section
//     - Reset to initial state
//     - Ask for confirmation before resetting
 
// 16.⁠ ⁠*exportReport()*
//     - Generate text-based report with all details
//     - Format report nicely
//     - Create downloadable text or display in alert/modal
//     - Include student info, all assessments, results, analysis
 
// 17.⁠ ⁠*validateWeightPercentages()*
//     - Loop through all weight inputs
//     - Sum all percentages
//     - Check if total equals 100%
//     - Return true/false with error message
 
// 18.⁠ ⁠*checkNumericInput(value, min, max)*
//     - Validate numeric input is within range
//     - Return validation result
//     - Used by other functions for input validation


