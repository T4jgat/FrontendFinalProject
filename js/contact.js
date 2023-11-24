function nextStep(currentStep, nextStep) {
    document.getElementById(currentStep).classList.remove('active');
    document.getElementById(nextStep).classList.add('active');
  }

  function prevStep(currentStep, prevStep) {
    document.getElementById(currentStep).classList.remove('active');
    document.getElementById(prevStep).classList.add('active');
  }


  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('submit'),
        loader = document.querySelector('.loader'),
        check = document.querySelector('.check');
    
    btn.addEventListener('click', function () {
      loader.classList.add('active');    
    });
   
    loader.addEventListener('animationend', function() {
    
    check.classList.add('active'); 
    });
  });