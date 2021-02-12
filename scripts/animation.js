//problem with module path
import { Linear, Power3, TweenMax, Expo, Power4 } from "../node_modules/gsap/gsap-core.js"
import {gsap} from "../node_modules/gsap/index.js";

document.addEventListener('DOMContentLoaded', function domLoaded() {

    const windSvg = document.querySelector('#lab_wind');

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

    const labCloudsAnimation = TweenMax.fromTo(
        '#lab_clouds',
        35,
        {
            x: -1500
        },
        {
            x: 1500,
            ease: Linear.easeNone,
            repeat: -1
        }
    );

    const labAirBalloonAnimation = TweenMax.fromTo(
        '#lab_hot-air-balloon',
        12,
        {
            x: -950,
            rotation: 20
        },
        {
            x: 1500,
            rotation: -20,
            ease: Power4.easeIn,
            repeat: -1
        }
    );

    TweenMax.set(windSvg, {strokeDasharray: windSvg.getTotalLength()});
    const labWindAnimation = TweenMax.fromTo(
        windSvg,
        1.5,
        {
            strokeDashoffset: windSvg.getTotalLength(),
            y: 200,
            x: 100,
            opacity: 1
        },
        {
            strokeDashoffset: 0,
            ease: Power3.easeOut,
            repeat: -1,
            repeatDelay: 10.5,
            opacity: 0
        }
    );
    labCloudsAnimation.progress(0.5);
    labAirBalloonAnimation.progress(0.82);
    
});