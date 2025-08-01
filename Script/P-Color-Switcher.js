/*======== toggle color swicther========*/
document.addEventListener('DOMContentLoaded', (event) => {
    const colorSwitcherToggle = document.querySelector('.color-switcher-toggler');
    if (colorSwitcherToggle) {
        colorSwitcherToggle.addEventListener('click', () => {
            document.querySelector('.color-switcher').classList.toggle('open');
        });
    } else {
        console.error('Element with class .color-switcher-toggler not found.');
    }
});

/////----- hide style -switcher on scroll-----//////
window.addEventListener('scroll' , () =>{
    if(document.querySelector('.color-switcher').classList.contains('open'))
    {
        document.querySelector('.color-switcher').classList.remove('open');
    }
})


    function setActiveStyle(colorName) {
        const styleSheets = document.querySelectorAll('link.other-colors');
    
        styleSheets.forEach((sheet) => {
            if (sheet.getAttribute('title') === colorName) {
                sheet.removeAttribute('disabled');
            } else {
                sheet.setAttribute('disabled', 'true');
            }
        });
    }
    
    document.querySelectorAll('.color-1, .color-2, .color-3, .color-4, .color-5').forEach((span) => {
        span.addEventListener('click', function() {
            setActiveStyle(this.getAttribute('class'));
        });
    });
    