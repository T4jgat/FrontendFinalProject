document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('video');
    var videoContainer = document.getElementById('video-container');

    function makeVideoFullScreen() {
        videoContainer.style.width = '100%';
        videoContainer.style.height = '100%';
    }

    makeVideoFullScreen();

    window.addEventListener('resize', function () {
        makeVideoFullScreen();
    });
    
});

function homePage(){
    window.location.href = "home.html";
}

function loginPage(){
    window.location.href = "signin.html";
}


function validateForm(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var repeatPassword = document.getElementById('cpassword').value;


    if (name === '' || email === '' || password === '' || repeatPassword === '') {
        alert('All fields must be filled out');
        return;
    }
    else if (password !== repeatPassword) {
        alert('Passwords do not match');
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email address');
      return;
    }
}