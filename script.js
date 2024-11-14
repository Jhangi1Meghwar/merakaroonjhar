const signUpBtnLink = document.querySelector(".signUpBtn-link")
const signinBtnLink = document.querySelector(".signInBtn-link")

const wrapper = document.querySelector(".wrapper")

signinBtnLink.addEventListener('click' , () => {
    wrapper.classList.toggle('active');
})

signUpBtnLink.addEventListener('click' , () => {
    wrapper.classList.toggle('active');
})
var useraccount = document.getElementById('useraccount'.value)
function SignUp(){
    console.log("User Account :-" ,useraccount.value)
}

