var loginBtnElement = document.getElementById("login-btn")

if(JSON.parse(localStorage.getItem("isLoggedIn")) == null ){
  localStorage.setItem("isLoggedIn" , false);
}else if(JSON.parse(localStorage.getItem("isLoggedIn")) == false  ){
    loginBtnElement.innerText = "Login"
}else{
    loginBtnElement.innerText = "Logout"
}

function changeStatus(){

    if(JSON.parse(localStorage.getItem("isLoggedIn")) == false   ){
        localStorage.setItem("isLoggedIn", true);
        loginBtnElement.innerText = "Logout"
    }else{
        localStorage.setItem("isLoggedIn", false);
        loginBtnElement.innerText = "Login"
    }

}