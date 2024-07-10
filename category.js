// Data Base :




// Search Function

const container1 = document.querySelector('.ViewPage');
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('searchButton');


function search3(keyword, fields) {
    const search2 = window.location.search;
    const params = new URLSearchParams(search2);
    const categoryValue = params.get('category');
    const items = getFromLocalStorage();


    const result = items.filter(x => x.cateory == categoryValue)
    const lowerCaseKeyword = keyword.replace(/\s+/g, '').toLowerCase();
    return result.filter(item => {
        return fields.some(field => {
            const value = item[field];
            return value && value.toString().replace(/\s+/g, '').toLowerCase().includes(lowerCaseKeyword);
        });


    });
}
function displayResults(results) {
    let list = '';
    results.forEach(item => {
        const cartItemHTML = `
                <a href="/Charger.html?ProductID=${item.proID}"><div class="col-2 " style="width: 18rem;">
                    <img src="${item.img}" class="card-img-top card" alt="${item.productName}">
                    <div class="card-body ">
                        <p class="card-text">${item.productName}</p>
                        <h5 class="card-title text-danger"> Rs:${item.price}</h5>
                    </div>
                </div>
                </a>
            `;
        list += cartItemHTML;
    });

    container1.innerHTML = list;
}

// Event listener for the search button:
searchButton.addEventListener('click', () => {
    const keyword = searchInput.value.trim();
    const fields = ["category", "productName"];
    const results = search3(keyword, fields);
    if (keyword == null) {
        displayResults(result)
    }
    else {
        displayResults(results);
    }
});

// Filter Function in result :
function filtercategory(min, max) {
    updateResult = result.filter(x => x.price >= min && x.price <= max);

    displayResults(updateResult);
}

// Filter Function Button 

const filterButton = document.getElementById('Button');
let inputbutton;


filterButton.addEventListener('click', () => {
    const inputbutton = document.querySelector('input[name="contact"]:checked');
    const lowsort = document.querySelector('input[class="check"]:checked');
    const highsort = document.querySelector('input[class="check1"]:checked');
    const MinValue = document.querySelector('.min-price').value;
    const MaxValue = document.querySelector('.max-price').value;




    const handleFilter = () => {

        if (inputbutton) {
            if (inputbutton.value === 'All') {
                displayResults(result);
            } else {
                const [min, max] = inputbutton.value.split(',').map(Number);
                filtercategory(min, max);
            }
        }
    };

    if (lowsort) {
        handleFilter();
        handlFD();
        Low();
    } else if (highsort) {
        handleFilter();
        handlFD();
        High();
    }
    else if (MinValue !== '' && MaxValue !== '') {
        handlFD();

    }
    else {
        handleFilter();
    }
});

let MinValue;
let MaxValue;


// sorting Function Prices (Low to High):
function Low() {
    MinValue = document.querySelector('.min-price').value;
    MaxValue = document.querySelector('.max-price').value;
    inputbutton = document.querySelector('input[name="contact"]:checked');

        
     if (inputbutton.value === 'All' && MinValue === '' && MaxValue === '') 
        {
        result = result.sort((a, b) => a.price - b.price);
        displayResults(result);
         }
    else {

        updateResult = updateResult.sort((a, b) => a.price - b.price);
        displayResults(updateResult);

    }
}

// sorting Function Prices (High to Low):
function High() {
    inputbutton = document.querySelector('input[name="contact"]:checked')
    if (inputbutton.value === 'All' && MinValue === '' && MaxValue === '') {
        result = result.sort((a, b) => a.price - b.price).reverse();
        displayResults(result);
    }
    else {

        updateResult = updateResult.sort((a, b) => a.price - b.price).reverse();
        displayResults(updateResult);

    }
}


// Checke Box Function : 
function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('input')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

const checkLow = document.querySelector('.check');
checkLow.addEventListener('click', function () {
    Low();
})

const checkHigh = document.querySelector('.check1');
checkHigh.addEventListener('click', function () {
    High();
})



// Min && Max Price Function:



function handlFD() {
    MinValue = document.querySelector('.min-price').value;
    MaxValue = document.querySelector('.max-price').value;
    filtercategory(MinValue, MaxValue)
}

// Custom Filtering

const CustomFilter = document.querySelector('.Custom');
CustomFilter.addEventListener('click', function () {
    document.getElementById('All').checked = true

    const min = document.getElementById("min-price");
    const mex = document.getElementById("max-price");

    if (CustomFilter.checked) {
        min.style.display = 'flex'
        mex.style.display = 'flex'
    }
    else {
        document.querySelector('.min-price').value = null;
        document.querySelector('.max-price').value = null;
        min.style.display = 'none'
        mex.style.display = 'none'
    }
})

// All Inputs And Redio Buttons : 

const RedioButtons = document.querySelectorAll('.input');
RedioButtons.forEach((items) => {
    items.addEventListener('click', () => {
        document.querySelector('.min-max').style.display = "none";
        document.querySelector('.min-price').value = null;
        document.querySelector('.max-price').value = null;
    })
})

let All = document.getElementById('All');
All.addEventListener('click', () => {
    document.querySelector('.min-max').style.display = "block";
})
