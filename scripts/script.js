const burger = document.querySelector(".burger")
const burger_menu = document.querySelector(".burger_menu")

burger.addEventListener("click", (event) => {
    burger.classList.toggle("active")
    burger_menu.classList.toggle("active")
})

