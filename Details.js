// Details Picture Function :


function getFromLocalStorage(localStorageKey = "MiPakistan") {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
}

function Detail() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const ProductID = params.get('ProductID');
    const items = getFromLocalStorage();
    const fd = items.find(x => x.proID == ProductID);
    if(fd){


    const HTML = `  
      <div class="col-6 ">
                    <img src="${fd.img}" id="display-img"alt="" srcset="" class='p-10 mx-auto h-5 picture'>
                    <div class="data-zoom-image">
                    <img src="${fd.zoom1}" onclick="selectImage('${fd.zoom1}')" class="zoom1">
                    <img src="${fd.zoom2}" onclick="selectImage('${fd.zoom2}')" class="zoom2">
                    <img src="${fd.zoom3}" onclick="selectImage('${fd.zoom3}')" class="zoom3">
                  </div>
                </div>
                <div class="col-6 p-5" id="oneone">
                    <h2 class="">${fd.productName}</h2>
                    <br>
                    <h4 class='text-danger'>Rs:${fd.price}</h4>
                    <br>
                        ${fd.Features}
                    <br>
                    <br>
                    <p>${fd.note}</p>
                    <br>
                    <span>
                        ${fd.descri}
                    </span>
                    <br>
                    <br>
                    <p class="h6">  ${fd.BOX}</p>
                    <br>
                      ${fd.key}
                    <ul>1 Color:</ul>
                    <button type="button" class="btn btn-Dark btn-lg border border-danger"> <img

                    src="button/soldout.png" class=" bg-dark p-1 " id="border">Black</button>
                    <br>
                    <br>
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <button class="btn btn-danger" id='add-button'type="button" onclick='AddToCart(${fd.proID})'>Add to Cart</button>
                        <button class="btn btn-danger" type="button">Add to Wishlist</button>
                    </div>
                </div>
                
                `
    let div = document.querySelector('.div');
    div.innerHTML = HTML;
    }
}
Detail()


function selectImage(imgUrl) {
    document.getElementById('display-img').setAttribute('src', imgUrl);
}

const picture = document.querySelector('.picture');
const zoomone = document.querySelector(".zoom1")
const zoomtwo = document.querySelector(".zoom2")
const zoomthree = document.querySelector(".zoom3")
zoomone.style = 'box-shadow: 0px 3px 0px 0px #000';

zoomone.addEventListener('click', () => {
    zoomone.style = 'box-shadow: 0px 3px 0px 0px #000';
    zoomthree.style = 'none';
    zoomtwo.style = 'none';

})

zoomtwo.addEventListener('click', () => {
    zoomtwo.style = 'box-shadow: 0px 3px 0px 0px #000';
    zoomone.style = 'none';
    zoomthree.style = 'none';
})

zoomthree.addEventListener('click', () => {
    zoomthree.style = 'box-shadow: 0px 3px 0px 0px #000';
    zoomtwo.style = 'none';
    zoomone.style = 'none';
})

