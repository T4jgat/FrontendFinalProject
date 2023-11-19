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

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}