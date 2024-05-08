document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
      event.preventDefault();
      
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      var errorMessage = document.getElementById("error-message");
  
      if (username === "admin" && password === "admin123") {
        // If credentials are correct, redirect to dashboard or perform any action
        window.location.href = "dashboard.html";
      } else {
        // If credentials are incorrect, display alert message
        alert("Invalid username or password");
      }
    });
  });
  