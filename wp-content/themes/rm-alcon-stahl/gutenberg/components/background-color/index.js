// WordPress dependencies
const {
    PanelBody,
    SelectControl,
} = wp.components;

// Import localization library
const { __ } = wp.i18n;

// Internal dependencies
import BlockBackgroundColor from "./attributes";

/**
 * Render Spacing Options Component
 * 
 * @param {Object} props - Block props Object
 * @param {String} domain - Block domain
 * @param {Array} backgroundOptions - Array of predefined background color options
 * 
 * @returns {ReactComponent} - Spacing Options React Component
 */
function renderBackgroundOptions(props, domain, backgroundOptions) {

    // Destructure props object to reach setAttributes function
    const { setAttributes } = props;

    // Destructure all spacing attributes
    let {
        BlockBackgroundColor
    } = props.attributes;

    return <>

        <PanelBody title={ __('Background settings') } initialOpen={ false }>

            <div className="tr-settings-box">

                <SelectControl label={ __( 'Chose background', domain ) } value={ BlockBackgroundColor }
                    options={ backgroundOptions }
                    onChange={ (value) => setAttributes({ BlockBackgroundColor: value }) }
                />

            </div>

        </PanelBody>
    </>
}




// Export for ease of importing in individual blocks.
export { BlockBackgroundColor };
export default renderBackgroundOptions;