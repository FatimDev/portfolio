function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;
  
    if (name === "" || email === "" || message === "") {
      alert("Tous les champs doivent être remplis.");
      return false;
    }
    alert("Message envoyé avec succès !");
    return true;
  }
  