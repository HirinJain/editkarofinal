
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyp56rBARJz5vuKm-3S6YgkEXYC3ChlaTbLa0S_xuuUoUH1ZkveO4Jc-K_tm5WHdk9Y1g/exec';
  const form = document.getElementById('contactForm');
  const responseEl = document.getElementById('formResponse');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value
    };

    fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(formData)
    })
    .then(() => {
      responseEl.textContent = "✅ Message sent!";
      form.reset();
    })
    .catch(error => {
      responseEl.textContent = "❌ Failed to send. Try again.";
      console.error('Error!', error.message);
    });
  });
