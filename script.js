document.getElementById('shipping-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const distance = parseFloat(document.getElementById('distance').value);
    const shippingMethod = document.getElementById('shipping-method').value;

    let costPerKgPerKm;

    switch (shippingMethod) {
        case 'standard':
            costPerKgPerKm = 0.5;
            break;
        case 'express':
            costPerKgPerKm = 1.0;
            break;
        case 'overnight':
            costPerKgPerKm = 1.5;
            break;
        default:
            costPerKgPerKm = 0;
    }

    const shippingCost = weight * distance * costPerKgPerKm;

    document.getElementById('result').textContent = `Shipping Cost: $${shippingCost.toFixed(2)}`;
});
