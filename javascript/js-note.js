//====================== IntersectionObserver =================================//
// Select all the elements that you want to show when they are within the viewport
const elements = document.querySelectorAll(".hidden");

// Set up the IntersectionObserver with a threshold of 20%
const observer = new IntersectionObserver(
  function (entries) {
    // Loop through each entry
    entries.forEach(function (entry) {
      // Check if the element is at least 20% within the viewport
      if (entry.intersectionRatio >= 0.2) {
        // If it is, remove the hidden class and add the show class
        entry.target.classList.remove("hidden");
        entry.target.classList.add("show");
      } else {
        // If it isn't, remove the show class and add the hidden class
        entry.target.classList.remove("show");
        entry.target.classList.add("hidden");
      }
    });
  },
  {
    threshold: [0.2],
  }
);

// Start observing the elements
elements.forEach(function (element) {
  observer.observe(element);
});
