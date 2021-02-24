import { Linear, Power3, TweenMax, Expo, Power4, Power2, Tween } from "../../node_modules/gsap/gsap-core.js";
import {gsap} from "../../node_modules/gsap/index.js";

import {
    SPACE_EARTH,
    SPACE_STARS,
    SPACE_MOON
} from '../constants.js';

export default function animateSpace() {
    TweenMax.to(
        SPACE_MOON,
        50,
        {
            rotation: 360,
            repeat: -1,
            transformOrigin: '150px 150px',
            ease: Linear.easeNone
        }
    );

    TweenMax.to(
        SPACE_EARTH,
        50,
        {
            rotation: 360,
            repeat: -1,
            transformOrigin: '50%',
            ease: Linear.easeNone
        }
    );
}