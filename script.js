function sendmail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject : document.getElementById("subject").value
        message: document.getElementById("message").value
    }

    emailjs.send("service_9w69vh2","template_s7bbvmm",parms).then(alert("Success! Thank you for contacting me. I will get back to you as soon as possible."))