const omenu = document.getElementById("omenu");
const sidebar = document.querySelector(".sidebar");

const body2 = document.querySelector("#body2")
body2.addEventListener("click",()=>{

   // omenu.classList.toggle("fa-bars");
    // omenu.classList.toggle("fa-xmark");
    if (sidebar.style.display === "none" || sidebar.style.display === "") {
        
    } else {
        // sidebar.style.display = "block";
        omenu.classList.toggle("fa-bars");
        omenu.classList.toggle("fa-xmark");
    }
    sidebar.style.display = "none"
})

omenu.addEventListener("click", () => {
    if (sidebar.style.display === "block" || sidebar.style.display === "") {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "block";
    }
    omenu.classList.toggle("fa-bars");
    omenu.classList.toggle("fa-xmark");
});

if (sidebar.style.display === "block" || sidebar.style.display === "") {
    sidebar.style.display = "none";
} else {
    sidebar.style.display = "block";
}

const bcolorinput = document.querySelector("#bci");
const savedBackgroundColor = localStorage.getItem("background-color");

if (savedBackgroundColor) {
    const cbc = document.body; // Select the body element
    cbc.style.backgroundColor = savedBackgroundColor;
    bcolorinput.value = savedBackgroundColor;
}

bcolorinput.addEventListener("input", () => {
    const newBackgroundColor = bcolorinput.value;
    localStorage.setItem("background-color", newBackgroundColor);
    const cbc = document.body;
    cbc.style.backgroundColor = newBackgroundColor;
});

const hfcolorinput = document.querySelector("#hfcolor");
const savedhfColor = localStorage.getItem("hf-color");

if (savedhfColor) {
    const chfc = document.querySelector("header"); // Select the header element
    chfc.style.backgroundColor = savedhfColor;
    hfcolorinput.value = savedhfColor;

    const cfhc = document.querySelector("footer");
    cfhc.style.backgroundColor = savedhfColor;
}

hfcolorinput.addEventListener("input", () => {
    const newHFColor = hfcolorinput.value;
    localStorage.setItem("hf-color", newHFColor);
    const chfc = document.querySelector("header");
    chfc.style.backgroundColor = newHFColor;
    const cfhc = document.querySelector("footer");
    cfhc.style.backgroundColor = newHFColor;
});
