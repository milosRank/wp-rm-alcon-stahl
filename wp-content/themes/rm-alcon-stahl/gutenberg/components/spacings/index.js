// WordPress dependencies
const {
    PanelBody,
    TabPanel,
    SelectControl,
} = wp.components;

// Import localization library
const { __ } = wp.i18n;

// Internal dependencies
import BlockSpacingAttributes from "./attributes";

/**
 * Render Spacing Options Component
 * 
 * @param {Object} props - Block props Object
 * @param {String} domain - Block domain
 * @param {Array} spacingOptions - Array of predefined spacing options
 * 
 * @returns {ReactComponent} - Spacing Options React Component
 */
function renderSpacingOptions(props, domain, spacingOptions) {

    // Destructure props object to reach setAttributes function
    const { setAttributes } = props;

    // Destructure all spacing attributes
    let {
        BlockMarginTopMobile,
        BlockMarginTopTablet,
        BlockMarginTopDesktop,
        BlockMarginBottomMobile,
        BlockMarginBottomTablet,
        BlockMarginBottomDesktop,
        BlockPaddingTopMobile,
        BlockPaddingTopTablet,
        BlockPaddingTopDesktop,
        BlockPaddingBottomMobile,
        BlockPaddingBottomTablet,
        BlockPaddingBottomDesktop,
    } = props.attributes;


    /**
     * Construct options for <SelectControl> react components
     * 
     * @param {Array} values - Array of values that will be passed to SelectControl Component
     * @param {String} property - Property that will be used to construct values
     * @param {String} device  - Property that will be used to construct values
     * 
     * @returns {Array} - Array of select options
     */
    function constructSelectOptions(values, property, device) {

        // Initial value - will be always present as one of the options
        const options = [{ label: '--', value: '' }];

        // Fill array of values
        values.forEach(value => options.push({label: value, value: `${property}-${value}--${device}`}));

        return options;

    }

    return <>

        <PanelBody title={ __( 'Spacing Settings', domain ) } initialOpen={ false }>

            <div className="tr-settings-box">

                <TabPanel
                    className="spacing-tab-panel"
                    activeClass="active-tab"
                    tabs={ [
                        {
                            name: 'mobile-spacing',
                            title: 'Mobile',
                            className: 'tab-one',
                        },
                        {
                            name: 'tablet-spacing',
                            title: 'Tablet',
                            className: 'tab-two',
                        },
                        {
                            name: 'desktop-spacing',
                            title: 'Desktop',
                            className: 'tab-three',
                        },
                    ] }
                >
                    { ( tab ) => {

                        var elementToDisplay;

                        switch(tab.name) {

                            case "mobile-spacing" :

                                elementToDisplay = 
                                <>

                                    <div className="tr-settings-box">

                                        <p><strong>{ __( 'Margin', domain ) }</strong></p>

                                        <SelectControl label={ __( 'Top', domain ) } value={ BlockMarginTopMobile }
                                            options={ constructSelectOptions(spacingOptions.mobile, "margin-top", "mobile") }
                                            onChange={ (value) => setAttributes({ BlockMarginTopMobile: value }) }
                                        />

                                        <SelectControl label={ __( 'Bottom', domain ) } value={ BlockMarginBottomMobile }
                                            options={ constructSelectOptions(spacingOptions.mobile, "margin-bottom", "mobile") }
                                            onChange={ (value) => setAttributes({ BlockMarginBottomMobile: value }) }
                                        />

                                    </div>

                                    <div className="tr-settings-box">

                                        <p><strong>{ __( 'Padding', domain ) }</strong></p>

                                        <SelectControl label={ __( 'Top', domain ) } value={ BlockPaddingTopMobile }
                                            options={ constructSelectOptions(spacingOptions.mobile, "padding-top", "mobile") }
                                            onChange={ (value) => setAttributes({ BlockPaddingTopMobile: value }) }
                                        />

                                        <SelectControl label={ __( 'Bottom', domain ) } value={ BlockPaddingBottomMobile }
                                            options={ constructSelectOptions(spacingOptions.mobile, "padding-bottom", "mobile") }
                                            onChange={ (value) => setAttributes({ BlockPaddingBottomMobile: value }) }
                                        />

                                    </div>

                                </>

                            break;

                            case "tablet-spacing" :

                                elementToDisplay = 
                                <>

                                    <div className="tr-settings-box">

                                        <p><strong>{ __( 'Margin', domain ) }</strong></p>

                                        <SelectControl label={ __( 'Top', domain ) } value={ BlockMarginTopTablet }
                                            options={ constructSelectOptions(spacingOptions.tablet, "margin-top", "tablet") }
                                            onChange={ (value) => setAttributes({ BlockMarginTopTablet: value }) }
                                        />

                                        <SelectControl label={ __( 'Bottom', domain ) } value={ BlockMarginBottomTablet }
                                            options={ constructSelectOptions(spacingOptions.tablet, "margin-bottom", "tablet") }
                                            onChange={ (value) => setAttributes({ BlockMarginBottomTablet: value }) }
                                        />

                                    </div>

                                    <div className="tr-settings-box">

                                        <p><strong>{ __( 'Padding', domain ) }</strong></p>

                                        <SelectControl label={ __( 'Top', domain ) } value={ BlockPaddingTopTablet }
                                            options={ constructSelectOptions(spacingOptions.tablet, "padding-top", "tablet") }
                                            onChange={ (value) => setAttributes({ BlockPaddingTopTablet: value }) }
                                        />

                                        <SelectControl label={ __( 'Bottom', domain ) } value={ BlockPaddingBottomTablet }
                                            options={ constructSelectOptions(spacingOptions.tablet, "padding-bottom", "tablet") }
                                            onChange={ (value) => setAttributes({ BlockPaddingBottomTablet: value }) }
                                        />

                                    </div>

                                </>

                            break;

                            case "desktop-spacing" :

                                elementToDisplay = 
                                <>
                                    <div className="tr-settings-box">

                                        <p><strong>{ __( 'Margin', domain ) }</strong></p>

                                        <SelectControl label={ __( 'Top', domain ) } value={ BlockMarginTopDesktop }
                                            options={ constructSelectOptions(spacingOptions.desktop, "margin-top", "desktop") }
                                            onChange={ (value) => setAttributes({ BlockMarginTopDesktop: value }) }
                                        />

                                        <SelectControl label={ __( 'Bottom', domain ) } value={ BlockMarginBottomDesktop }
                                            options={ constructSelectOptions(spacingOptions.desktop, "margin-bottom", "desktop") }
                                            onChange={ (value) => setAttributes({ BlockMarginBottomDesktop: value }) }
                                        />

                                    </div>

                                    <div className="tr-settings-box">

                                        <p><strong>{ __( 'Padding', domain ) }</strong></p>

                                        <SelectControl label={ __( 'Top', domain ) } value={ BlockPaddingTopDesktop }
                                            options={ constructSelectOptions(spacingOptions.desktop, "padding-top", "desktop") }
                                            onChange={ (value) => setAttributes({ BlockPaddingTopDesktop: value }) }
                                        />

                                        <SelectControl label={ __( 'Bottom', domain ) } value={ BlockPaddingBottomDesktop }
                                            options={ constructSelectOptions(spacingOptions.desktop, "padding-bottom", "desktop") }
                                            onChange={ (value) => setAttributes({ BlockPaddingBottomDesktop: value }) }
                                        />

                                    </div>

                                </>

                            break;

                        }

                        return elementToDisplay;
                    }}

                </TabPanel>

            </div>

        </PanelBody>
    </>
}




// Export for ease of importing in individual blocks.
export { BlockSpacingAttributes };
export default renderSpacingOptions;