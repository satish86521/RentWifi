
// Example JavaScript to dynamically adjust star ratings if needed
const ratings = document.querySelectorAll('.rating');

ratings.forEach(rating => {
    const score = parseFloat(rating.innerText.split('/')[0].replace(',', '.'));
    const starsElement = rating.previousElementSibling;
    const fullStars = Math.floor(score);
    const halfStar = score % 1 >= 0.5;

    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    if (halfStar) {
        stars += '★'; // You can create a custom half-star icon if needed
    }
    while (stars.length < 5) {
        stars += '☆';
    }

    starsElement.innerHTML = stars;
});
