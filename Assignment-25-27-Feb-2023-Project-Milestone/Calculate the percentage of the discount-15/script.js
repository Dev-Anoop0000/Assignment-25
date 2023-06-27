function calculateDiscount() {
    const originalPriceInput = document.getElementById('originalPrice');
    const discountedPriceInput = document.getElementById('discountedPrice');
    const resultElement = document.getElementById('result');

    const originalPrice = Number(originalPriceInput.value);
    const discountedPrice = Number(discountedPriceInput.value);

    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    const roundedDiscountPercentage = discountPercentage.toFixed(2);

    resultElement.textContent = `You saved ${roundedDiscountPercentage}%`;
}