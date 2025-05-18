const button = document.querySelector('.button')

function submit() {
    const firstname = document.querySelector('.firstname').value.trim()
    const lastname = document.querySelector('.lastname').value.trim()
    const message = document.querySelector('.message').value.trim()
    const email = document.querySelector('.email').value.trim()
     if (firstname !== '' && lastname !== '' && email !== '' && message !== '') {
        alert("Form Submission Successful");
        return true; 
    } else {
        alert("Please fill in the respective fields.");
        return false; 
    }
}

button.addEventListener('click', submit)