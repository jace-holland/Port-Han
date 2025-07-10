// --------------------- Navbar reponsiveness -------------------------------
const navbar = document.querySelector(".navbar");
const menu = document.querySelector("#menu");

menu.addEventListener("click", () =>{
    navbar.classList.toggle("responsive");
    // console.log("hello");
    
})



window.onscroll = function () {
    headerShadow();
};

const scrollTopBtn = document.getElementById("scrollTopBtn");
// const navbar = document.querySelector(".navbar"); // ✅ Make sure to define navbar

function headerShadow() {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 1px 7px rgba(0,0,0,0.1)";
        navbar.style.backgroundColor = "#ddd";
        navbar.style.height = "70px";
        navbar.style.lineHeight = "70px";
    } else {
        navbar.style.boxShadow = "none";
        navbar.style.backgroundColor = "#fff";
        navbar.style.height = "90px";
        navbar.style.lineHeight = "70px";
    }

    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

// Move this outside the scroll function so it's not repeatedly re-attached
scrollTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
