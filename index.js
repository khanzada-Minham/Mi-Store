function setupSlider(sliderTrack, sliderItems, nextBtn, prevBtn) {
    const slideCount = sliderItems.length;
    let currentSlide = 0;
    SearchLogo = document.getElementById('search-logo'),
    SearchProduct = document.getElementById('Search-product');

    nextBtn.addEventListener('click', () => {
        if (currentSlide < slideCount - 1) {
            currentSlide++;
            updateSlider();
        }
        updateButtons();
    });

    prevBtn.addEventListener('click', () => {
        if (currentSlide >= 0) {
            currentSlide--;
            updateSlider();
        }
        updateButtons();
    });

    sliderItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
            updateButtons();
        });
    });

    function updateSlider() {
        let translateValue = 0;
        for (let i = 0; i < currentSlide; i++) {
            translateValue -= sliderItems[i].clientWidth * 4;
        }
        sliderTrack.style.transform = `translateX(${translateValue}px)`;
    }

    function updateButtons() {
        nextBtn.disabled = currentSlide === 1;
        prevBtn.disabled = currentSlide === 0;
    }

    // Initial button state update
    updateButtons();
}

const sliderTracks = document.querySelectorAll('.slider');
sliderTracks.forEach(sliderTrack => {
    const sliderItems = sliderTrack.querySelectorAll('.slide');
    const nextBtn = sliderTrack.parentElement.querySelector('.next');
    const prevBtn = sliderTrack.parentElement.querySelector('.prev');
    setupSlider(sliderTrack, sliderItems, nextBtn, prevBtn);
});


