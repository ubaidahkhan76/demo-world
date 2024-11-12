
const text = "If you want to Join Us!";
let index = 0;

function type() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust the speed here (in milliseconds)
    }
}

type();
document.getElementById("join").addEventListener("click",()=>{
    document.getElementById("socialS").scrollIntoView({
        behavior:"smooth"
    })
})
document.getElementById("hxp").addEventListener("click",()=>{
    document.getElementById("typewriter").innerHTML = ""
    const text = "If you want to Join Us!";
    let index = 0;
    
    function type() {
        if (index < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust the speed here (in milliseconds)
        }
    }
    
    type();
    
})
document.getElementById("hxp2").addEventListener("click",()=>{
    document.getElementById("typewriter").innerHTML = ""
    const text = "If you want to Join Us!";
    let index = 0;
    
    function type() {
        if (index < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust the speed here (in milliseconds)
        }
    }
    
    type();
    
})
