document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".form-step");
  const stepLabels = document.querySelectorAll(".step");
  let currentStep = 0;

  const showStep = (index) => {
    steps.forEach((s, i) => {
      s.classList.toggle("active", i === index);
      stepLabels[i].classList.toggle("active", i === index);
    });
    currentStep = index;
  };

  document.querySelectorAll(".next-step").forEach(btn => {
    btn.addEventListener("click", () => {
      if (currentStep < steps.length - 1) showStep(currentStep + 1);
    });
  });

  document.querySelectorAll(".prev-step").forEach(btn => {
    btn.addEventListener("click", () => {
      if (currentStep > 0) showStep(currentStep - 1);
    });
  });

  // Auto-detect service from homepage links (?service=solar or fuel)
  const urlParams = new URLSearchParams(window.location.search);
  const servicePrefill = urlParams.get("service");
  if (servicePrefill) {
    const serviceSelect = document.getElementById("service");
    if (serviceSelect) {
      serviceSelect.value = servicePrefill.charAt(0).toUpperCase() + servicePrefill.slice(1);
    }
  }
});

