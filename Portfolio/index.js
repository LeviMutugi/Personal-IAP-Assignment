const myForm = document.querySelector("myForm");
myForm.addEventListener('submit',formSubmitted);
let message = document.getElementById("message");
function formSubmitted(event){
    console.log(myForm.message.innerHTML);
}
