const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('submit');
const logEmailError = document.getElementById("logEmailError");
const logPasswordError = document.getElementById("logPasswordError");
const logSuccess = document.getElementById("logSuccess");
const myForm = document.getElementById("myForm");

const data = {
    email: "",
    password: "",
}

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

email.addEventListener('input', (event)=>{
    const query = event.target.value.trim();
    if(emailRegex.test(query)){
        logEmailError.textContent = "";
        data.email = query;
    }else{
        logEmailError.textContent = "Make sure email is more than 3 characters and has @ and a .";
    }
});
password.addEventListener('input', (event)=>{
    const query = event.target.value;
    if(query.length > 8){
        logPasswordError.textContent = "";
        data.password = query;
    }else{
        logPasswordError.textContent = "Make sure password is more than 8 characters.";
    }
})

submit.addEventListener('click', ()=>{
    if(data.email && data.password){
        logSuccess.textContent = 'All good to go!';

        setTimeout(() => {
            alert('Are you sure you want to submit?');
            alert('Successful signup!');
        }, 100); // 100 milliseconds delay
    }
});

window.onload = ()=>{
    myForm.onsubmit = (event)=>{
        event.preventDefault();
    }
}

