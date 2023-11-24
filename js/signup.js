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
    window.location.href = "index.html";
}

function loginPage(){
    window.location.href = "signin.html";
}


function validateForm(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var repeatPassword = document.getElementById('cpassword').value;
    var audio = document.getElementById('myAudio');


    if (name === '' || email === '' || password === '' || repeatPassword === '') {
        document.getElementById('result').innerHTML = "All fields must be filled out";
        document.getElementById('cat').style.display = "none";
        return;
    }
    else if (password !== repeatPassword) {
        document.getElementById('result').innerHTML = "Passwords do not match";
        document.getElementById('cat').style.display = "none";
        audio.remove();
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById('result').innerHTML = "Invalid email address";
      document.getElementById('cat').style.display = "none";
      return;
    }
    else{
        document.getElementById('result').innerHTML = "";
        document.getElementById('cat').style.display = "block";
        audio.play();
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("cpassword").value = "";
    }
}
