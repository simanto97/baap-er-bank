document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const emailInput = emailField.value;
    const passwordField = document.getElementById('user-pass');
    const passInput =passwordField.value;
    
    if(emailInput === 'test@gmail.com' && passInput === '1234'){
        window.location.href = 'inside-bank.html'
    }
    else{
        alert('Please input valid email address and password');
    }
})