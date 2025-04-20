function spinWheel(wheel, EndDegree) {
    let anim;
    if (anim) anim.cancel();
    anim = wheel.animate(   
        { transform: 'rotate(-1800deg)' }, {
        duration: 4000,
        easing: 'ease-in-out', 
        fill: 'forwards'
    });
    let num = Math.round(((EndDegree + 90) % 360) / (360 / 12)) % 12; 
    console.log("Landed on segment:", num);
}
document.addEventListener("DOMContentLoaded", () => {
    const wheel = document.querySelector(".ui-wheel-of-fortune ul");
    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        const EndDegree = Math.floor(Math.random() * 3600 + 360); 
        spinWheel(wheel, EndDegree);
});
});