const button = document.querySelector('.button')

function submit() {
    const name = document.querySelector('.name').value.trim()
const email = document.querySelector('.email').value.trim()
     if (name !== '' && email !== '') {
        alert("Form Submission Successful");
        return true; 
    } else {
        alert("Please fill in both name and email.");
        return false; 
    }
}

button.addEventListener('click', submit)