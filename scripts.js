// small helper to manage the quote wizard stepper
document.addEventListener('DOMContentLoaded',function(){
  // quote wizard only on quote.html
  const stepper = document.querySelectorAll('.stepper-step');
  const steps = Array.from(document.querySelectorAll('fieldset.step'));
  if(steps.length){
    let current = 0;
    function showStep(n){
      steps.forEach((s, i)=> s.classList.toggle('active', i===n));
      stepper.forEach((s, i)=> s.classList.toggle('active', i===n));
      // toggle form field groups
      const service = document.querySelector('input[name="service"]:checked');
      if(service){
        document.getElementById('solarFields').style.display = service.value==='Solar' ? 'block':'none';
        document.getElementById('fuelFields').style.display = service.value==='Fuel' ? 'block':'none';
      }
    }
    // next/back controls
    const next1 = document.getElementById('next1');
    const next2 = document.getElementById('next2');
    const prev2 = document.getElementById('prev2');
    const prev3 = document.getElementById('prev3');
    next1 && next1.addEventListener('click', ()=> {
      const sel = document.querySelector('input[name="service"]:checked');
      if(!sel){ alert('Please choose a service'); return; }
      current = 1; showStep(current);
    });
    next2 && next2.addEventListener('click', ()=> { current = 2; showStep(current); });
    prev2 && prev2.addEventListener('click', ()=> { current = 0; showStep(current); });
    prev3 && prev3.addEventListener('click', ()=> { current = 1; showStep(current); });

    // ensure radio toggle updates fields
    document.querySelectorAll('input[name="service"]').forEach(r => r.addEventListener('change', ()=> {
      const sel = document.querySelector('input[name="service"]:checked');
      document.getElementById('solarFields').style.display = sel.value==='Solar' ? 'block':'none';
      document.getElementById('fuelFields').style.display = sel.value==='Fuel' ? 'block':'none';
    }));
    showStep(0);
  }

  // graceful handling for Netlify / form submission
  // For static sites: Netlify Forms will capture and redirect to thank-you page (we used action="thank-you.html")
  // Optionally, you can trigger GA event on submit.
  const quoteForm = document.getElementById('quoteForm');
  if(quoteForm){
    quoteForm.addEventListener('submit', function(e){
      // if you want to fire a gtag conversion before submit, use this:
      // gtag('event','conversion',{'send_to':'AW-CONVERSION-ID/label'});
      // allow Netlify to handle submission and redirect
    });
  }
});
