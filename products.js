
if (JSON.parse(localStorage.getItem("isLoggedIn")) == false ||
    JSON.parse(localStorage.getItem("isLoggedIn")) == null) {
    location.assign("http://127.0.0.1:5500/index.html")
}

var loginBtnElement = document.getElementById("login-btn")


if (JSON.parse(localStorage.getItem("isLoggedIn")) == null) {
    localStorage.setItem("isLoggedIn", false);
} else if (JSON.parse(localStorage.getItem("isLoggedIn")) == false) {
    loginBtnElement.innerText = "Login"
} else {
    loginBtnElement.innerText = "Logout"
}


function changeStatus() {
    if (JSON.parse(localStorage.getItem("isLoggedIn")) == false) {
        localStorage.setItem("isLoggedIn", true);
        loginBtnElement.innerText = "Logout"
    } else {
        localStorage.setItem("isLoggedIn", false);
        loginBtnElement.innerText = "Login"
        location.assign("http://127.0.0.1:5500/index.html");
    }

}


{/*  */ }


var productsWrapperElement = document.getElementById("products-wrapper")


$.get("https://dummyjson.com/products", function (response) {
    var products = response.products;
    for (var i = 0; i < products.length; i++) {
        productsWrapperElement.innerHTML += `
        <div  onclick = "cardClickedFunction(${i + 1})" class="product-card" >
<img 
class="product-image"
src="${products[i].thumbnail}"
/>
<h3> ${products[i].title} </h3>
<p> ${products[i].price} $ </p>
<p> ${products[i].rating} / 5 </p>
</div>
        `
    }
})

function cardClickedFunction(i){
    location.assign("http://127.0.0.1:5500/product.html?id="+i)
}