// step-1: add the click event handler with login button 

document.getElementById('btn-login').addEventListener('click', function(){
    // step-2: get the email address in the email input field 
    // always remember to use .value to get the text from an input field  
    const userEmail = document.getElementById('user-email');
    const getEmail = userEmail.value;
    // step-3: get the passwor in password field 
    const userPassword = document.getElementById('user-password');
    const getPass = userPassword.value;
    // console.log(getEmail, getPass);

    // step-4: verify email and password and check if it is valid or not 
    // warning: danger to use 
    if(getEmail == 'ami@tumi.com' && getPass === 'welcome'){
        window.location.href= 'bank-home.html'
    }
    else{
        alert('invalid email or password');
    }

})