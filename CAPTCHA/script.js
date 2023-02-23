
  function generateCaptcha() {
    // Generate two random numbers
    var num1 = Math.floor(Math.random() * 50);
    var num2 = Math.floor(Math.random() * 400);
  
    // Create the captcha question
    var question = "What is " + num1 + " + " + num2 + "?";
  
    // Save the answer
    var answer = num1 + num2;
  
    // Set the question as the inner HTML of the captcha div
    document.getElementById("captcha").innerHTML = question;
  
    // Store the answer in a data attribute of the captcha div
    document.getElementById("captcha").setAttribute("data-answer", answer);
  }
  
  function checkCaptcha() {
    // Get the user's answer
    var userAnswer = document.getElementById("answer").value;
  
    // Get the correct answer from the data attribute
    var correctAnswer = document.getElementById("captcha").getAttribute("data-answer");
  
    // Check if the user's answer is correct
    if (userAnswer == correctAnswer) {
      
         window.location.replace("./page.html");      
    } else {
        output.classList.add("incorrectCaptcha");
        output.innerHTML = "Incorrect, please try again";
        generateCaptcha();
    }
  
    // Refresh the captcha
    generateCaptcha();
  }
  
  // Generate the first captcha when the page loads
  generateCaptcha();
  