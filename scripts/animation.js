//problem with module path
import { Linear, Power4, Power3, TweenMax } from "../node_modules/gsap/gsap-core.js"
import gsap from "../node_modules/gsap/index.js";

document.addEventListener('DOMContentLoaded', function domLoaded() {
    const starAnimation = TweenMax.fromTo(
        '#star',
        0.5,
        {
            scale: 0.1, 
            opacity: 0,
            rotation: -180
        }, 
        {
            scale: 1, 
            opacity: 1,
            rotation: 0,
            ease: Power3,
            repeat:-1,
            repeatDelay: 1.5
        }
    );
    
});