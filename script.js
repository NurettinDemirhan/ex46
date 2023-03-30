const formInput = document.querySelectorAll(".form-input");

//              FIRST SOLUTION
// for (let i =0; i < formInput.length; i++){
//     console.log(formInput[i].value);
// }

//              SECOND SOLUTION
formInput.forEach((eachInput) => {
    console.log(eachInput.value);
});