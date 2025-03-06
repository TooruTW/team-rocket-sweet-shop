// elements header
const navBurger = document.querySelector("#navBurger")
const headerList = document.querySelector("#headerList")

//elements mainpage
const currentOsusume = document.querySelector("#img-card-player")
let currentOsusumeIndex = 0

const osusumes = document.querySelectorAll(".blur-card")

// elements page-product-card-container
const pageProductCardContainer = document.querySelector(".page-product-card-container")

// library
const osusumeContainer = [
    {name: "poundCake", url: "https://bit.ly/2OhbMHr"},
    {name: "macaronsCoffee", url: "https://bit.ly/2R5tqwD"},
    {name: "creamPie", url: "https://bit.ly/2Dwoxd7"},
    {name: "popsicle", url: "https://bit.ly/2OUteif"}
]

const products = [
    {   id: 0,
        name: "水果西米露奶酪",
        price: 450,
        favorite: false,
        buy: 0,
        imgUrl: "https://bit.ly/2QiWeQW"
    },
    {   id: 1,
        name: "原味甜甜圈",
        price: 450,
        favorite: false,
        buy: 0,
        imgUrl: "https://bit.ly/2zBjQuq"
    },
    {   id: 2,
        name: "藍莓派",
        price: 450,
        favorite: false,
        buy: 0,
        imgUrl: "https://bit.ly/2zKOP7w"
    },
    {   id: 3,
        name: "焦糖蘋果千層",
        price: 450,
        favorite: false,
        buy: 0,
        imgUrl: "https://bit.ly/2NcDVuB"
    },
    {   id: 4,
        name: "覆盆子海綿蛋糕",
        price: 450,
        favorite: false,
        buy: 0,
        imgUrl: "https://bit.ly/2zBDAxX"
    },
    {   id: 5,
        name: "草莓冰淇淋",
        price: 450,
        favorite: false,
        buy: 0,
        imgUrl: "https://bit.ly/2zL5jN7"
    },
    { id: 6, name: "巧克力慕斯", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 7, name: "草莓拿鐵", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 8, name: "芒果布丁", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 9, name: "香草冰淇淋", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 10, name: "檸檬戚風蛋糕", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 11, name: "焦糖瑪奇朵", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 12, name: "蘋果派", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 13, name: "巧克力蛋糕", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 14, name: "柚子冰沙", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 15, name: "榛果拿鐵", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 16, name: "椰子蛋糕", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 17, name: "藍莓冰淇淋", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 18, name: "橙子千層", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 19, name: "薑餅人", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 20, name: "摩卡蛋糕", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 21, name: "紅豆冰沙", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 22, name: "桃子慕斯", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 23, name: "焦糖布丁", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 24, name: "提拉米蘇", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 25, name: "杏仁餅乾", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 26, name: "黑森林蛋糕", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 27, name: "抹茶千層", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 28, name: "椰漿布丁", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 29, name: "葡萄冰淇淋", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 30, name: "蜜桃蛋糕", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 31, name: "蘋果冰沙", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 32, name: "榴蓮慕斯", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 33, name: "焦糖拿鐵", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 34, name: "草莓千層", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 35, name: "鮮奶油蛋糕", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 36, name: "香橙冰淇淋", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 37, name: "藍莓蛋糕", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 38, name: "蘋果醋飲品", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 39, name: "草莓冰沙", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 40, name: "香蕉鬆餅", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 41, name: "香草慕斯", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 42, name: "焦糖海綿蛋糕", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 43, name: "荔枝冰沙", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 44, name: "水果派", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 45, name: "椰子冰沙", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 46, name: "抹茶冰淇淋", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" },
    { id: 47, name: "椰漿冰淇淋", price: 450, favorite: false, buy: 0, imgUrl: "https://bit.ly/2QiWeQW" }
    
]

let cartItems = [ 
{   id: 0,
    name: "水果西米露奶酪",
    price: 450,
    favorite: false,
    buy: 0,
    imgUrl: "https://bit.ly/2QiWeQW"
},
{   id: 1,
    name: "原味甜甜圈",
    price: 450,
    favorite: false,
    buy: 0,
    imgUrl: "https://bit.ly/2zBjQuq"
},
{   id: 2,
    name: "藍莓派",
    price: 450,
    favorite: false,
    buy: 0,
    imgUrl: "https://bit.ly/2zKOP7w"
}]

// elements mainpage product card
const mainPageProductCards = document.querySelectorAll(".favorite")

//  show menu
navBurger.addEventListener("click",()=>{
    console.log("clicked", headerList.classList)
    headerList.classList.toggle("md-burger-nav-ul-show")
})

// slide show
function slideChange(cardNum = currentOsusumeIndex){
    if(!currentOsusume) return
    currentOsusume.style.backgroundImage = `url(${osusumeContainer[cardNum].url})`
    currentOsusumeIndex = currentOsusumeIndex === (osusumeContainer.length - 1)? 0: currentOsusumeIndex + 1;
}
slideChange()

//  filter change & osusume change
osusumes.forEach((element,index) => {
   element.addEventListener("click", ()=>{
    osusumes.forEach(element=>{
        element.classList.remove("card-selected")
    })
    osusumes[index].classList.add("card-selected")
    slideChange(index + 1)
   }) 
});

// product page
const recommedThisDay = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const ninnki = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
const atarashi = [6, 11, 13, 14, 16, 18, 20, 22, 23, 26, 28, 30];

const menuOsusume = document.querySelector("#recommed-this-day")
menuOsusume? menuOsusume.innerText = `${recommedThisDay.length}`:null;

const menuAll = document.querySelector("#all-procudt")
menuAll? menuAll.innerText = `${products.length}`:null;

const menuNinnki = document.querySelector("#ninnki")
menuNinnki? menuNinnki.innerText = `${ninnki.length}`:null;

const menuAtarashi = document.querySelector("#atarashi")
menuAtarashi? menuAtarashi.innerText = `${atarashi.length}`:null;

// product page rendering
if(pageProductCardContainer){
for (let i = 0; i <= 5; i++) {
    const item = products[i]
    pageProductCardContainer.innerHTML += `
                <div class="card-product w-[49%] mb-[20px] max-md:w-full">
                    <div class="favorite absolute right-[22px] top-[22px]" >
                        <svg class="uncheck-heart" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#aa0601"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
                        <svg class="checked-heart hidden" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="red"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"/></svg>
                    </div>
                    <img class="h-[315px] w-full object-cover product-img" src=${item.imgUrl} alt="dount">
                    <h2 class="flex w-full items-center text-[20px] h-[56px]">
                        <span class="w-3/5 h-full border-l-[1px] border-[#EAF0ED] flex items-center justify-center product-name">${item.name}</span>
                        <span class="w-2/5 h-full border border-[#EAF0ED] flex items-center justify-center product-price">NT$ ${item.price}</span>
                    </h2>
                    <button id=${item.name} class="add-to-cart text-center h-[65px] text-[24px] font-semibold w-full bg-[#EAF0ED]">加入購物車</button>
                </div>
    `
}
}


// pooduct card
// favorites
const favorites = document.querySelectorAll(".favorite")

favorites.forEach(element => {
    
    element.addEventListener("click",()=>{
        element.children[0].classList.toggle("hidden")
        element.children[1].classList.toggle("hidden")
    })
})
// add to cart
const addToCart = document.querySelectorAll(".add-to-cart")

addToCart.forEach(item =>{

    item.addEventListener('click',(item)=>{
        let productName = item.target.id
        let procudtInfo = products.find(item => item.name === productName)
        console.log(procudtInfo)

        if(cartItems.includes(procudtInfo)){
            let indexOfitem = cartItems.findIndex( item => item === procudtInfo)
            cartItems[indexOfitem].buy ++
            
            console.log("already in da cart", indexOfitem, cartItems[indexOfitem].buy)
        }else{
            cartItems.push(procudtInfo)
            console.log("add to cart")
        }
        console.log(cartItems)
    })
})

// cart
// buying list
const listContainer = document.querySelector("#card-buy-container")
const listTemplate = document.querySelector("#list-template")

function updateBill(transportFee){
    let sum = 0
    cartItems.forEach(item => {
        sum += item.buy * item.price
    })
    document.querySelector("#sum").textContent = sum
    document.querySelector("#transport-fee").textContent = transportFee
    document.querySelector("#total").textContent = sum + transportFee
}

function updateCart(card){
        let existingItem = document.querySelector(`#${card.name}`);
        if (existingItem) {
            existingItem.remove();
        }

        const clone = listTemplate.content.cloneNode(true)
        clone.querySelector("#product-templete").style.order = card.id
        clone.querySelector("#product-templete").id =card.name
        clone.querySelector(".img-of-product").src = card.imgUrl
        clone.querySelector(".name-of-product").textContent = card.name
        clone.querySelector(".price-of-product").textContent = card.price
        clone.querySelector(".num").textContent = card.buy
        clone.querySelector(".unit-total").textContent = card.buy * card.price

        // eventlistener to in&decresase
        clone.querySelector(".decrese").addEventListener("click", ()=>{
            card.buy = card.buy > 0 ? card.buy -1 : 0;
            updateCart(card)
            updateBill(300)
            console.log(card.name,card.buy,"decrease")
        })
        clone.querySelector(".increase").addEventListener("click", ()=>{
            card.buy ++
            updateCart(card)
            updateBill(300)
            console.log(card.name,card.buy,"increase")
        })
        clone.querySelector(".delete-product").addEventListener("click", ()=>{
            document.querySelector(`#${card.name}`).remove()
            updateBill(300)
        })

        listContainer.appendChild(clone)
}

cartItems.forEach((item) => {
    updateCart(item)
})

updateBill(300)



// bill create
