// popup.js
// Define the announcement content (default message)
const defaultAnnouncementContent = 'Default Message\\nline1\\nline2';

// Function to display the popup
function showPopup(message) {
    document.getElementById("popupMessage").innerHTML = formatMessage(message);
    document.getElementById("popup").style.display = "block";
}

// Format the message by replacing '\\n' with <br> for new lines
function formatMessage(message) {
    return message.replace(/\\n/g, '<br>');
}

// Function to initialize the popup with a custom message (or default)
function initializePopup(message = defaultAnnouncementContent) {
    if (message.trim()) {
        showPopup(message);  // Show the popup if there's content
    }
}

// Close popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Make the initialize function available globally
window.initializePopup = initializePopup;
window.closePopup = closePopup;
