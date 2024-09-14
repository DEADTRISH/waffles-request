// Get the elements
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const thankyouDiv = document.getElementById('thankyou');

// When "Yes" button is clicked
yesBtn.addEventListener('click', () => {
    document.querySelector('.container').style.display = 'none'; // Hide the initial interface
    thankyouDiv.style.display = 'block'; // Show the "thank you" message
     // Change the background image to the "Thank You" image
     document.body.style.backgroundImage = "url('kid dance.gif')";
});

// Make the "No" button run away
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});
