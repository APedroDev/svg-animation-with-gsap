import { 
    SIDEBAR,
    SIDEBAR_CODENODE,
    SIDEBAR_H1NODE
} from '../../constants.js';

import animateLab from '../../animations/airBalloonAnimation.js';
import animateSea from '../../animations/seaAnimation.js';
import animateSpace from '../../animations/spaceAnimation.js';

export function fillSidebarText(parentClassList) {

    let parentClassListArr = Array.from(parentClassList);

    switch (parentClassListArr[1]) {
        case ('lab'):
            return {
                func: animateLab,
                title: 'Let\'s fly away'
            };
        case ('sea'):
            return {
                func: animateSea,
                title: 'Sandy chills'
            };
        case ('space'):
            return {
                func: animateSpace,
                title: 'Goin\' round'
            };
        default:
            return 'function() {}';
    }
}

export function setSidebar(status, codeText, title) {

    let currentStatus = status || 'off';
    let currentCodeText = codeText || 'Please press one of the "Show Code" buttons!';
    let currentTitle = title || 'Nothing to see here!';

    function toggleLogic() {

        if(currentStatus == 'on') {

            SIDEBAR.classList.remove('close');
            SIDEBAR.classList.add('open');

            SIDEBAR_CODENODE.textContent = currentCodeText;
            SIDEBAR_H1NODE.textContent = currentTitle;

        } else {

            SIDEBAR.classList.remove('open');
            SIDEBAR.classList.add('close');

        }
    }

    return toggleLogic();
}