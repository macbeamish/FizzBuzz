// get values from interface - form
function getValues(){
    // get values from the page
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
  
   
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
        // call generateNumbers
        let fbArray = fizzBuzzB(fizzValue, buzzValue);

        // call displayNumbers
        displayNumbers(fbArray)

    
    } else{
        alert("You Must Use Integers Only");
    }

    
}

// generate numbers from 
function fizzBuzz(fizz, buzz){
    let number = 1
    let retArray =[];
    for(let i=1; i<=100; i++){
        //check if divisible by fizzValue and buzzValue
        if(i % fizz == 0 && i % buzz == 0){
              number = "FIZZBUZZ"
        }
        //check if divisible by fizzValue and buzzValue
        else if(i % fizz == 0 ){
            number = "FIZZ"
        }
        //check if divisible by fizzValue and buzzValue
        else if(i % buzz == 0){
            number = "BUZZ"
        }
        //divisble by neither
        else{ 
            number=i;
        }
        
        retArray.push(number);
    }  
    return retArray;
}



// display or view functions
function displayNumbers(fbArray){

    //get the table body element from the html page
    let tableBody = document.getElementById("results");
    //get the template row
    let templateRow = document.getElementById("fbTemplate");
    for (let i = 0; i < fbArray.length; i+=5) {
        let tableRow = document.importNode(templateRow.content, true);
        //get td's and add to array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(fbArray[i]);
        rowCols[0].textContent = fbArray[i];
        
        rowCols[1].classList.add(fbArray[i+1]);
        rowCols[1].textContent = fbArray[i+1];

        rowCols[2].classList.add(fbArray[i+2]);
        rowCols[2].textContent = fbArray[i+2];

        rowCols[3].classList.add(fbArray[i+3]);
        rowCols[3].textContent = fbArray[i+3];

        rowCols[4].classList.add(fbArray[i+4]);
        rowCols[4].textContent = fbArray[i+4];

        tableBody.appendChild(tableRow);
    }

}
function fizzBuzzB(fizzV, buzzV){
    let retArray =[];
    for(let i = 1;i<=100;i++){
        let value =((i%fizzV==0 ? 'FIZZ' : '') + (i%buzzV==0 ? 'BUZZ' : '') || i);
        retArray.push(value);
    }
    return retArray;
}