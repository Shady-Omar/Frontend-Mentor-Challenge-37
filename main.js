// *************************
// Card Number Script

let creditInput = document.querySelector("#credit-num");
let creditNum = document.querySelector(".card-num");

creditNum.innerHTML = "0000 0000 0000 0000"

creditInput.addEventListener('input', (e) => {
    creditNum.textContent = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
})

// *************************
// Card Name Script

let creditName = document.querySelector("#credit-name");
let cardName = document.querySelector(".card-name");

cardName.innerHTML = "JANE APPLESEED"

creditName.addEventListener('input', (e) => {
    cardName.textContent = e.target.value.toUpperCase()
});

// *************************
// Card Expiry Date Script

let monthInput = document.querySelector("#mm");
let yearInput = document.querySelector("#yy");
let monthText = document.querySelector("#month");
let yearText = document.querySelector("#year");

monthText.innerHTML = "00"
yearText.innerHTML = "00"

monthInput.addEventListener('input', (e) => {
    monthText.textContent = e.target.value
});
yearInput.addEventListener('input', (e) => {
    yearText.textContent = e.target.value
});

// *************************
// Card CVC Script

let cvcInput = document.querySelector("#cvcInput");
let cvcText = document.querySelector(".cvc");

cvcText.innerHTML = "000"

cvcInput.addEventListener('input', (e) => {
    cvcText.textContent = e.target.value
});

// *************************
// Form Validiation Script

let form = document.querySelector(".myForm");

form.addEventListener('submit', (e) => {
    let numError = document.querySelector(".num-error");
    let nameError = document.querySelector(".name-error");
    let expError = document.querySelector(".exp-error");
    let cvcError = document.querySelector(".cvc-error");

    let msg = []
    if (creditInput.value === '' || creditInput.value == null || isNaN(creditInput.value)) {
        msg.push('Error')
        numError.classList.remove("hide");
    } else if (creditInput.value.length > 0) {
        numError.classList.add("hide");
    }

    if (creditName.value === '' || creditName.value == null) {
        msg.push('Error')
        nameError.classList.remove("hide");
    } else if (creditName.value.length > 0) {
        nameError.classList.add("hide");
    }

    if (monthInput.value === '' || monthInput.value == null || isNaN(monthInput.value)) {
        msg.push('Error')
        expError.classList.remove("hide");
    } else if (monthInput.value.length > 0) {
        expError.classList.add("hide");
    }

    if (yearInput.value === '' || yearInput.value == null || isNaN(yearInput.value)) {
        msg.push('Error')
        expError.classList.remove("hide");
    } else if (yearInput.value.length > 0) {
        expError.classList.add("hide");
    }

    if (cvcInput.value === '' || cvcInput.value == null || isNaN(cvcInput.value)) {
        msg.push('Error')
        cvcError.classList.remove("hide");
    } else if (cvcInput.value.length > 0) {
        cvcError.classList.add("hide");
    }

    if (msg.length > 0) {
        e.preventDefault()
    }

    let formSide = document.querySelector(".form");
    let complete = document.querySelector(".complete");

    if (msg.length == 0) {
        e.preventDefault()
        formSide.classList.add("hide");
        complete.classList.remove("hide");
    }
});

// *************************
// The End