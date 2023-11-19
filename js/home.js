document.addEventListener("DOMContentLoaded", function () {
    var teamMemberImages = document.querySelectorAll('.team-member-avatar');

    teamMemberImages.forEach(function (image) {
        image.addEventListener('click', function () {
            openFullscreenModal(image.src);
        });
    });

    function openFullscreenModal(imageSrc) {
        var fullscreenModal = document.getElementById('fullscreen-modal');
        var fullscreenImage = document.getElementById('fullscreen-image');

        fullscreenImage.src = imageSrc;
        fullscreenModal.style.display = 'block';
    }

    window.closeFullscreenModal = function () {
        var fullscreenModal = document.getElementById('fullscreen-modal');
        fullscreenModal.style.display = 'none';
    };
});

let mybutton = document.getElementById("scroll");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}

function signinPage(){
  window.location.href = "signin.html"
}

function homePage(){
  window.location.href = "home.html"
}

function google(){
  window.location.href = "https://accounts.google.com/InteractiveLogin/identifier?continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dgoogle%2Bfonts%26rlz%3D1C5CHFA_enKZ1042KZ1042%26oq%3Dgoogle%26gs_lcrp%3DEgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBggCEEUYOzIGCAMQRRg7MgYIBBBFGEEyBggFEEUYPDIGCAYQRRg8MgYIBxBFGEHSAQc4MTlqMGo3qAIAsAIA%26sourceid%3Dchrome%26ie%3DUTF-8&ec=GAZAAQ&hl=ru&passive=true&ifkv=AVQVeyy4wEzZfb5UFIzFekmSJvtiJVl7E0qxnpCA5uGpw4jmldd4tccwbS3VGwxZAT68Xbf8CX18fA&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
}

function microsoft(){
  window.location.href = "https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=16&ct=1700432616&rver=7.3.6960.0&wp=MBI_SSL&wreply=https%3a%2f%2fwww.microsoft.com%2frpsauth%2fv1%2faccount%2fSignInCallback%3fstate%3deyJSdSI6Imh0dHBzOi8vd3d3Lm1pY3Jvc29mdC5jb20vcnUta3oiLCJMYyI6IjQwOTYiLCJIb3N0Ijoid3d3Lm1pY3Jvc29mdC5jb20ifQ&lc=1033&id=74335&aadredir=0"
}

var continuee = document.getElementById('continueBtn');
