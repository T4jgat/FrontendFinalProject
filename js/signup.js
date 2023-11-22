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