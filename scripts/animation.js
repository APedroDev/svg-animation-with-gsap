import {
    SIDEBAR, 
    SHOWCODEBTNS,
    SIDEBAR_GETBACK
} from './constants.js';

import {
    setSidebar,
    fillSidebarText
} from './components/Sidebar/setSidebar.js';

//Importing Animation Functions
import animateSea from './animations/seaAnimation.js';
import animateLab from './animations/airBalloonAnimation.js';
import animateSpace from './animations/spaceAnimation.js';

document.addEventListener('DOMContentLoaded', function domLoaded() {

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

    animateLab();
    animateSea();
    animateSpace();
    
});