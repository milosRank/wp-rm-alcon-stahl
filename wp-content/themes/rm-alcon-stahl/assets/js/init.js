// ==== This is init.js file. In this file all function initializations will be stored. ====



// ==== LOAD EVENT ====

window.addEventListener("load", () => {
    floatingHeader();
    initDropdown(".header__links-list");
    equalizeElementHeight(".elements-list.pumps .description",547);

});



// ==== SCROLL EVENT ====

document.addEventListener("scroll", function() {
    getScrollDirection();
    floatingHeader();
});



// ==== RESIZE EVENT ====

window.addEventListener("resize", function() {
    
    equalizeElementHeight(".elements-list.pumps .description",547);

    lockScreenDependingOnCondition(function () {

        // Lock screen
        if(isMobileMenuActive() && window.innerWidth <= 576) return true;

        // if(popup) {
        //     // Lock screen
        //     if(popup.classList.contains(ACTIVE_CLASS)) return true;
        // }

        // Unlock screen
        return false;
    });
    
});