window.addEventListener("scroll", () => {
    let headerTop = document.querySelector(".header-top");
    let headerLogo = document.querySelector(".header-menu-logo");
    let headerLogoSm = document.querySelector(".header-menu-logo-sm");
    let backToTop = document.querySelector(".back-to-top");

    headerTop.classList.toggle("hide", window.scrollY > 0);
    headerLogo.classList.toggle("hide", window.scrollY > 0);
    headerLogoSm.classList.toggle("show", window.scrollY > 0);
    backToTop.classList.toggle("show", window.scrollY > 0);
})

let heroShareBtn = document.querySelector(".hero-share-btn");
let heroSocial = document.querySelector(".hero-share-social");

heroShareBtn.addEventListener("click", () => {
    heroSocial.classList.toggle("visible");
})

let loader = document.querySelector(".loader")

window.onload = () => {
    setTimeout(() => {
        loader.style.display = "none";
    }, 1000)

}

