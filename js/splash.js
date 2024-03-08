// <!-- Add your JavaScript for the splash screen -->
// document.addEventListener("DOMContentLoaded", function() {
    // Hide splash screen after 2 seconds (adjust as needed)
//     setTimeout(function() {
//        document.querySelector('.splash-screen').style.display = 'none';
//     }, 2000);
//  });


// JavaScript to hide the splash screen after a delay
window.addEventListener('load', function() {
    setTimeout(function() {
       var splashScreen = document.querySelector('.splash-screen');
       splashScreen.classList.add('hidden');
    }, 1000); // Adjust the delay (in milliseconds) as needed
 });
 