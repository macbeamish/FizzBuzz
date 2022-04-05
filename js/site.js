// get values from interface - form
function getValues(){
    // get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    let incrementValue = document.getElementById("increment").value;
   
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
    incrementValue = parseInt(incrementValue);
    
    if(Number.isInteger(startValue) && Number.isInteger(endValue) && Number.isInteger(incrementValue)){
        // call generateNumbers
        let numbers = generateNumbers(startValue, endValue, incrementValue);

        // call displayNumbers
        displayNumbers(numbers)

    
    } else{
        alert("You Must Use Integers Only");
    }

    
}

// generate numbers from 
function generateNumbers(start, end, increment){
    let numbers =[];
    for(let i=start; i<=end; i+=increment){
        numbers.push(i);
    }  
    return numbers;
}



// display or view functions
function displayNumbers(numbers){
   
    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {
        let className = "even";
        let number = numbers[index];
        
        // display even numbers in bold
        if(number % 2 == 0){
            className = "even";
        }
        else{
            className = "odd";
        }
        templateRows +=`<tr><td class="${className}" >${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;

}