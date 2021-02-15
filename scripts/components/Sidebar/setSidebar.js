import { 
    SIDEBAR,
    SIDEBAR_CODENODE,
    SIDEBAR_H1NODE
} from '../../constants.js';

function setSidebar(status, codeText, title) {

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

export default setSidebar;