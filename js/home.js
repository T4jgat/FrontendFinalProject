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