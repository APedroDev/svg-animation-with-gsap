import { Linear, Power3, TweenMax, Expo, Power4, Power2 } from "../node_modules/gsap/gsap-core.js";
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
            case ('sea'):
                return {
                    func: animateSea,
                    title: 'Sandy chills'
                }
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
    });

    function animateSea() {

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

    animateLab();
    animateSea();
    
});