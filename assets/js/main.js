var inputBtn = document.querySelector("input")

inputBtn.addEventListener("change", () => {
    
    var basic = document.querySelector("#basic .price p");
    var professional = document.querySelector("#professional .price p");
    var master = document.querySelector("#master .price p");

    if(inputBtn.checked) {
        basic.textContent = "$19.99";
        professional.textContent = "$24.99";
        master.textContent = "$39.99";
    }
    else {
        basic.textContent = "$199.99";
        professional.textContent = "$249.99";
        master.textContent = "$399.99";
    }
})