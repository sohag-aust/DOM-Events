let bestPrice = 1299;
let memoryPrice = 0;
let storagePrice = 0;
let deliveryPrice = 0;

let selectMemory16GB = false;
let selectMemory8GB = false;

let selectStorage256GB = false;
let selectStorage512GB = false;
let selectStorage1TB = false;

let selectDeliveryAUG25 = false;
let selectDeliveryAUG21 = false;

/** =========== Best Price ============= */
function getBestPrice() {
    return bestPrice;
}

/** =========== Extra Memory Cost ============= */
function setMemoryPrice(price) {
    memoryPrice = price;
    document.getElementById('memory-cost').innerText = memoryPrice.toString();
}

function getMemoryPrice() {
    return memoryPrice;
}

/** =========== Extra Storage Cost ============= */
function setStoragePrice(price) {
    storagePrice = price;
    document.getElementById('storage-cost').innerText = storagePrice.toString();
}

function getStoragePrice() {
    return storagePrice;
}

/** =========== Delivery Charge ============= */
function setDeliveryPrice(price) {
    deliveryPrice = price;
    document.getElementById('delivery-cost').innerText = deliveryPrice.toString();
}

function getDeliveryPrice() {
    return deliveryPrice;
}


/** =========== Selection on Which the price can vary ============= */


// 8GB RAM selected
document.getElementById('memory-GB-8').addEventListener('click', function() {
    console.log('8GB memory selected');
    setMemoryPrice(0);

    let prevSubTotal = parseInt(document.getElementById('sub-total').innerText);
    if(selectMemory16GB === true) {
        prevSubTotal -= 180;
        selectMemory16GB = false;
        selectMemory8GB = true;
    }
    
    prevSubTotal += getMemoryPrice();
    document.getElementById('sub-total').innerText = prevSubTotal.toString();
    document.getElementById('total').innerText = prevSubTotal.toString();
});


// 16GB RAM selected
document.getElementById('memory-GB-16').addEventListener('click', function() {
    console.log('16GB memory selected');
    setMemoryPrice(180);

    let prevSubTotal = parseInt(document.getElementById('sub-total').innerText);
    if(selectMemory16GB === false) {
        prevSubTotal += getMemoryPrice();
        selectMemory16GB = true;
    }

    document.getElementById('sub-total').innerText = prevSubTotal.toString();
    document.getElementById('total').innerText = prevSubTotal.toString();
});


// 216GB SSD selected
document.getElementById('storage-GB-256').addEventListener('click', function() {
    console.log('216GB storage selected');
    setStoragePrice(0);

    let prevSubTotal = parseInt(document.getElementById('sub-total').innerText);
    if(selectStorage512GB === true) {
        prevSubTotal -= 100;
        selectStorage512GB = false;
        selectStorage256GB = true;
    }else if(selectStorage1TB === true) {
        prevSubTotal -= 180;
        selectStorage1TB = false;
        selectStorage256GB = true;
    }
    
    prevSubTotal += getStoragePrice();
    document.getElementById('sub-total').innerText = prevSubTotal.toString();
    document.getElementById('total').innerText = prevSubTotal.toString();
});


// 512GB SSD selected
document.getElementById('storage-GB-512').addEventListener('click', function() {
    console.log('512GB storage selected');
    setStoragePrice(0);
    setStoragePrice(100);

    let prevSubTotal = parseInt(document.getElementById('sub-total').innerText);
    if(selectStorage1TB === true) {
        console.log(`prev sub total : ${prevSubTotal}`);
        prevSubTotal -= 80;
        selectStorage1TB = false;
        selectStorage512GB = true;
    }

    if(selectStorage512GB === false) {
        prevSubTotal += getStoragePrice();
        selectStorage512GB = true;
    }
    
    document.getElementById('sub-total').innerText = prevSubTotal.toString();
    document.getElementById('total').innerText = prevSubTotal.toString();
});


// 1TB SSD selected
document.getElementById('storage-TB-1').addEventListener('click', function() {
    console.log('1TB storage selected');
    setStoragePrice(0);
    setStoragePrice(180);

    console.log(`select 1TB : ${selectStorage1TB}`);

    let prevSubTotal = parseInt(document.getElementById('sub-total').innerText);
    if(selectStorage512GB === true) {
        prevSubTotal -= 100;
        selectStorage1TB = false;
        selectStorage512GB = false;
    }
    if(selectStorage1TB === false) {
        prevSubTotal += getStoragePrice();
        selectStorage1TB = true;
    }

    document.getElementById('sub-total').innerText = prevSubTotal.toString();
    document.getElementById('total').innerText = prevSubTotal.toString();
});


// Delivery, AUG-25 selected
document.getElementById('delivery-AUG-25').addEventListener('click', function() {
    console.log('Delivery-AUG-25 selected');
    setDeliveryPrice(0);

    let prevSubTotal = parseInt(document.getElementById('sub-total').innerText);
    if(selectDeliveryAUG21 === true) {
        prevSubTotal -= 20;
        selectDeliveryAUG21 = false;
        selectDeliveryAUG25 = true;
    }
    
    prevSubTotal += getDeliveryPrice();
    document.getElementById('sub-total').innerText = prevSubTotal.toString();
    document.getElementById('total').innerText = prevSubTotal.toString();
});


// Delivery, AUG-21 selected
document.getElementById('delivery-AUG-21').addEventListener('click', function() {
    console.log('Delivery-AUG-21 selected');
    setDeliveryPrice(20);

    let prevSubTotal = parseInt(document.getElementById('sub-total').innerText);
    if(selectDeliveryAUG21 === false) {
        prevSubTotal += getDeliveryPrice();
        selectDeliveryAUG21 = true;
    }

    document.getElementById('sub-total').innerText = prevSubTotal.toString();
    document.getElementById('total').innerText = prevSubTotal.toString();
});


/** =========== Promo Price ============= */
document.getElementById('promo-apply').addEventListener('click', function() {
    const promoField = document.getElementById('promo-code');
    
    if(promoField.value === 'stevekaku') {
        let prevTotalPrice = parseInt(document.getElementById('total').innerText);
        console.log(`prev total price : ${prevTotalPrice}`);

        const promoPrice = prevTotalPrice * 0.2;
        console.log(`promo price : ${promoPrice}`);

        const totalPrice = prevTotalPrice - promoPrice;
        document.getElementById('total').innerText = totalPrice.toString();
    }
});