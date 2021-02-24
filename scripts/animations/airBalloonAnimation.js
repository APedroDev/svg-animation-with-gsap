import { Linear, Power3, TweenMax, Expo, Power4, Power2 } from "../../node_modules/gsap/gsap-core.js";
import {gsap} from "../../node_modules/gsap/index.js";

//Importing svgs
import {
    LAB_AIRBALLOON,
    LAB_CLOUD,
    LAB_WIND
} from '../constants.js';

export default function animateLab() {

    let labCloudsAnimation = TweenMax.fromTo(
        LAB_CLOUD,
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

    let labAirBalloonAnimation = TweenMax.fromTo(
        LAB_AIRBALLOON,
        12,
        {
            x: -2000,
            rotation: 20
        },
        {
            x: 2000,
            rotation: -20,
            ease: Power3.easeIn,
            repeat: -1
        }
    );

    TweenMax.set(LAB_WIND, {
        strokeDasharray: LAB_WIND.getTotalLength()
    });

    let labWindAnimation = TweenMax.fromTo(
        LAB_WIND,
        1.5,
        {
            strokeDashoffset: LAB_WIND.getTotalLength(),
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
}