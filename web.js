document.addEventListener("DOMContentLoaded", () => {
let counter =0;
const button = document.getElementById("clickBtn");
const text = document.getElementById("countText");
const reset = document.getElementById("resetBtn");
button.addEventListener("click", function() {
    counter = counter +1;
    text.textContent = "Count: "+counter;


});
reset.addEventListener("click", function(){
    counter = 0;
    text.textContent = "Count: "+counter;

});

});