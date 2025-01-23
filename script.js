// JavaScript for toggling play/pause functionality
const playPauseBtn = document.getElementById("playPauseBtn");
const playPauseImage = document.getElementById("playPauseImage");
const visualiser = document.getElementById("visualiser");
const startListening = document.querySelector(".start-listening");

let isPlaying = false;
let animationInterval;

playPauseBtn.addEventListener("click", () => {
  if (!isPlaying) {
    // Play State
    isPlaying = true;

    // Change background color
    startListening.classList.add("active");

    // Change button to pause icon
    playPauseImage.src = "./Assets/pause-btn.png";

    // Start looping through visualizer images
    let imageIndex = 1;
    animationInterval = setInterval(() => {
      imageIndex = (imageIndex % 3) + 1; // Cycle through visualiser1.png, visualiser2.png, visualiser3.png
      visualiser.querySelector(
        "img"
      ).src = `./Assets/visualiser${imageIndex}.png`;
    }, 100); // Change images every 200ms for a smooth animation
  } else {
    // Pause State
    isPlaying = false;

    // Reset background color
    startListening.classList.remove("active");

    // Change button to play icon
    playPauseImage.src = "./Assets/play-btn.png";

    // Stop the visualizer animation
    clearInterval(animationInterval);

    // Reset visualizer to the initial image
    visualiser.querySelector("img").src = "./Assets/visualiser1.png";
  }
});

const slider = document.querySelector(".progress-slider");

function updateSliderBackground() {
  const value = slider.value; // Get the current value of the slider
  const max = slider.max; // Get the max value
  const percentage = (value / max) * 100; // Calculate the percentage

  // Update the slider's background with the gradient
  slider.style.background = `linear-gradient(to right,var(--primary-color) ${percentage}%, #e0e0e0 ${percentage}%)`;
}

// Initialize the slider background
updateSliderBackground();

// Update the slider background on input
slider.addEventListener("input", updateSliderBackground);

const slider2 = document.querySelector(".vol-meter");

function updateSlider2Background() {
  const value = slider2.value; // Get the current value of the slider
  const max = slider2.max; // Get the max value
  const percentage = (value / max) * 100; // Calculate the percentage

  // Update the slider's background with the gradient
  slider2.style.background = `linear-gradient(to right,black ${percentage}%,rgb(240, 233, 233) ${percentage}%)`;
}

// Initialize the slider background
updateSlider2Background();

// Update the slider background on input
slider2.addEventListener("input", updateSlider2Background);

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    header.classList.add("scrolled"); // Add the "scrolled" class when scrolling
  } else {
    header.classList.remove("scrolled"); // Remove the "scrolled" class when at the top
  }
});

function toggleMenu() {
  const dropdownMenu = document.getElementById("dropdownMenu");
  const hamburger = document.querySelector(".hamburger");

  // Toggle the dropdown menu visibility
  if (dropdownMenu.style.display === "flex") {
    dropdownMenu.style.display = "none";
    document.removeEventListener("click", outsideClickHandler);
  } else {
    dropdownMenu.style.display = "flex";
    setTimeout(() => {
      document.addEventListener("click", outsideClickHandler);
    }, 0); // Delay to ensure event listener doesn't immediately close the menu
  }
}

// Function to close the menu
function hideMenu() {
  const dropdownMenu = document.getElementById("dropdownMenu");
  if (dropdownMenu.style.display === "flex") {
    dropdownMenu.style.display = "none";
    document.removeEventListener("click", outsideClickHandler);
  }
}

// Function to handle clicks outside the dropdown menu
function outsideClickHandler(event) {
  const dropdownMenu = document.getElementById("dropdownMenu");
  const hamburger = document.querySelector(".hamburger");

  if (
    !dropdownMenu.contains(event.target) &&
    !hamburger.contains(event.target)
  ) {
    hideMenu();
  }
}
