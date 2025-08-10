document.addEventListener('DOMContentLoaded',function()
{
  var form=document.getElementById('contactForm');
  if(!form)return;
  
  form.addEventListener('submit',function(e){
    var email=document.getElementById('email').value.trim();
    var confirmEmail=document.getElementById('confirmEmail').value.trim();

    if(email!==confirmEmail){
      e.preventDefault();
      alert('Emails do not match. Please check and try again.');
    }
  });
});