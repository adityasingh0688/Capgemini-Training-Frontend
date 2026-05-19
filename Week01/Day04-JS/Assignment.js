
 
// ### Part 1: Number Pyramid Generator
// Create a number pyramid where:
// - User inputs a number (1-10)
// - Generate a pyramid pattern based on specific rules:
//   - **Odd rows**: Numbers increment from 1
//   - **Even rows**: Numbers decrement from the row number
//   - **Middle row** (if exists): All numbers should be the same as the row number
//   - **Multiples of 3**: Display with a star (*)
 
// **Example**: Input = 5
// ```
// 1
// 2 1
// *3 *3 *3
// 4 3 2 1
// 5 5 5 5 5
// ```
 
// ---
 
// ### Part 2: FizzBuzz Table Challenge
// Create a table (3 columns × n rows) where:
// - User inputs a range (10-100)
// - For each number from 1 to input:
//   - If divisible by **both 3 and 5**: Display "FizzBuzz" (background: purple)
//   - If divisible by **3 only**: Display "Fizz" (background: blue)
//   - If divisible by **5 only**: Display "Buzz" (background: green)
//   - If **prime number**: Display number with (background: gold)
//   - Otherwise: Display the number normally
// - Arrange output in a 3-column table format
 
// ---
 
// ### Part 3: Smart Sum Calculator
// Create a calculator that:
// - User enters a number N (5-50)
// - Calculate and display separately:
//   1. Sum of **even** numbers from 1 to N
//   2. Sum of **odd** numbers from 1 to N
//   3. Sum of numbers divisible by **3 or 5** but NOT both
//   4. Sum of **prime numbers** from 1 to N
// - Display results with color coding (Green for highest sum, Red for lowest)
 
// ---
 
// ### Part 4: Reverse Pyramid with Conditions
// Create a reverse pyramid where:
// - User inputs a number (5-15)
// - Generate descending pyramid with these rules:
//   - Each row starts from the row number
//   - Display only if: (row number × column position) is NOT a perfect square
//   - Replace perfect squares with "■"
 
// **Example**: Input = 5
// ```
// 5 5 5 5 5
// 4 * 4 *
// * 3 *
// *  *
// 5
// ```
 
// ---
 
// ## Technical Constraints
 
// ### JavaScript:
// - NO array methods (map, filter, forEach, reduce, etc.)
// -  NO built-in functions except Math.sqrt(), Math.floor()
// -  ONLY use: for, while, do-while loops
// -  ONLY use: if, else if, else, switch, ternary operators
// -  Must write your own prime number checker function
// -  Must write your own perfect square checker function
 
// ### HTML:
// - Use semantic HTML5 elements
// - Create separate sections for each part
// - Include input validation messages
// - Add "Clear All" and "Generate All" buttons
 

function generatePyramid(){
    let n = Number(document.getElementById("pyramidInput").value);
    let output = "";
    let mid = Math.floor(n/2)+1;
    for(let i=1; i<=n; i++){
        for(let j=1; j<=i; j++){
            let value;
            if(n%2!=0 && i==mid)value=i;
            else if(i%2!==0)value = j;
            else value = i-j+1;
            if(value%3==0)output += "*"+value+" ";
            else output +=value+" ";
        }
        output += "\n";
    }
    document.getElementById("pyramidResult").innerText = output;
}

function generateReverse(){
    let n = Number(document.getElementById("reverseInput").value);
    let output = "";
    for(let i=n; i>=1; i--){
        for(let j=1; j<=i; j++){
            let value = i * j;
            if(Math.sqrt(value) == Math.floor(Math.sqrt(value)))output += "*";
            else output+=i+" ";
        }
        output += "\n";
    }
    document.getElementById("reverseResult").innerText = output;
}

function isPrime(num){
    if(num<2)return false;
    for(let i=2; i<num; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

function generateSum(){
    let n = Number(document.getElementById("sumInput").value);
    let evenSum = 0,oddSum = 0,sum = 0,primeSum = 0;

    for(let i=1; i<=n; i++){
        if(i % 2 === 0)evenSum +=i;
        else oddSum += i;
        if((i%3==0 || i%5==0) && !(i%3==0 && i%5==0)){
            sum += i;
        }
        if(isPrime(i))primeSum += i;
    }

    let highest=evenSum;
    let lowest=evenSum;

    if(oddSum > highest) highest = oddSum;
    if(sum > highest) highest = sum;
    if(primeSum > highest) highest = primeSum;

    if(oddSum<lowest) lowest = oddSum;
    if(sum<lowest) lowest = sum;
    if(primeSum < lowest) lowest = primeSum;

    document.getElementById("sumResult").innerHTML =`Even Sum:${evenSum}<br> 
    Odd Sum:${oddSum} <br> 
    Prime Sum:${primeSum} <br> 
    Highest:${highest} <br> 
    Lowest:${lowest}`;
} 


function generateFizzBuzz(){
    let n = Number(document.getElementById("fizzInput").value);
    let output = "<table style='border: 1px solid black'>";

    let count = 0;
    for(let i=1; i<=n; i++){
        if(count%3===0){
            output += "<tr>";
        }

        let text = i;
        let color ="white";

        if(i%3===0 && i%5===0){
            text = "FizzBuzz";
            color = "purple";
        }

        else if(i%3===0){
            text = "Fizz";
            color = "skyblue";
        }

        else if(i%5===0){
            text = "Buzz";
            color = "lightgreen";
        }

        else if(isPrime(i)){
            color = "gold";
        }

        output +=
        `<td style="background:${color};
        padding:20px">
        ${text}
        </td>`;
        count++;
        if(count%3===0){
            output += "</tr>";
        }
    }

    output += "</table>";
    document.getElementById("fizzResult").innerHTML = output;
}