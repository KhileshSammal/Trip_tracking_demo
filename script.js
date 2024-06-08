// Function to handle chat message submission
function sendMessage() {
  const message = document.getElementById('message').value;

  // **Replace with actual server-side communication:**
  // - Send the message to your server-side code using a library like Socket.IO or websockets.
  // - The server would then broadcast the message to all connected clients.

  // Simulate receiving a message from another user (replace with actual server communication)
  const receivedMessage = {
    user: 'Friend 1',
    message: 'Hey everyone, just arrived at the rest stop!'
  };
  displayMessage(receivedMessage);

  // Clear the message input field
  document.getElementById('message').value = '';
}

// Function to display chat messages
function displayMessage(message) {
  const chatMessages = document.getElementById('chat-messages');
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerHTML = `<b>${message.user}</b>: ${message.message}`;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to the latest message
}

// Function to handle location sharing (replace with a user consent prompt and secure method)
function shareLocation() {
  // Prompt the user for location permission (security best practice)
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // **Don't directly embed user coordinates:**
      // - This raises privacy concerns. Instead, consider:
      //   - Using a temporary, secure link generation on the server.
      //   - The server would generate a unique link based on the user's location
      //     and share it with other users. Clicking the link would open Google Maps
      //     with the user's location.

      // Placeholder for a secure location sharing method (replace with server-side implementation)
      const locationLink = `https://maps.google.com/?q=${latitude},${longitude}`;

      // Simulate sending the location link to other users (replace with actual server communication)
      const locationMessage = {
        user: 'Me',
        message: `Here's my current location: <a href="${locationLink}">View on Google Maps</a>`
      };
      displayMessage(locationMessage);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

// Event listeners for form submission and location sharing button
document.getElementById('chat-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission behavior
  sendMessage();
});
document.getElementById('share-location').addEventListener('click', shareLocation);

// **Important:** Add server-side implementation for real-time communication
// This includes setting up a socket.io server, handling message broadcasts, and user authentication.
// Consider using a secure backend framework like Node.js with Express and Socket.IO.
