const button = document.querySelector(".open-modal");
const popap = document.querySelector(".modal");
const close = document.querySelector(".modal-close");

button.addEventListener("click", function(evt) {
    popap.classList.add("modal-show");
})

close.addEventListener("click", function(evt){
    popap.classList.remove("modal-show");
})