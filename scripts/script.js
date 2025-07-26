const burger = document.querySelector(".burger")
const burger_menu = document.querySelector(".burger_menu")

burger.addEventListener("click", (event) => {
    burger.classList.toggle("active")
    burger_menu.classList.toggle("active")
})

//---------

const prise = document.querySelectorAll(".prise, .arrow")
const news = document.querySelector(".news")
const cross = document.querySelector(".cross")

cross.addEventListener("click", () => {
        news.classList.remove("active")
    })

for (let i = 0; i < prise.length; i++) {
    prise[i].addEventListener("click", () => {
        news.classList.add("active")
    })
}