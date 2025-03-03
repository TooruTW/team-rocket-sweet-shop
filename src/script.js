const navBurger = document.querySelector("#navBurger")
const headerList = document.querySelector("#headerList")
console.log(navBurger)

navBurger.addEventListener("click",()=>{
    console.log("clicked", headerList.classList)
    headerList.classList.toggle("md-burger-nav-ul-show")
})