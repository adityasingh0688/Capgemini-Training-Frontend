function stringTask1(string1){
    let len=string1.length;
    let upperCase=string1.toUpperCase();
    let lowerCase=string1.toLowerCase();
    let firstChar=string1.at(0);
    let lastChar=string1.at(len-1);
    let containsNumb=/\d/.test(string1);
    document.getElementById("task01").innerHTML=`
    Length of a String: ${len}<br>
    UpperCase: ${upperCase}<br>
    LowerCase: ${lowerCase}<br>
    FirstChar: ${firstChar}<br>
    LastChar: ${lastChar}<br>
    ContainNumber: ${containsNumb}
    `
};

document.getElementById("task01-btn")
.addEventListener("click", function(){
    let string1 =document.getElementById("name").value;
    stringTask1(string1);
});

//task 02
function stringTask2(string1){
    let revString=string1.split("").reverse().join("");
    let trimString=string1.trim();
    let removeAllSpace=string1.replaceAll(" ","");
    let vowelCount=0,consonantCount=0;

    for(let i=0; i<string1.length; i++){
        if(/[aeiouAEIOUU]/.test(string1[i])){
            vowelCount++;
        }
        else if(("bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ").includes(string1[i])){
            consonantCount++;
        }
    }
     document.getElementById("task02").innerHTML = `
        Reversed String: ${revString}<br>
        Trimmed String: ${trimString}<br>
        Remove All Spaces: ${removeAllSpace}<br>
        Vowel Count: ${vowelCount}<br>
        Consonant Count: ${consonantCount}<br>
    `;
}

    document.getElementById("task02-btn").addEventListener("click",function(){
    let string1 =document.getElementById("name").value;
    stringTask2(string1);
});
//task 03
function isPalindrome(string1){
    if(string1.length==0)return true;
    let lastIndx=string1.length-1;
    for(let i=0; i<string1.length/2; i++){
        if(string1[i]!=string1[lastIndx--])return false;
    }
    return true;
}
function isEmail(string1){
    if(string1.length<6)return false;
    if(string1.includes("@")&&string1.includes("."))return true;
    return false;

}
function isSpecial(string1){
    if(string1.length<2)return false;
    if(string1.includes("**"))return true;
    return false;
}
function isStrongPassword(string1){
    if(string1.length<8)return false;
    let hasNumber=/[0-9]/.test(string1);
    let hasCaps=/[A-Z]/.test(string1);
    let hasSmall=/[a-z]/.test(string1);

    return hasNumber && hasCaps && hasSmall;
}
function stringTask3(string1){
    let palindrome=(isPalindrome(string1));
    let email=isEmail(string1);
    let specialCharacter=isSpecial(string1);
    let strongPassword=isStrongPassword(string1);

    document.getElementById("task03").innerHTML=`
    Stirng is Plaindrone: ${palindrome}<br>
    String is in EmailFormat: ${email}<br>
    String Has Special character : ${specialCharacter}<br>
    String Has an Strong Password : ${strongPassword}
    `
}

document.getElementById("task03-btn").addEventListener("click",function(){
    let string1=document.getElementById("name").value;
    stringTask3(string1);
});

//task 04
// Case	Example
// Title Case	Hello World
// Camel Case	helloWorld
// Snake Case	hello_world
// Kebab Case	hello-world
// Alternating Case	HeLlO WoRlD
function stringTask4(string1){
    let words =string1.toLowerCase().split(" ");
    let titleCase = "";
    let camelCase = "";
    let snakeCase = "";
    let kebabCase = "";
    let AlternatingCase = "";

    for(let i = 0; i < words.length; i++){
        titleCase +=words[i].charAt(0).toUpperCase()
        +words[i].slice(1);
        titleCase += " ";
    }

    camelCase+=words[0];
    for(let i = 1; i < words.length; i++){
        camelCase +=words[i].charAt(0).toUpperCase()
        +words[i].slice(1);
    }

    for(let i = 0; i < words.length-1; i++){
        snakeCase +=words[i].slice(0)+"_";
    }
    snakeCase+=words[words.length-1];

    for(let i = 0; i < words.length-1; i++){
         kebabCase+=words[i].slice(0)+"-";
    }
    kebabCase+=words[words.length-1];

    let string2=string1.replaceAll(" ","");
    for(let i=0; i<string2.length; i++){
        if(i%2){AlternatingCase+=string2[i].toUpperCase();

        }else{
            AlternatingCase+=string2[i].toLowerCase();
        }
    }

    document.getElementById("task04").innerHTML = `
        Title Case: ${titleCase}<br>
        Camel Case: ${camelCase}<br>
        Snake Case: ${snakeCase}<br>
        Kebab Case: ${kebabCase}<br>
        Alternating Case: ${AlternatingCase}<br>
    `;
}
document.getElementById("task04-btn")
.addEventListener("click", function(){
    let string1 =document.getElementById("name").value;
    stringTask4(string1);
});


//task 05
// ### Task 5: String Search and Replace
// Create functions to:
// - Find the position of a substring
// - Replace first occurrence of a word
// - Replace all occurrences of a word
// - Extract domain from an email address
// - Extract initials from a full name (e.g., "John Doe" → "JD")
    
function stringTask5(string1,subString,newWord){
    let position =string1.indexOf(subString);

    let replaceFirst =string1.replace(subString,newWord);

    let replaceAll =string1.replaceAll(subString,newWord);

    let domain = "Not in a format";
    if(string1.includes("@")){
        domain =string1.slice(string1.indexOf("@")+1);
    }

    let words =string1.trim().split(" ");
    let initials = "";

    for(let i=0; i<words.length; i++){
        initials +=words[i].charAt(0).toUpperCase();
    }

    document.getElementById("task05").innerHTML = `
        Position: ${position}<br>
        Replace First: ${replaceFirst}<br>
        Replace All: ${replaceAll}<br>
        Domain: ${domain}<br>
        Initials: ${initials}
    `; 
}


document.getElementById("task05-btn").addEventListener("click", function(){
    let string1=document.getElementById("name").value;
    let subString=document.getElementById("substring").value;
    let newWord =document.getElementById("word").value;
    stringTask5(string1,subString,newWord);
});