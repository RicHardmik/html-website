let count = 0;

const counter = document.getElementById("counter");
const clickBtn = document.getElementById("clickBtn");
const resetBtn = document.getElementById("resetBtn");

clickBtn.addEventListener("click", function() {
    count++;
    counter.textContent = count;
});

resetBtn.addEventListener("click", function() {
    count = 0;
    counter.textContent = count;
});
