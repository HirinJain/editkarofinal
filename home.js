
  const subscribeForm = document.getElementById("subscribeForm");
  const responseMsg = document.getElementById("subscribeResponse");

  subscribeForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = subscribeForm.email.value;

    fetch("https://script.google.com/macros/s/AKfycbzR9T3jxZUVSMZgIpsX8ABTafgvAbRKL29tOhepYJrqOBWEvMllV-cPIAFLgqjmoFXrFg/exec", {
      method: "POST",
      body: JSON.stringify({ email: email }),
    })
      .then(() => {
        responseMsg.textContent = "✅ Thanks for subscribing!";
        subscribeForm.reset();
      })
      .catch((err) => {
        responseMsg.textContent = "❌ Something went wrong.";
        console.error(err);
      });
  });

 