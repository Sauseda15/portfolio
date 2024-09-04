  // Wait for the DOM to fully load
  document.addEventListener("DOMContentLoaded", function() {
    // Get all feature items
    const featureItems = document.querySelectorAll('.feature_item');

    // Variable to keep track of the currently flipped card
    let currentFlippedCard = null;

    // Function to handle card click
    featureItems.forEach(item => {
      item.addEventListener('click', function() {
        // If there is a currently flipped card, and it's not the one being clicked
        if (currentFlippedCard && currentFlippedCard !== item) {
          // Remove the flipped class from the currently flipped card
          currentFlippedCard.classList.remove('flipped');
        }

        // Flip the clicked card
        item.classList.toggle('flipped');

        // Update the reference to the currently flipped card
        // If the clicked card was flipped, set it as the currentFlippedCard; otherwise, reset
        currentFlippedCard = item.classList.contains('flipped') ? item : null;
      });
    });
  });