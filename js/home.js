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

function errPage(){
  window.location.href = "404.html"
}


function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}


function modalPage() {
  document.getElementById('myModall').style.display = 'block';
}

function closeModall() {
  document.getElementById('myModall').style.display = 'none';
}

let signinForm = document.querySelector('.signin_container');
let email = document.getElementById('emailInput');
let pass = document.getElementById('passInput');

signinForm.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Email: ", email.value);
  console.log("Pass: ", pass.value);
})

function validation(){
  if(document.FormFill.Email.value == ""){
    document.getElementById('result').innerHTML = "Input Email";
  } 
  else if(document.FormFill.Password.value == ""){
    document.getElementById('result').innerHTML = "Input Password";
  }
  else if(document.FormFill.Email.value !== "park.pavel74@gmail.com"){
      document.getElementById('result').innerHTML = "Email is not correct";
      return false;
    }
  else if(document.FormFill.Password.value !== "123"){
      document.getElementById('result').innerHTML = "Password is not correct";
      return false;
    }
  else{
      const notification = document.querySelector('.notification');
      notification.classList.remove('none');
      notification.classList.toggle('hide');

      setTimeout(() => {
        notification.classList.add('hide');
    }, 5000);

    document.addEventListener("click", (event) => {
      const isClickInsideNotification = notification.contains(event.target);
      if (!isClickInsideNotification) {
          notification.classList.add('hide');
      }
  });
    }
}