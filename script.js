const closeBurgerNav = () => {
    const getBurgerNav = document.getElementById("burger-nav");
    const menu = document.getElementById("menu-button");
    const close = document.getElementById("close-button");

    if (getBurgerNav.style.display === "none") {
        getBurgerNav.style.display = "block";
        close.classList.remove("close");
        menu.classList.add("close");
    } else {
        getBurgerNav.style.display = "none";
        close.classList.add("close");
        menu.classList.remove("close");
    }

}

const handleChangeIcon = () => {
    const getBurgerNav = document.getElementById("burger-nav");
    const getShowIcon = document.getElementById("nav").getElementsByClassName("show");
    const getCloseIcon = document.getElementById("nav").getElementsByClassName("close");

    if(getBurgerNav.style.display === "none"){
        getShowIcon.style.display = "none";
        getCloseIcon.style.display = "block";
    }
    
}