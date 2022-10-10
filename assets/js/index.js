const optionMenus = document.querySelectorAll(".select-menu"),
  selectBtns = document.querySelectorAll(".select-btn"),
  options = document.querySelectorAll(".option");

selectBtns.forEach(selectBtn => {
  selectBtn.addEventListener("click", () =>
    selectBtn.parentElement.classList.toggle("active")
  );
})


options.forEach((option) => {
  option.addEventListener("click", () => {
    option.parentElement.parentElement.classList.remove("active");
  });
});



