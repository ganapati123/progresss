let number = document.getElementById("number");
let counter = 0; //we have to start from zero

//we will use the setInterval concept to increase the value of this zero
setInterval(() => {
    if(counter == 65){
        clearInterval();
    }
    else{
        counter += 1;
        number.innerHTML = counter + "%";
    }
   

},30)
