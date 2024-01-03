const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});


function validateForm() {
    var name = document.getElementById("name").value;
    var lname = document.getElementById("lname").value;

    if (name === "" || lname === "" ) {
        document.getElementById("name").classList.add("error");
        document.getElementById("lname").classList.add("error");
    } else {}
}