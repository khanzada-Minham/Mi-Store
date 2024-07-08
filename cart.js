let cart = JSON.parse(localStorage.getItem('AddToCart')) || [];

let overlay = document.querySelector('.overlay');
let prompt1 = document.querySelector('.prompt');

function AddToCart(id) {
    let item = items.find(x => x.proID == id);
    overlay.style.display = 'flex';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 1000);
    setTimeout(() => {
        prompt1.style.display = 'block';
    }, 1000);
    setTimeout(() => {
        prompt1.style.display = 'none';
    }, 4000);

    let localData = cart.find(x => x.proID == id);
    document.querySelector('.pro-img').setAttribute('src', item.img);

    if (!localData) {
        item.quantity = 1;
        cart.push(item);
    } else {
        localData.quantity++;
    }

    localStorage.setItem('AddToCart', JSON.stringify(cart));
    localgetItem();
}

function localgetItem() {
    // let cart = JSON.parse(localStorage.getItem('AddToCart')) || [];
    let list = '';
    let total = 0;
    let totalQuantity = 0;
    let list2 = '';
    let lestform = '';
    // let Discountprices = '';
    let DiscountData = document.querySelector('.DiscountData');
    // console.log(DiscountData);
    const SubTotal = document.getElementById('sub-total');
    let cartCount = document.querySelector('.cartCount');
    const innerBagitem = document.querySelector('.header');
    const Footersummary = document.querySelector('.footer');
    const tableData = document.querySelector('.table-data');
    const lestFormData = document.querySelector('.Form-Right-part'),
    TotalPricesCartEnter =document.querySelector('.Total-prices-cart-enter')
    // console.log(TotalPricesCartEnter);

    totalQuantity = 0;

    if (cart.length > 0) {
        cart.forEach((item, index) => {
            totalQuantity += item.quantity;
            total += item.price * item.quantity;

            if (innerBagitem) {
                list += `
                <div class='w-100 d-flex '>
                    <div class="card-image-1 ">
                        <img src="${item.img}" class="w-100 img-w100 ">
                    </div>
                    <div class="product-details d-flex flex-column justify-content-center align-items-start position-relative w-50">
                        <p class="product-name">
                            <a>${item.productName}</a>
                        </p>
                        <div class="option">
                            <small>Obsidian Black</small>
                        </div>
                        <div class="cart-collateral">
                            <span class="price">
                                <span class="item-price">Rs.${item.price * item.quantity}</span>
                            </span>
                            <span class="quantity">x ${item.quantity}</span>
                        </div>
                        <i class="fa fa-thin fa-x end-0" onclick="removeItem(${index})" id="x-icon-cart"></i>
                    </div>
                </div>
                `;
            }

            if (tableData) {
                list2 += ` 
                    <tr>
                        <td colspan="2">
                            <img src="${item.img}" height="100px" alt="${item.productName}">
                        </td>
                        <td colspan="3">
                            <div class="product-details">
                                <a href="#" class="product-name">
                                    ${item.productName}
                                </a>
                                <p class="size">
                                    <small>black</small>
                                </p>
                            </div>
                        </td>
                        <td colspan="1">
                            <p class="price">
                                <span class="saso-cart-item-price">
                                    Rs. ${item.price}
                                </span>
                            </p>
                        </td>
                        <td colspan="2">
                            <div class="desk-quantity">
                                <input class="inputvalue" type="number" onchange="UserQuantityInput(${item.proID}, this.value)" min="0" value="${item.quantity}">
                            </div>
                        </td>
                        <td colspan="1">
                            <div class="total">
                                <span class="saso">
                                    Rs. ${item.price * item.quantity}
                                </span>
                            </div>
                        </td>
                        <td colspan="2">
                            <i class="fa fa-thin fa-x end-0" onclick="removeItem(${index})"></i>
                        </td>
                    </tr>
                `;
            }

            if (lestFormData) {
                lestform += `
           
            <img src="${item.img}" class="last-page-img col-4">
            <span class='col-6 last-page-productName'>${item.productName}</span>
                <p class='col-3 last-page-productName'>Rs.${item.price}</p>
                
           `
        }
    });

        if (TotalPricesCartEnter) {
            TotalPricesCartEnter.innerHTML = `
            <div class="Discount-Style">
            <input type="text" placeholder="Discount code of gift card" class="col-6 Discount-input">
            <button type="button" class="btn btn-light">Apply</button>
            </div>
        <div class="Discount-Style">
        <samp>Subtotal</samp>
        <samp>Rs.${total}</samp>
        </div>
        <div class="Discount-Style">
            <samp>Shipping</samp>
            <span>Rs 190.00</span>
        </div>
        <div class="Discount-Style">
            <samp class="total-price-add-shipping">Total</samp>
            <span>Rs ${total + 190}</span>
        </div>
            `
        }

      
        if (Footersummary) {
            Footersummary.innerHTML = `
                <div class="">
                    <p class="">
                        <span class="">
                            <span>Total</span>
                        </span>
                        <span class="">
                            <span class="">Rs. ${total}</span>
                        </span>
                    </p>
                    <div class="">
                    <a href="/form.html" class="btn btn-dark check-out-button" type="button">Check Out</a> 
                    </div>
                    <div class="">
                        <a href="cart.html" class="view-cart-button">View Cart</a>
                    </div>
                </div>
            `;
        }

        if (SubTotal) {
            SubTotal.innerHTML = `
                <div class="total-cart-price">
                    <div class="total-price">
                        <h3>TOTAL</h3>
                        <span class="">
                            <p class="totalparent">Rs. ${total}</p>
                        </span>
                    </div>
                    <div class="cart-check">
                        <div class="cityListWrap">
                            <select id="cityNameDropdown">
                                <option id="noSelectedOption" value="0">Select City Name</option>
                                <option value="LAHORE">LAHORE</option>
                                <option value="KARACHI">KARACHI</option>
                                <option value="ISLAMABAD">ISLAMABAD</option>
                                <option value="RAWALPINDI">RAWALPINDI</option>
                                <option value="FAISALABAD">FAISALABAD</option>
                                <option value="MULTAN">MULTAN</option>
                                <option value="PESHAWAR">PESHAWAR</option>
                                <option value="GUJRANWALA">GUJRANWALA</option>
                                <option value="SIALKOT">SIALKOT</option>
                                <option value="HYDERABAD">HYDERABAD</option>
                                <option value="ABBOTTABAD">ABBOTTABAD</option>
                            </select>
                            <span id="cityDropdwonErrorText" style="display: none; color:red">* Please select the city</span>
                        </div>
                        <button type="button" class="btn btn-outline-secondary">Continue Shopping</button>
                        <button type="button" class="btn btn-outline-danger">Proceed to Checkout</button>
                    </div>
                </div>
            `;
        }

        if (lestFormData) lestFormData.innerHTML = lestform;
        if (innerBagitem) innerBagitem.innerHTML = list;
        if (cartCount) cartCount.innerHTML = totalQuantity;
        if (tableData) tableData.innerHTML = list2;


    } else {
        if (Footersummary) Footersummary.innerHTML = '';
        if (SubTotal) document.querySelector('.totalparent').innerHTML = '';
        if (tableData) tableData.innerHTML = 'Your Cart Is Empty';
        if (innerBagitem) innerBagitem.innerHTML = 'Your Cart Is Empty';
    }
}

localgetItem();



function removeItem(index) {
    // let cart = JSON.parse(localStorage.getItem('AddToCart')) || [];
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        localStorage.setItem('AddToCart', JSON.stringify(cart));
        localgetItem();
    }
}

function UserQuantityInput(proID, newQuantity) {
    let FindUserQuantity = cart.find(x => x.proID === proID);
    if (FindUserQuantity) {
        newQuantity = parseInt(newQuantity);
        if (newQuantity > 0) {
            FindUserQuantity.quantity = newQuantity;
            localStorage.setItem('AddToCart', JSON.stringify(cart));
            localgetItem();
        } else {
            let itemIndex = cart.findIndex(x => x.proID === proID);
            removeItem(itemIndex);
            localgetItem();
        }
    } else {
        console.log('Item not found in cart');
        localgetItem();
    }
}


let CashOnDeliveryRadioButton = document.querySelector('.CashOnDelivery-radio-button'),
DebitFooter = document.querySelector('.Debit-footer'),
DebitHearderRedio = document.querySelector('.Debit-hearder-redio'),
BankDepositRedioBtn = document.querySelector('.Bank-Deposit-redio-btn'),
BankDepositFooter = document.querySelector('.Bank-Deposit-Footer'),
DifferentBillingRadio = document.querySelector('.different-billing-radio'),
BillingFooter = document.querySelector('.billing-footer'),
shippingAddressInput = document.querySelector('.shipping-address-input');

function clearRadio() {
    let radio = document.querySelectorAll(".All-redio-btn");
    radio.forEach((uncheck)=>{
      uncheck.checked = false;
    })
 }
CashOnDeliveryRadioButton.addEventListener('click',()=>{
        DebitFooter.style.display = 'none';
        BankDepositFooter.style.display = 'none';
        clearRadio()
        
})

DebitHearderRedio.addEventListener('click',()=>{
        DebitFooter.style.display = 'block';

})
BankDepositRedioBtn.addEventListener('click',()=>{
    BankDepositFooter.style.display = 'block';
})

DifferentBillingRadio.addEventListener('click',()=>{
    BillingFooter.style.display = 'block';
   
})
shippingAddressInput.addEventListener('click',()=>{
    BillingFooter.style.display = 'none';
    clearRadio()
})



