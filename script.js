document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("theme-slider");
  const body = document.body;
  const label = document.getElementById("slider-label");
  const logo = document.querySelector(".logo");
  const clubButton = document.querySelector(".bnq-club"); // Select the B&Q Club button

  slider.addEventListener("change", function () {
      if (slider.checked) {
          body.classList.add("dark-mode");
          body.style.backgroundColor = "black";
          body.style.color = "rgb(255, 229, 0)";
          label.textContent = "TradePoint";
          label.style.color = "rgb(255, 229, 0)";
          logo.src = "images.png";

          // Ensure the button updates properly
          if (clubButton) {
              clubButton.textContent = "Trade Card";
          }
      } else {
          body.classList.remove("dark-mode");
          body.style.backgroundColor = "";
          body.style.color = "";
          label.textContent = "B&Q";
          label.style.color = "white";
          logo.src = "B&Q_company_logo.svg.png";

          // Ensure the button reverts
          if (clubButton) {
              clubButton.textContent = "B&Q Club";
          }
      }
  });
});
