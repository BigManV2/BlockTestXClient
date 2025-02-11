// Get elements
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');
const showPopupBtn = document.getElementById('show-popup-btn');

// Show the popup
function showPopup(message) {
    const popupMessage = document.getElementById('popup-message');
    popupMessage.textContent = message;  // Set the message in the popup
    popup.style.display = 'block';  // Show the popup
    alert("the popup thingy finished" + message)
}

// Close the popup
function closePopup() {
    popup.style.display = 'none';  // Hide the popup
}

// Event listeners
showPopupBtn.addEventListener('click', () => {
    showPopup('This is a dynamic message for the popup!\nYou can customize it.');
    alert("it should have shown up");
});

closeBtn.addEventListener('click', closePopup);

// Optional: Close popup if clicked outside
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        closePopup();
    }
});
