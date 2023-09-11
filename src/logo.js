
import "./toplogo.js";


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
  
    // Send the data to the server using AJAX or Fetch API
    fetch('submit_form.php', {
      method: 'POST',
      body: JSON.stringify({ name: name, email: email, phone: phone }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Form submitted successfully', data);
    })
    .catch(error => {
      console.error('Error submitting form', error);
    });
  });
    
  

export default logo;