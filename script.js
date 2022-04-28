// 1. Collect the element from HTML
document.querySelector(".btn-click").addEventListener("click", function () {
  // first we tell the DOM what element to listen to
  // we add the eventlistener and say what even it should
  // once the click (the event) is fired off the function will run
  document.querySelector(".message").textContent = "You clicked the button";
});
