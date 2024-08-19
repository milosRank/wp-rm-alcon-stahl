// ==== This is global.js file. In this file some globla functions will be stored. ====




var lastScrollTop = 0; // Last scroll top offset (in pixels)
var scrollDirection; // Global variable that contains scroll direction as a string value ('downscroll'/'upscroll')
var rootElement = document.documentElement; // Root element

/**
 * Sets value of global variable scrollDirection
 * 
 * @return {Void}
 */
function getScrollDirection() {

    // Top offset of the page
    var topOffset = window.pageYOffset || document.documentElement.scrollTop;

    // Set direction of scroll on globaly aviailable scrollDirection variable
    scrollDirection = (topOffset > lastScrollTop ? "downscroll" : "upscroll");

    // For Mobile or negative scrolling
    lastScrollTop = topOffset <= 0 ? 0 : topOffset;
    
}

/**
 * This function is locking the screen (disable scrolling)
 * 
 * @return {Void}
 */
function lockScreen() { 
    var rootElement = document.querySelector("html"); 
    rootElement.style="overflow-y: hidden";
}



/**
 * This function is unlocking the screen (eneable scrolling)
 * 
 * @return {Void}
 */
function unlockScreen() { 
    var rootElement = document.querySelector("html"); 
    rootElement.style="overflow-y: scroll";
}



/**
 * This function is locking screen depending on if the condition of callback is fullfuled or not(if callback returns true = fullfiled, returns false = not fullfiled)
 * 
 * @param {Function} callback 
 * 
 * @return {Void}
 */
function lockScreenDependingOnCondition(callback) {
    var isConditionFullfilled = callback();
    isConditionFullfilled ? lockScreen() : unlockScreen();
}



/**
 * This function is providing smooth scroll
 * 
 * @return {Void}
 */
function redirectedSmoothScroll() {
    let hash = window.location.hash.substring(1); // Get ID of section where we need to scroll

    // Check if hash exists
    if (!!hash) {

        // Get link that triggers smooth scroll
        let scrollLink = document.querySelector(".header__links-list a[href*='#" + hash + "']");

        // If there is no scroll link, exit function
        if (!scrollLink || scrollLink.length <= 0) return;

        // Get top offset when scrolled
        let elementWhereToScroll = document.getElementById(hash);
        let offsetTop = elementWhereToScroll.offsetTop - 200;
        
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });

    }
}




/**
 * This method is equalizing elements heights and sets all heights to to biggest one among elements
 * 
 * @param {String} elementSelector // Selector of all elements which height will be equalized
 * @param {Int} breakpoint // Breakpoint on which min height will reset
 * @param {Boolean} breakpointOnMobile // Indicates if reset breakpoint is bigger or smaller of breakpoint
 * 
 * @return {Void}
 */
function equalizeElementHeight(elementSelector, breakpoint, breakpointOnMobile) {

    var currentWindowWidth = window.innerWidth; // Current window width

    let elements = document.querySelectorAll(elementSelector); // Elements which height will be resized

    if(!elements || elements.length <= 0) return; // If there is no elements to resize, exti function
    
    elements.forEach((element) => element.style.minHeight = "unset"); // Reset min height of all elements

    let maxHeight = 0; // Initial max height

    let elementsHeights = []; // Array of elements heights

    elements.forEach((element, i) => elementsHeights[i] = element.offsetHeight); // Fill elements heights array

    maxHeight = Math.max.apply(null, elementsHeights); // Biggest elements height
    
    elements.forEach((element) => element.style.minHeight = maxHeight + "px"); // Set height of all elements to the bigges one

    if(!!breakpoint == false) return; // If there is no need to reset min height on certain breakpoint, exit function

    let breakpointCondition; // Indicates will condition behave as min or max width media query

    // Set condition
    if(breakpointOnMobile && breakpointOnMobile === true)
    {
        breakpointCondition = currentWindowWidth >= breakpoint;
    }
    else
    {
        breakpointCondition = currentWindowWidth <= breakpoint;
    }

    if(breakpointCondition) elements.forEach((element) => element.style.minHeight = 0); // Reset min height on desired breakpoint
}