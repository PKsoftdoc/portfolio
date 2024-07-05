/* ============== typing animation =============== */
var typed = new Typed(".typing",{
    Strings:["Web Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click", () =>
    {
        asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn()
    {
        aside.classList.toggle("open");
    }