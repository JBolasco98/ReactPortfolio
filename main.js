  document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector(".menu-btn");
    const menuItems = document.querySelector(".menu-items");

    menuBtn.addEventListener("click", function() {
      menuItems.classList.toggle("show");

      if (menuItems.classList.contains("show")) {
        menuBtn.src = "images/image 17.png"; // Change to close icon
      } else {
        menuBtn.src = "images/image 16.png"; // Change back to menu icon
      }
    });
  });

