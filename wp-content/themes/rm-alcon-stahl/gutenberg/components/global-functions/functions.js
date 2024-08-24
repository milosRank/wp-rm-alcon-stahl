/**
 * Get object values
 * 
 * @param {Object} object - Object which values will be returned
 * 
 * @returns {Array} - Array of all object values
 */
const getObjectValues = (object) => Object.values(object).map(item => item).join(' ');


/**
 * Get spacing object values
 * 
 * @param {Object} object - Get Spacing values from object
 * 
 * @returns {Array} - Array of all spacing values extracted from the object
 */
const getSpacingValues = (object) => {

    // Fields to keep from original object
    const fieldsToKeep = [
        "BlockMarginBottomDesktop",
        "BlockMarginBottomMobile",
        "BlockMarginBottomTablet",
        "BlockMarginTopDesktop",
        "BlockMarginTopMobile",
        "BlockMarginTopTablet",
        "BlockPaddingBottomDesktop",
        "BlockPaddingBottomMobile",
        "BlockPaddingBottomTablet",
        "BlockPaddingTopDesktop",
        "BlockPaddingTopMobile",
        "BlockPaddingTopTablet"
    ];

    // Reduce the original object to a new object containing only the specified fields
    const spacingObject = fieldsToKeep.reduce((filteredObj, key) => {

        if (object.hasOwnProperty(key)) filteredObj[key] = object[key];
        return filteredObj;

    }, {});

    return getObjectValues(spacingObject);

}


/**
 * Get Content Of All Inner Blocks inside Single Block
 * 
 * @param {String} clientID - ID of Block in which inner blocks are
 * 
 * @return {String} - Inner Blocks Content
 */
function getInnerBlocksContent(clientID) {

    // Inner Blocks Content
    let innerBlocksContent;

    // Import WordPress functions
    const { useSelect } = wp.data;

    // Get ALL Inner Blocks
    const innerBlocks = useSelect((select) => {
        const { getBlocks } = select('core/block-editor');
        return getBlocks(clientID);
    },
    [clientID]);

    // Get content of all inner blocks
    innerBlocks.forEach(block => innerBlocksContent += block.attributes.content);

    return innerBlocksContent;

} 


export { getObjectValues, getSpacingValues, getInnerBlocksContent };