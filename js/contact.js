function nextStep(currentStep, nextStep) {
    document.getElementById(currentStep).classList.remove('active');
    document.getElementById(nextStep).classList.add('active');
  }

  function prevStep(currentStep, prevStep) {
    document.getElementById(currentStep).classList.remove('active');
    document.getElementById(prevStep).classList.add('active');
  }

