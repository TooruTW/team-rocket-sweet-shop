// elements header
const navBurger = document.querySelector("#navBurger")
const headerList = document.querySelector("#headerList")


//elements mainpage
const currentOsusume = document.querySelector("#img-card-player")
let currentOsusumeIndex = 0

const osusumes = document.querySelectorAll(".blur-card")
const osusumeContainer = [
    {name: "poundCake", url: "https://bit.ly/2OhbMHr"},
    {name: "macaronsCoffee", url: "https://bit.ly/2R5tqwD"},
    {name: "creamPie", url: "https://bit.ly/2Dwoxd7"},
    {name: "popsicle", url: "https://bit.ly/2OUteif"}
]

//  show menu
navBurger.addEventListener("click",()=>{
    console.log("clicked", headerList.classList)
    headerList.classList.toggle("md-burger-nav-ul-show")
})

// slide show
function slideChange(cardNum = currentOsusumeIndex){
    currentOsusume.style.backgroundImage = `url(${osusumeContainer[cardNum].url})`
    console.log("prev",currentOsusumeIndex)
    currentOsusumeIndex = currentOsusumeIndex === (osusumeContainer.length - 1)? 0: currentOsusumeIndex + 1;
    console.log("after",currentOsusumeIndex)
}
slideChange()




//  filter change & osusume change
osusumes.forEach((element,index) => {
   element.addEventListener("click", ()=>{
    console.log(index,"got clicked")
    osusumes.forEach(element=>{
        element.classList.remove("card-selected")
    })
    osusumes[index].classList.add("card-selected")
    slideChange(index + 1)
   }) 
});