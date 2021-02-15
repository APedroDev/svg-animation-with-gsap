import { Linear, Power3, TweenMax, Expo, Power4 } from "../node_modules/gsap/gsap-core.js";
import {gsap} from "../node_modules/gsap/index.js";
import {
    SIDEBAR, 
    SHOWCODEBTNS,
    SIDEBAR_GETBACK
} from './constants.js';
import setSidebar from './components/Sidebar/setSidebar.js';

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

    function animateLab() {

        const labCloudsSvg = document.querySelector('#lab_clouds');
        const labAirBalloonSvg = document.querySelector('#lab_hot-air-balloon');
        const labWindSvg = document.querySelector('#lab_wind');

        let labCloudsAnimation = TweenMax.fromTo(
            labCloudsSvg,
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
            labAirBalloonSvg,
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
    
        TweenMax.set(labWindSvg, {
            strokeDasharray: labWindSvg.getTotalLength()
        });

        let labWindAnimation = TweenMax.fromTo(
            labWindSvg,
            1.5,
            {
                strokeDashoffset: labWindSvg.getTotalLength(),
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

    function fillSidebarText(parentClassList) {

        let parentClassListArr = Array.from(parentClassList);

        switch (parentClassListArr[1]) {
            case ('lab'):
                return {
                    func: animateLab,
                    title: 'Let\'s fly away'
                };
                break;
            default:
                return 'function() {}';
        }
    }

    SHOWCODEBTNS.forEach(function addListener(btn) {
        btn.addEventListener('click', function toggleModal() {

            let sidebarCodeText = fillSidebarText(btn.parentElement.classList).func;
            let sidebarTitle = fillSidebarText(btn.parentElement.classList).title;

            setSidebar('on',sidebarCodeText,sidebarTitle);

        });
    });

    SIDEBAR_GETBACK.addEventListener('click', function closeSidebar() {
        setSidebar('off');
    })

    animateLab();
    
});