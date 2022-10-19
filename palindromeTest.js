// Write a function that takes a non empty string and checks to see if the 
// string is a palindrome or not.

// LOGIC
// 1. Take two variables start and end to point to the begining and end of String
// 2. Create a variable to hold result and set it to true
// 3. Loop and check is s[start] and s[end] are the same
// 4. if not true then break
// 5. If true then start++ and end--

function isPalindrome(s){

    let start =0;
    let end = s.length -1;
    let result = true;
    
    for(let i = start ; start <=end ; i++){
        
        if(s[start]!= s[end]){
            result = false;
            break;
        }
        start++; end--;
    }
    return result;
    }
    

