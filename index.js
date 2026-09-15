  
let contrastToggle = false;
const scaleFactor = 1/20

function moveBackground(event) {
    const shapes =document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !==0;
        const boolInt = isOdd ? -1  : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList.add("dark_theme"); // Fixed syntax
    } else {
        document.body.classList.remove("dark_theme");
    }
}


function contact(event) {
    event.preventDefault();
    
    const loading = document.querySelector('.modal_overlay_loading');
    const success = document.querySelector('.modal_overlay_sucess'); 
    
    // Show the loading spinner overlay
    loading.classList.add("modal_overlay_visible");

    emailjs.sendForm(
        'service_cccbhek',
        'template_478rpxa',
        event.target,
        'ZknsjvdeKTNZgEJ3-'
    ).then(() => {
        // Hide loading, show success overlay screen
        loading.classList.remove("modal_overlay_visible");
        success.classList.add("modal_overlay_visible");
    }).catch((error) => {
        loading.classList.remove("modal_overlay_visible");
        console.error("EmailJS Error:", error);
        alert(
            "The email service is temporarily unavailable. Please contact me for support."
        );
    });
}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal_open");
    }
    isModalOpen = true;
    document.body.classList.add("modal_open");
}