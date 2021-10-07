// Show the popup modal after clicking login button

document.getElementById('log').addEventListener('click', 
function() {
  document.querySelector('.login_popup').style.display = 'flex';
});


// Close the popup after clicking the close button

document.querySelector('.close').addEventListener('click',
function() {
  document.querySelector('.login_popup').style.display = 'none';
});

