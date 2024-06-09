const headerTag = "<header id='header' class='header'><div id='header_container'><div id='logo'><img src='./resources/img/barberiaLogoRectangle.png' alt='' id='home_logo_rectangle'></div><div id='nav'><ul id='nav_buttons'><li class='nav_button'><div class='button_text'><a href='./home_page.html'>HOME</a></div></li><li class='nav_button'><div class='button_text'><a href='./Services.html'>SERVICES</a></div></li>" + "<li class='nav_button'><div class='button_text'><a href='./History.html'>HISTORY</a></div></li><li class='nav_button'><div class='button_text'><a href='./About.html'>ABOUT</a></div></li></ul></div></div></header>";
const footerTag = "<footer id='footer'><div id='top_footer'><ul id='first_options' class='options'><li><a href='./home_page.html'>HOME</a></li><li><a href='./History.html'>HISTORY</a></li><li><a href=''>CONTACT US</a></li><li><a href='./About.html'>ABOUT US</a></li></ul><img src='./resources/etc/barberiaRoundLogoNobg.png' alt='' id='bottom_logo'><ul id='second_options' class='options'><li><a href='./Location_page.html'>LOCATIONS</a></li><li><a href='./Services.html'>SERVICES</a></li><li><a href=''>BOOKING</a></li><li><a href=''>GET IN STYLE</a></li></ul></div><div id='footer_separator'><span></span></div><div id='bottom_footer'><img src='./resources/etc/socials.png' alt='' id='socials'><h3>ALL RIGHTS RESERVED 2020-2024</h3></div></footer>";

document.body.innerHTML = document.body.innerHTML + headerTag + footerTag + "<span id='scroll_to_top'><i class='fa-solid fa-arrow-up'></i></span>";

const header = document.querySelector(".header");
const scroll_notif = document.querySelector("#scroll_to_top");
scroll_notif.style.opacity = "0";

window.addEventListener("scroll", () =>{
    if(scrollY >= 200){
        header.classList.add("black");
        scroll_notif.style.opacity = "1";
    }else{
        header.classList.remove("black");
        scroll_notif.style.opacity = "0";
    }
});

scroll_notif.addEventListener("click", () => {
    globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

console.log(scrollY);