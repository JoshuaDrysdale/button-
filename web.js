let count =0;
const button = document.getElementById("clickBtn");
const text = document.getElementById("countText");
const reset = document.getElementById("resetBtn");
button.addEventListener("click", function() {
    count = count +1;
    text.textContent = "Count: "+count;


});
reset.addEventListener("click", function(){
    count = 0;
    text.textContent = "Count: "+count;

});