// elements header
const navBurger = document.querySelector("#navBurger")
const headerList = document.querySelector("#headerList")


//elements mainpage
const currentOsusume = document.querySelector("#img-card-player")
let currentOsusumeIndex = 0

const osusumes = document.querySelectorAll(".blur-card")

// const recommedToday = document.querySelector("#recommed-today")
// console.log(recommedToday)
// let recommedArr = []
const favorites = document.querySelectorAll(".favorite")

// library
const osusumeContainer = [
    {name: "poundCake", url: "https://bit.ly/2OhbMHr"},
    {name: "macaronsCoffee", url: "https://bit.ly/2R5tqwD"},
    {name: "creamPie", url: "https://bit.ly/2Dwoxd7"},
    {name: "popsicle", url: "https://bit.ly/2OUteif"}
]

const products = [
    {   id: 0,
        name: "原味甜甜圈",
        price: 450,
        favorite: false,
        buy: 0,
        imgUrl: "https://bit.ly/2zBjQuq"
    },
    {   id: 1,
        name: "覆盆子海綿蛋糕",
        price: 450,
        favorite: false,
        buy: 0,
        imgUrl: "https://bit.ly/2zBDAxX"
    },
    {   id: 2,
        name: "藍莓奶酪",
        price: 450,
        favorite: false,
        buy: 0,
        imgUrl: "https://bit.ly/2QbVsVR"
    },
]

// elements mainpage product card
const mainPageProductCards = document.querySelectorAll(".favorite")

//  show menu
navBurger.addEventListener("click",()=>{
    console.log("clicked", headerList.classList)
    headerList.classList.toggle("md-burger-nav-ul-show")
})

// slide show
function slideChange(cardNum = currentOsusumeIndex){
    currentOsusume.style.backgroundImage = `url(${osusumeContainer[cardNum].url})`
    currentOsusumeIndex = currentOsusumeIndex === (osusumeContainer.length - 1)? 0: currentOsusumeIndex + 1;
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

// pooduct card

favorites.forEach(element => {
    element.addEventListener("click",()=>{
        console.log(element.children[0])
        element.children[0].classList.toggle("hidden")
        element.children[1].classList.toggle("hidden")

    })
})



// products.forEach(element => {
//     recommedArr.push(`
//         <div id="card-product-${element.id}" class="w-[300px] card-product">
//                     <div class="favorite absolute right-[22px] top-[22px]" >
//                         <svg class="uncheck-heart" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#aa0601"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
//                     </div>
//                     <img class="h-[315px] w-full object-cover product-img" src=${element.imgUrl} alt="dount">
//                     <h2 class="flex w-full items-center text-[20px] h-[56px]">
//                         <span class="w-[173px] h-full border-l-[1px] border-[#EAF0ED] flex items-center justify-center product-name">${element.name}</span>
//                         <span class="w-[127px] h-full border border-[#EAF0ED] flex items-center justify-center product-price">NT$ ${element.price}</span>
//                     </h2>
//                     <button class="text-center h-[65px] text-[24px] font-semibold w-full bg-[#EAF0ED]">加入購物車</button>
//                 </div>
//                 `)
// })
// recommedArr.forEach(item => {
//     recommedToday.innerHTML += item
// })
