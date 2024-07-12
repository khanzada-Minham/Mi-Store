let RangeValues = document.querySelectorAll('.range-values'),
    PlusSVG = document.querySelectorAll('.plus'),
    plus = document.querySelectorAll('.Ava-plus'),
    Minus = document.querySelectorAll('.Ava-minus'),
    plusicon = document.getElementById('plusicon'),
    minusicon = document.getElementById('minusicon');


PlusSVG.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (Minus[index].style.display === 'block') {
            Minus[index].style.display = 'none';
            RangeValues[index].style.display = "none"
            plus[index].style.display = 'block';




        } else {
            Minus[index].style.display = 'block';
            plus[index].style.display = 'none';
            RangeValues[index].style.display = "block"
            
        }
    });
});


////////

const rangeInputs = document.querySelectorAll('.range-input input');
const vertical = document.querySelector('.vertical .vertical-line');
const priceInputs = document.querySelectorAll('.prices-input input');

let PriceGap = 5000;

priceInputs.forEach((input) => {
    input.addEventListener('input', () => {
        let minVal = parseInt(priceInputs[0].value);
        let maxVal = parseInt(priceInputs[1].value);
        
        if (((maxVal - minVal) >= PriceGap) && maxVal <= 200000) {
            if (input.className === "input-min") {
                rangeInputs[0].value = minVal;
                vertical.style.left = (minVal / rangeInputs[0].max) * 100 + '%';
            } else {
                rangeInputs[1].value = maxVal;
                vertical.style.right = 100 - (maxVal / rangeInputs[1].max) * 100 + '%';
            }
            // console.log(minVal,max);

        }
    });
});

rangeInputs.forEach((input) => {
    input.addEventListener('input', () => {
        let minVal = parseInt(rangeInputs[0].value);
        let maxVal = parseInt(rangeInputs[1].value);

        if ((maxVal - minVal) < PriceGap) {
            if (input.className === "range-min") {
                rangeInputs[0].value = maxVal - PriceGap;
            } else {
                rangeInputs[1].value = minVal + PriceGap;
            }
        } else {
            priceInputs[0].value = minVal;
            priceInputs[1].value = maxVal;
            vertical.style.left = (minVal / rangeInputs[0].max) * 100 + '%';
            vertical.style.right = 100 - (maxVal / rangeInputs[1].max) * 100 + '%';
        }
        // let cart = JSON.parse(localStorage.getItem('MiPakistan')) || [],
          let CardCol9 = document.querySelector('.main-data-cart'),
            ListData = '';

        cart.forEach((item) => {
            //item.f
            if (item.price > minVal && item.price < maxVal) {
                let FelterDataPuch =
                    `
                        <div class="card-picture-top" style="width: 18rem">
                            <img src="${item.img}" class="card-img-top " alt="...">
                            <div class="card-body">
                            <button class="btn btn-dark filter-btn" type="button" onclick="AddToCart()">Add To Cart</button>
                                <p class="card-text">${item.productName} ....</p>
                                <span class="card-prices">Rs.${item.price}</span>
                            </div>
                        </div>
                   
                `
                ListData += FelterDataPuch;
            }
            CardCol9.innerHTML = ListData;
        })
    });
});

function cartInLocal(){
    let CartInLocal = JSON.parse(localStorage.getItem('MiPakistan')) || [],
    CardCol9 = document.querySelector('.main-data-cart'),
    ListData = '';
    
    CartInLocal.forEach((item) => {
        
        let FelterDataPuch =
    `
    <div class="card-picture-top style-card-top " style="width: 18rem ">
    <a href="/Charger.html?ProductID=${item.proID}"><img src="${item.img}" class="card-img-top " alt="..."></a>

    <div class="card-body">
    <p class="card-text">${item.productName} ....</p>
    <span class="card-prices">Rs.${item.price}</span>
    <button class="btn btn-dark filter-btn" type="button" onclick="AddToCart(${item.proID})">Add To Cart</button>
    </div>
    </div>
           
        `
        ListData += FelterDataPuch;
     })
    CardCol9.innerHTML = ListData;
}




const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const MainDataCart = document.querySelector('.main-data-cart');
// const cardPictureTop = document.querySelectorAll('.style-card-top');
// const cardImgTop = document.querySelectorAll('.card-img-top');
// const cardBody = document.querySelectorAll('.card-body');


box1.addEventListener('click', () => {
    const cardPictureTop = document.querySelectorAll('.style-card-top');
    const cardBody = document.querySelectorAll('.card-body');
    console.log('cardPictureTop',cardPictureTop);
    box1.style.background = 'black';
    box2.style.background = 'none';
    MainDataCart.style.flexDirection = 'row';
    cardPictureTop.forEach((items)=>{
        items.style.width = '18rem';
        items.style.display = 'block';
    }) 
    cardBody.forEach((items)=>{
        items.style.marginTop = '0px';
    })
   
})




box2.addEventListener('click', () => {
    const cardPictureTop = document.querySelectorAll('.style-card-top');
    const cardImgTop = document.querySelectorAll('.card-img-top');
    const cardBody = document.querySelectorAll('.card-body');
    box2.style.background = 'black';
    box1.style.background = 'none';
    cardImgTop.forEach((item)=>{
        item.style.width = '250px'
        item.style.display = 'flex';
    })
    MainDataCart.style.flexDirection = 'column';
    MainDataCart.style.width = '100%';
    cardPictureTop.forEach((items)=>{
        items.style.width = '100%';
        items.style.display = 'flex';
        console.log(items);
    })
    cardBody.forEach((items)=>{
        items.style.marginTop = '100px';
    })
})



let Picture = document.querySelectorAll('.card-picture-top');

Picture.forEach((item) => {
    let filterBtn = item.querySelector('.filter-btn');
    
    item.addEventListener('mouseover', () => {
        if (filterBtn) {
            filterBtn.style.display = 'block';
        }
    });

    item.addEventListener('mouseout', () => {
        if (filterBtn) {
            filterBtn.style.display = 'none';
        }
    });
});


let Categorie = document.querySelector('.display-Categories');
let ShowingImg = document.querySelector('.showing-img-to-search-page');
let svgs = document.querySelector('.svgs');
let dataimg = document.querySelector('.data-img');
let productnamestyle = document.querySelector('.product-name-style')
let categName = '';

function DisplayCategorie (){
    svgs.style.display = 'none';
    ShowingImg.style.display = 'none';
    dataimg.style.display = 'block';
    saveValue()
    
}
function DisplayImg (){
    svgs.style.display = 'block';
    ShowingImg.style.display = 'block';
    dataimg.style.display = 'none';
    
}

let cart1 = JSON.parse(localStorage.getItem('MiPakistan')) || [];
function saveValue() {
    let searchValue = document.getElementById("Search-product").value.toUpperCase();
    let searchingProduct = cart1.filter(x => x.productName.toUpperCase().includes(searchValue));
    // console.log('searchingProduct',searchingProduct);
    searchingProduct.forEach((item)=>{
        let productNamesCategorie = 
        `
        <div class="container">
        <div class="row">
            <a href="/Charger.html?ProductID=${item.proID}" class="product-name-style">${item.productName}</a>
            <hr>
        </div>
        </div>
        `        
        categName += productNamesCategorie ;
        });
        dataimg.innerHTML = categName;

};


function DisplayAudio(){
    let ischecked = event.target.checked;
    console.log(ischecked);
    if (ischecked === true){
        let cb4 = document.getElementById('cb4');
        cb4.checked = false;
        
        let ProductType = JSON.parse(localStorage.getItem('MiPakistan')) || [],
        results =  ProductType.filter(x => x.cateory === 'Audio'),
        innerAudio = '';
        CardAudioEnter = document.querySelector('.main-data-cart'),
        results.forEach((itemsValue)=>{
            let audio = 
            `
             <div class="card-picture-top" style="width: 18rem ">
                <a href="Charger.html?ProductID=${itemsValue.proID}"><img src="${itemsValue.img}" class="card-img-top " alt="..."></a>
                    <div class="card-body">
                    <p class="card-text">${itemsValue.productName} ....</p>
                    <span class="card-prices">Rs.${itemsValue.price}</span>
                    <button class="btn btn-dark filter-btn" type="button" onclick="AddToCart(${itemsValue.proID})">Add To Cart</button>
                    </div>
                    </div>
            `
            innerAudio += audio;
        })
        
        CardAudioEnter.innerHTML = innerAudio;  
    }
    else
    {
        cartInLocal()
    }
    
    }
   
function DisplayPhone(){
    let ischecked = event.target.checked;
    if(ischecked === true){
        let cb2 = document.getElementById('cb2');
        cb2.checked = false;
        let ProductType = JSON.parse(localStorage.getItem('MiPakistan')) || [],
        results =  ProductType.filter(x => x.cateory === 'Smartphones'),
        innerAudio = '';
        CardAudioEnter = document.querySelector('.main-data-cart');
        results.forEach((itemsValue)=>{
            let audio = 
            `
             <div class="card-picture-top" style="width: 18rem ">
              <a href="Charger.html?ProductID=${itemsValue.proID}"><img src="${itemsValue.img}" class="card-img-top " alt="..."></a>
                    <div class="card-body">
                    <p class="card-text">${itemsValue.productName} ....</p>
                    <span class="card-prices">Rs.${itemsValue.price}</span>
                    <button class="btn btn-dark filter-btn" type="button" onclick="AddToCart(${itemsValue.proID})">Add To Cart</button>
                    </div>
                </div>
            `
            innerAudio += audio;
        })
        CardAudioEnter.innerHTML = innerAudio;  
    
    }
    else{
        cartInLocal()
    }
    }
    

    
function DisplayInStock(event){
    let ischecked = event.target.checked;
    if(ischecked === true){
        let cb2 = document.getElementById('cb2' , 'cb4');
        cb2.checked = false;
        let ProductType = JSON.parse(localStorage.getItem('MiPakistan')) || [],
        results =  ProductType.filter(x => x.InStock > 0),
        innerAudio = '';
        CardAudioEnter = document.querySelector('.main-data-cart');
        results.forEach((itemsValue)=>{
            let audio = 
            `
             <div class="card-picture-top" style="width: 18rem ">
                <a href="Charger.html?ProductID=${itemsValue.proID}"><img src="${itemsValue.img}" class="card-img-top " alt="..."></a>
                    <div class="card-body">
                    <p class="card-text">${itemsValue.productName} ....</p>
                    <span class="card-prices">Rs.${itemsValue.price}</span>
                    <button class="btn btn-dark filter-btn" type="button" onclick="AddToCart(${itemsValue.proID})">Add To Cart</button>
                    </div>
                </div>
            `
            innerAudio += audio;
        })
        CardAudioEnter.innerHTML = innerAudio;  
    
    }
    else
    { 
        cartInLocal()
    }
}


cartInLocal()
