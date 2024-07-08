

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
        // console.log(minVal,maxVal);
        let cart = JSON.parse(localStorage.getItem('MiPakistan')) || [],
            CardCol9 = document.querySelector('.main-data-cart'),
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


let cart1 = JSON.parse(localStorage.getItem('MiPakistan')) || [],
CardCol9 = document.querySelector('.main-data-cart'),
ListData = '';

cart1.forEach((item) => {
    let FelterDataPuch =
        `
            <div class="card-picture-top" style="width: 18rem ">
                <img src="${item.img}" class="card-img-top " alt="...">
                <div class="card-body">
                 <button class="btn btn-dark filter-btn" type="button" onclick="AddToCart(7)">Add To Cart</button>
                    <p class="card-text">${item.productName} ....</p>
                    <span class="card-prices">Rs.${item.price}</span>
                </div>
            </div>
       
    `
    ListData += FelterDataPuch;
 })
CardCol9.innerHTML = ListData;






const box1 = document.querySelector('.box1'),
box2 = document.querySelector('.box2'),
MainDataCart = document.querySelector('.main-data-cart'),
cardPictureTop = document.querySelectorAll('.card-picture-top'),
cardImgTop = document.querySelectorAll('.card-img-top'),
cardBody = document.querySelectorAll('.card-body')
console.log(cardPictureTop);

box1.addEventListener('click', () => {
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
    box2.style.background = 'black';
    box1.style.background = 'none';
    cardImgTop.forEach((item)=>{
        item.style.width = '250px'
    })
    MainDataCart.style.flexDirection = 'column';
    MainDataCart.style.width = '100%';
    cardPictureTop.forEach((items)=>{
        items.style.width = '100%';
        items.style.display = 'flex';
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
