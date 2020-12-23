const toggle = document.querySelector('[type="checkbox"]');
const monthlyPrices = document.querySelectorAll(".container__price--monthly");
const annualPrices = document.querySelectorAll(".container__price--annually");

toggle.addEventListener("change", () => {
  if (!toggle.checked) {
    monthlyPrices.forEach((monthPrice) => {
      monthPrice.style.display = "none";
    });

    annualPrices.forEach((annualPrice) => {
      annualPrice.style.display = "block";
    });
  } else {
    monthlyPrices.forEach((monthPrice) => {
      monthPrice.style.display = "block";
    });

    annualPrices.forEach((annualPrice) => {
      annualPrice.style.display = "none";
    });
  }
});
