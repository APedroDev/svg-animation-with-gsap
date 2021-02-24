import { Linear, Power3, TweenMax, Expo, Power4, Power2 } from "../../node_modules/gsap/gsap-core.js";
import {gsap} from "../../node_modules/gsap/index.js";

export default function animateSea() {

    let umbrellaArmTimeline = gsap.timeline({repeat: -1, repeatDelay: 2});
    let skyTimeline = gsap.timeline({repeat: -1});
    let duskTimeline = gsap.timeline({repeat: -1});

    gsap.set(
        '#sea_waves',
        {
            x: -300
        }
    );

    gsap.set(
        '#sea_arm',
        {
            x: 150,
            y: 400
        }
    );

    gsap.set(
        '#sea_sun',
        {
            x: -1100
        }
    );

    gsap.set(
        '#sea_dusk',
        {
            opacity: 0,
            fill: '#000000'
        }
    )

    gsap.to(
        '#sea_sun',
        80,
        {
            x:1400,
            ease: Linear,
            repeat: -1
        }
    );

    gsap.to(
        '#sea_waves',
        1.5,
        {
            x:-250,
            repeat: -1,
            yoyo: true,
            ease: Power2.easeIn
        }
    );

    skyTimeline.to(
        '#sea_sky',
        10,
        {
            fill: '#87cefa',
            delay: 4
        }
    )
    .to(
        '#sea_sky',
        16,
        {
            fill: '#264a80',
            delay: 36
        }
    )
    .to(
        '#sea_sky',
        10,
        {
            fill: '#d7e8fd',
            delay: 4
        }
    );

    duskTimeline.to(
        '#sea_dusk',
        16,
        {
            opacity: 0.4,
            delay: 50
        }
    )
    .to(
        '#sea_dusk',
        10,
        {
            opacity: 0,
            delay: 4
        }
    );

    umbrellaArmTimeline.to(
        '#sea_umbrella',
        1,
        {
            rotation: -18,
            transformOrigin: '50%',
            delay: 1.6,
            ease: Power2.easeIn
        }
    )
    .to(
        '#sea_arm',
        0.6, 
        {
            y:300,
            yoyo:true
        }
    )
    .to(
        '#sea_umbrella',
        1,
        {
            rotation: 0,
            transformOrigin: '50%'
        }
    )
    .to(
        '#sea_arm',
        1,
        {
            y:400
        }
    );
}