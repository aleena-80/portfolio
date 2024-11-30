let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            })
            document.querySelector(
                'header nav a[href*=' + id + ']')
                .classList.add('active');

        }
    })
}


// Form Validation

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}
function validateForm() {
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const number = document.getElementById('number').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('msg').value.trim();

    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
    if (name === '') {
        alert('Please enter your full name.');
        return false;
    }
  
    if (!namePattern.test(name)) {
        alert('Name should not contain numbers or special characters');
        return false;
    }
  
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address (e.g., user@gmail.com).');
        return false;
    }

 
    if (number === '' || !/^\d{10}$/.test(number)) {
        alert('Please enter a valid phone number (10 digits).');
        return false;
    }

  
    if (subject === '') {
        alert('Please enter a subject.');
        return false;
    }

    // Validate message
    if (message === '') {
        alert('Please enter your message.');
        return false;
    }

    // If all validations pass
    return true; // Allow form submission
}

$("#submit-form").submit((e) => {
    e.preventDefault();

    // Validate form before submission
    if (validateForm()) {
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbwVF45ruvkuHBJQdstj3ld8RIFXRMf9oJFzRhDyEDqhmkUpmrQXkGJcMd5IJGHwT14Vjg/exec",
            data: $("#submit-form").serialize(),
            method: "post",
            success: function (response) {
                alert("Form submitted successfully!");
                window.location.reload();
                // Optionally redirect: window.location.href="https://google.com";
            },
            error: function (err) {
                alert("Something went wrong. Please try again.");
            }
        });
    }
});