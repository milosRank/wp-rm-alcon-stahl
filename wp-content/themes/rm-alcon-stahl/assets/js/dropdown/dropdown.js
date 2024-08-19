/**
 * This function is initing dropdowns
 * 
 * @param {String} firstLevelLinksClass  // Class of the first level links
 * 
 * @return {void}
 */
function initDropdown(firstLevelLinksClass) {

    var header = document.querySelector("header");
    var firstLevelLinksParent = header.querySelector(firstLevelLinksClass);
    var secondLevelLinksClass = firstLevelLinksClass + " > li > ul";

    // List of all first level links
    var firstLevelLinks = header.querySelectorAll(firstLevelLinksClass + "> li");

    /**
     * This function is appending buttons to dropdown parents
     * 
     * @param {String} links // The list of links that are candidates to be a dropdown parent
     * 
     * @return {void}
     */
    function addDropdownButtons(links) {
        
        var button = document.createElement("button"); // Button that will be added to all dropdown parent
        button.classList.add("dropdown-button"); // Append class to button

        // Inner button content
        var buttonInner = `<svg width="10" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 5.46666L0 1.46666L0.933333 0.533325L4 3.59999L7.06667 0.533325L8 1.46666L4 5.46666Z" fill="#282828" />
                            </svg>`;

        button.innerHTML = buttonInner; // Add content to the button 

        links.forEach(parent => {

            // If the element has not ul element inside of it, return. In other case,the element becomes dropdown parent
            if(!!parent.querySelector(":scope > ul") == false) return;

            // This if statement provide that only first level will get a dropdown-parent class
            if(parent.parentElement == firstLevelLinksParent) parent.classList.add("dropdown-parent");

            // Append button after parentLink
            let parentLink = parent.querySelector(":scope > a");
            parentLink.outerHTML += button.outerHTML;


            // Recursive function
            addDropdownButtons(parent.querySelectorAll(":scope > ul > li"));

        });

    }

    /**
     * This function is toggling dropdowns on click
     * 
     * @param {String} levelLinkClass // Class of the links parents
     * 
     * @return {void}
     */
    function toggleDropdown(levelLinkClass) {

        // Header
        var header = document.querySelector("header");

        //Array of buttons parents
        var buttonsArrayParents = header.querySelectorAll(levelLinkClass + " > li");

        // Array of first level button
        var buttonsArray = header.querySelectorAll(levelLinkClass + " > li > button");

        var parentTogglers = header.querySelectorAll(levelLinkClass + " > li.open-dropdown");

        // Handle button click
        // Go trought array of buttons and add them click event listener
        buttonsArray.forEach(button => {

            button.addEventListener("click", (e) => {

                // Stop further event propagation
                e.stopPropagation();

                // Parent of the current button in foreach loop
                var currentButtonParent = e.currentTarget.parentElement;

                // Go throught all parents
                buttonsArrayParents.forEach(buttonParent => {

                    // If the parent is equal to the parent of the clicked button, show it
                    if(currentButtonParent == buttonParent)
                    {
                        if(!!buttonParent.querySelector("ul")) // If button parent contains submenu
                        {
                            currentButtonParent.querySelector("ul").classList.toggle("active"); // Toggle submenu
                            e.currentTarget.classList.toggle("active"); // Toggle arrow
                        }
                    }
                    else
                    {
                        if(!!buttonParent.querySelector("ul")) // If button parent contains submenu
                        {
                            buttonParent.querySelector("ul").classList.remove("active"); // Deactivate submenu
                            buttonParent.querySelector(":scope > .dropdown-button").classList.remove("active"); // Deactivate arrow
                        }
                    }

                });

            });

        });


        // Handle link click
        // Go trought array of links(dropdown parents) and add them click event listener
        parentTogglers.forEach(toggler => {
                
            toggler.addEventListener("click", (e) => {

                // If clicked element contains open dropdown class\
                // or if clicked element is direct child of .parent-dropdown element and is a tag
                if(e.target.classList.contains("open-dropdown") || e.target == e.currentTarget.querySelector(":scope > a"))
                {
                    // Stop further event propagation
                    e.stopPropagation();

                    // Prevent default behaviour on link click
                    e.preventDefault();

                    // Parent of the current button in foreach loop
                    var currentButtonParent = e.currentTarget;

                    // Go throught all parents
                    buttonsArrayParents.forEach(buttonParent => {

                        // If the parent is equal to the parent of the clicked button, show it
                        if(currentButtonParent == buttonParent)
                        {
                            if(!!buttonParent.querySelector("ul")) // If button parent contains submenu
                            {
                                currentButtonParent.querySelector("ul").classList.toggle("active"); // Toggle submenu
                                e.currentTarget.querySelector(":scope > .dropdown-button").classList.toggle("active"); // Toggle arrow
                            }
                        }
                        else
                        {
                            if(!!buttonParent.querySelector("ul")) // If button parent contains submenu
                            {
                                buttonParent.querySelector("ul").classList.remove("active"); // Deactivate submenu
                                buttonParent.querySelector(":scope > .dropdown-button").classList.remove("active"); // Deactivate arrow
                            }
                        }

                    });

                }

            },false);

        });



        // Hide dropdowns on click away
        document.addEventListener("click", (e) => {

            // Dropdown buttons
            var dropdownButtons = document.querySelectorAll(".dropdown-button");

            // If user click otutside of the header, shut down dropdown
            if(e.target.closest(".header") == null)
            {
                buttonsArray.forEach(button => {
                    
                    // Go throught all parents
                    buttonsArrayParents.forEach(buttonParent => {
                        if(!!buttonParent.querySelector("ul")) buttonParent.querySelector("ul").classList.remove("active");
                    });
                });

                dropdownButtons.forEach(button => {
                    button.classList.remove("active");
                });

            }

        });

    }

    // Add dropdown function call - for other levels of dropdown recursive function takes care
    addDropdownButtons(firstLevelLinks);

    // Toggle dropdown function call - first level
    toggleDropdown(firstLevelLinksClass);

    // Toggle dropdown function call - second level
    toggleDropdown(secondLevelLinksClass);

}