// Step 1: Add click event handler for the login button
document.getElementById('btn-login').addEventListener('click', function(){
    // Step 2: Get the email address from the email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // Step 3: Get the password from the password input field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // Step 4: Verify email and password
    // Replace 'yourname@example.com' and '20121' with actual valid credentials
    if(email === 'yourname@example.com' && password === '20121'){
        // If credentials are valid, redirect to the dashboard page
        window.location.href = 'dashboard.html';
    }
    else{
        // If credentials are invalid, show an alert
        alert('Invalid email or password. Please try again.');
    }
});































// // step_1: add click event handler with the login button
// document.getElementById('btn-login').addEventListener('click', function(){
//     // step_2: get the email address inside the email input field
//     // always remember to use .value to get text from an input field
//     const emailField = document.getElementById('user-email');
//     const email = emailField.value;
//     // step_3: get password
//     // step_3(a): set id on the html element
//     // step_3(b): get element
//     // step_3(c): get the value from the element
//     const passwordField = document.getElementById('user-password');
//     const password = passwordField.value;
//     // step_4: verify email and password
//     if(email === 'yourname@example.com' && password === '20121'){
//         window.location.href = 'dashboard.html';
//     }
//     else{
//         alert('Wrong password error is unhelpful')
//     }
// })