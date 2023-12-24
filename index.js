const checkBox = document.querySelector("#checkbox");
const hamberger = document.querySelector(".hamberger");

function myFunction(x) {
    if (x.matches) { // If media query matches
        checkBox.checked = false;
        checkBox.disabled = false;
        document.querySelector(".hamburger-container").classList.remove("visuallyHidden");
    }
    else {
        checkBox.checked = false;
        checkBox.disabled = true;
        document.querySelector(".hamburger-container").classList.add("visuallyHidden")
        document.querySelector(".side-bar").classList.remove("show");
    }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 1080px)")
myFunction(x);

// Attach listener function on state changes
window.addEventListener("resize", function () {
    myFunction(x);
});

checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
        document.querySelector(".side-bar").classList.add("show");
    }
    else {
        document.querySelector(".side-bar").classList.remove("show");
    }
})

window.addEventListener('scroll', e => {
    document.querySelector(".back-to-top").style.display = window.scrollY > 20 ? 'inline' : 'none';
});

window.addEventListener("click", (event) => {
    if (event.target.id != "checkbox" && event.target.id != "hamberger") {
        checkBox.checked = false;
        document.querySelector(".side-bar").classList.remove("show");
    }
})

const d = new Date();
document.querySelector(".copyright").innerText = `© Kunal Das ${d.getFullYear()}.`