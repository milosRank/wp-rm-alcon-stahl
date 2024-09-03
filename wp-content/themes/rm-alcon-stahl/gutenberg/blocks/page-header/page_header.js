// Import WordPress blocks library
const { registerBlockType } = wp.blocks;

// Import localization library
const { __ } = wp.i18n;

// Import WordPress editor controls
const { InspectorControls, RichText, MediaUpload } = wp.blockEditor;

// Import WordPress Components
const { PanelBody, SelectControl, ToggleControl, IconButton } = wp.components;

// Get custom attributes
const customAttributes = custom_attributes;

const domain = customAttributes.domain;

// Import Spacing Component
import { BlockSpacingAttributes } from "../../components/spacings";
import renderSpacingOptions from "../../components/spacings";
import SPACING_OPTIONS from "../../components/spacings/options";
import { getSpacingValues } from "../../components/global-functions/functions";

// Import Background Color Component
import { BackgroundColorComponent } from "../../components/background-color/bundle";
const { BlockBackgroundColor, renderBackgroundOptions, BACKGROUND_OPTIONS } = BackgroundColorComponent;

registerBlockType(`${customAttributes.domain}/${customAttributes.name}`, {
    title: customAttributes.title,
    description: customAttributes.description,
    icon: customAttributes.icon,
    category: customAttributes.category,
    attributes: {
        BlockTitleTag: {
            type: 'string',
            default: 'h2',
        },
        BlockTitle: {
            type: 'string',
            source: 'html',
            selector: '.rich-block-title',
        },
        BlockSubtitle: {
            type: 'string',
            source: 'html',
            selector: '.rich-block-subtitle',
        },
        BlockBackgroundColor, // Imported as a component
        BlockContainerWidth: {
            type: 'string',
            default: 'wide',
        },
        BlockBackgroundImage: {
            type: 'object',
            default: null,
        },
        BlockCtaToggle: {
            type: 'boolean',
            default: false,
        },
        BlockCtaLabel: {
            type: 'text',
        },
        BlockCtaUrl: {
            type: 'string',
        },
        BlockCtaTarget: {
            type: 'string',
            default: '_self',
        },
        BlockCtaRel: {
            type: 'string',
            default: null,
        },
        BlockCtaCustomClass: {
            type: 'string',
            default: '',
        },
        BlockCtaClass: {
            type: 'string',
            default: 'button button--primary',
        },
        ...BlockSpacingAttributes
    },

    /**
     * Edit custom block
     * 
     * @param {object} attributes
     * @param {method} setAttributes
     * 
     * @return {mixed}
     */
    edit: props => {

        const { attributes, setAttributes } = props;

        // Set attributes
        const {
            BlockContainerWidth,
            BlockBackgroundColor,
            BlockTitleTag,
            BlockTitle,
            BlockSubtitle,
            BlockBackgroundImage,
            BlockCtaToggle,
            BlockCtaLabel,
            BlockCtaUrl,
            BlockCtaTarget,
            BlockCtaRel,
            BlockCtaCustomClass,
            BlockCtaClass,
            ...BlockSpacingAttributes

        } = attributes;

        /* General */

        /**
         * Save BlockContainerWidth attribute
         *
         * @param {string}  newBlockContainerWidth
        * 
        * @return {void}
        */
        const onSelectBlockContainerWidth = newBlockContainerWidth => {

            setAttributes({ BlockContainerWidth: newBlockContainerWidth });

        }


        /* Title */

        /**
         * Save BlockTitleTag attribute
         * 
         * @param {string} newBlockTitleTag
         * 
         * @return {void} 
         */
        const onSelectBlockTitleTag = newBlockTitleTag => {

            setAttributes({ BlockTitleTag: newBlockTitleTag });

        }

        /**
        * Save BlockTitle attribute
        * 
        * @param {string} newBlockTitle
        * 
        * @return {void}
        */
        const onChangeBlockTitle = newBlockTitle => {

            // Check is only empty markup generated by RichText control
            if (newBlockTitle == '<p></p>') {
                setAttributes({ BlockTitle: null });
            }
            else {
                setAttributes({ BlockTitle: newBlockTitle });
            }
        }

        /**
         * Save BlockSubtitle attribute
         * 
         * @param {string} newBlockSubtitle
         * 
         * @return {void}
         */
        const onChangeBlockSubtitle = newBlockSubtitle => {

            // Check is only empty markup generated by RichText control
            if (newBlockSubtitle == '<p></p>') {
                setAttributes({ BlockSubtitle: null });
            }
            else {
                setAttributes({ BlockSubtitle: newBlockSubtitle });
            }

        }

        /* Media */

        /**
         * Save BlockBackgroundImage attribute
         * 
         * @param {object} newBlockBackgroundImage
         * 
         * @return {void} 
         */
        const onSelectBlockBackgroundImage = newBlockBackgroundImage => {

            setAttributes({ BlockBackgroundImage: newBlockBackgroundImage });

        }

        /**
         * Create BlockBackgroundImage preview
         * 
         * @param {object} BlockBackgroundImage
         * 
         * @return {mixed}
         */
        const BlockBackgroundImagePreview = (BlockBackgroundImage) => {

            if (BlockBackgroundImage) {
                return (
                    <div className="custom-block-main-image-preview">
                        <img src={BlockBackgroundImage.url} />
                    </div>
                )
            }

            return null;

        }

        /**
         * Create button for deleting BlockBackgroundImage attribute
         * 
         * @param {object} BlockBackgroundImage
         * 
         * @return {mixed}
         */
        const ButtonRemoveBlockBackgroundImage = (BlockBackgroundImage) => {

            if (BlockBackgroundImage) {
                return (
                    <IconButton onClick={onClickRemoveBlockBackgroundImage} icon="dismiss"
                        className="editor-media-placeholder__button is-button is-default is-large">
                        {__('Remove Block Image', domain)}
                    </IconButton>
                );
            }

            return null;
        }

        /**
         * Delete Image attribute
         * 
         * @return {void} 
         */
        const onClickRemoveBlockBackgroundImage = () => {

            setAttributes({ BlockBackgroundImage: null });

        }

        /* Navigation */

        /**
         * Save BlockCtaLabel attribute
         * 
         * @param {object} event
         * 
         * @return {void}
         */
        const onChangeBlockCtaLabel = event => {

            setAttributes({ BlockCtaLabel: event.target.value });

        }

        /**
         * Save BlockCtaUrl attribute
         * 
         * @param {object} event
         * 
         * @return {void}
         */
        const onChangeBlockCtaUrl = event => {

            setAttributes({ BlockCtaUrl: event.target.value });

        }

        /**
         * Save BlockCtaTarget attribute
         * 
         * @param {string}  BlockCtaTarget
         * 
         * @return {void}
         */
        const onSelectBlockCtaTarget = newBlockCtaTarget => {

            if (BlockCtaTarget === '_blank') {
                setAttributes({ BlockCtaRel: 'noopener noreferrer' });
            }

            setAttributes({ BlockCtaTarget: newBlockCtaTarget })

        }

        /**
         * Save BlockCtaCustomClass attribute
         * 
         * @param {object}
         * 
         * @return {void}
         */
        const onChangeBlockCtaCustomClass = event => {

            setAttributes({ BlockCtaCustomClass: event.target.value });

        }

        /**
         * Save BlockCtaClass attribute
         * 
         * @param {string} newBlockCtaClass
         * 
         * @return {void}
         */
        const onSelectBlockCtaClass = newBlockCtaClass => {

            setAttributes({ BlockCtaClass: newBlockCtaClass });

        }

        return ([

            <InspectorControls style={{ marginBottom: '40px' }}>

                <PanelBody title={__('Heading Settings', domain)} initialOpen={false}>

                    <div className="tr-settings-box">

                        <SelectControl label={__('Heading tag', domain)} value={BlockTitleTag}
                            options={[
                                { label: __('h1', domain), value: 'h1' },
                                { label: __('h2', domain), value: 'h2' },
                                { label: __('h3', domain), value: 'h3' },
                                { label: __('h4', domain), value: 'h4' },
                                { label: __('h5', domain), value: 'h5' },
                                { label: __('h6', domain), value: 'h6' },
                            ]}
                            onChange={onSelectBlockTitleTag}
                        />

                    </div>

                </PanelBody>

                <PanelBody title={__('Layout Settings', domain)} initialOpen={false}>

                    <div className="tr-settings-box">

                        <SelectControl label={__('Chose layout width', domain)} value={BlockContainerWidth}
                            options={[
                                { label: __('Wide', domain), value: 'container-wide' },
                                { label: __('Narrow', domain), value: 'container-narrow' },
                                { label: __('Medium Narrow', domain), value: 'container-medium-narrow' },
                                { label: __('Extra Narrow', domain), value: 'container-extra-narrow' },
                            ]}
                            onChange={onSelectBlockContainerWidth}
                        />

                    </div>

                </PanelBody>

                <PanelBody title={__('Media', domain)} initialOpen={false} >

                    <div className="tr-media-upload-box" style={{ marginBottom: '40px' }} >
                        <MediaUpload
                            onSelect={onSelectBlockBackgroundImage}
                            type="image"
                            value={BlockBackgroundImage}
                            render={({ open }) => (

                                <IconButton onClick={open} icon="upload"
                                    className="editor-media-placeholder__button is-button is-default is-large"
                                >
                                    {__('Decoration Image', domain)}
                                </IconButton>

                            )}
                        />

                        {BlockBackgroundImagePreview(BlockBackgroundImage, BlockBackgroundImage)}

                        {ButtonRemoveBlockBackgroundImage(BlockBackgroundImage)}

                    </div>
                </PanelBody>

                <PanelBody title={__('Navigation settings', domain)} initialOpen={false}>

                    <div className="tr-settings-box">

                        <ToggleControl
                            label={__('Show CTA button', domain)}
                            checked={BlockCtaToggle}
                            onChange={() => setAttributes({ BlockCtaToggle: !BlockCtaToggle })}
                        />

                    </div>

                    <div className="tr-settings-box">

                        <p><strong>{__('Set Label', domain)}</strong></p>

                        <input value={BlockCtaLabel} type="text" onChange={onChangeBlockCtaLabel} />

                    </div>

                    <div className="tr-settings-box">

                        <p><strong>{__('Set URL', domain)}</strong></p>

                        <input value={BlockCtaUrl} type="text" onChange={onChangeBlockCtaUrl} />

                    </div>

                    <div className="tr-settings-box">

                        <SelectControl label={__('Open in new window', domain)} value={BlockCtaTarget}
                            options={[
                                { label: 'No', value: '_self' },
                                { label: 'Yes', value: '_blank' },
                            ]}
                            onChange={onSelectBlockCtaTarget}
                        />

                    </div>

                    <div className="tr-settings-box">

                        <p><strong>{__('Set Custom Class', domain)}</strong></p>

                        <input value={BlockCtaCustomClass} type="text" onChange={onChangeBlockCtaCustomClass} />

                    </div>

                    <div className="tr-settings-box">

                        <SelectControl label={__('Set Style', domain)} value={BlockCtaClass}
                            options={[
                                { label: 'Primary', value: 'button button--primary' },
                                { label: 'Secondary', value: 'button button--secondary' },
                            ]}
                            onChange={onSelectBlockCtaClass}
                        />

                    </div>

                </PanelBody>

                {renderSpacingOptions(props, domain, SPACING_OPTIONS)}

                {renderBackgroundOptions(props, domain, BACKGROUND_OPTIONS)}

            </InspectorControls>,

            <div className="admin-control-box">

                <div className="admin-block-title">{__(customAttributes.title, domain)}</div>

                <div className="admin-block-description">

                    <label> {__(customAttributes.description, domain)} </label>

                </div>

                <div className="tr-form-row">

                    <label>{__('Title', domain)}:</label>

                    <RichText
                        key="editable"
                        tagName={BlockTitleTag}
                        className="rich-block-title"
                        placeholder={__('Insert title', domain)}
                        format="string"
                        allowedFormats={[]}
                        value={BlockTitle}
                        onChange={onChangeBlockTitle}
                    />

                </div>

                <div className="tr-form-row">

                    <label>{__('Subtitle', domain)}:</label>

                    <RichText
                        key="editable"
                        tagName="h4"
                        className="rich-block-subtitle"
                        placeholder={__('Insert Subtitle', domain)}
                        format="string"
                        value={BlockSubtitle}
                        onChange={onChangeBlockSubtitle}
                    />

                </div>

            </div>

        ]);
    },

    /**
     * Save custom block
     * 
     * @param {object} attribute
     * 
     * @return {mixed}
     */
    save: ({ attributes }) => {

        const {
            BlockContainerWidth,
            BlockBackgroundColor,
            BlockTitleTag,
            BlockTitle,
            BlockSubtitle,
            BlockBackgroundImage,
            BlockCtaToggle,
            BlockCtaLabel,
            BlockCtaUrl,
            BlockCtaTarget,
            BlockCtaRel,
            BlockCtaCustomClass,
            BlockCtaClass,
            ...BlockSpacingAttributes
        } = attributes;

        return (
        <>
            <section className={`page-header ${BlockBackgroundColor} ${getSpacingValues(BlockSpacingAttributes)}`}>

                {(BlockBackgroundImage != null) &&
                    <img className="bg-image" src={BlockBackgroundImage.url} alt={BlockBackgroundImage.alt} width={BlockBackgroundImage.sizes.full.width} height={BlockBackgroundImage.sizes.full.height} />
                }
                <div className="container-fluid">
                    <div className="wrapper">
                        <div className={`container ${BlockContainerWidth}`}>

                            <div className="page-header__inner">

                                {(BlockTitle != null && BlockTitle.length > 0) &&

                                    <div className="title">
                                        <RichText.Content
                                            tagName={BlockTitleTag}
                                            className="rich-block-title"
                                            format="string"
                                            value={BlockTitle}
                                        />
                                    </div>
                                }

                                {(BlockSubtitle != null && BlockSubtitle.length > 0) &&
                                    <div className="subtitle">
                                        <RichText.Content
                                            tagName="span"
                                            className="rich-block-subtitle"
                                            format="string"
                                            value={BlockSubtitle}
                                        />
                                    </div>
                                }

                            </div>

                            {(BlockCtaToggle) &&

                                <>
                                    {((BlockCtaUrl != null && BlockCtaUrl.length > 0) && (BlockCtaLabel != null && BlockCtaLabel.length > 0)) &&
                                        <div className={`cta-wrapper`}>

                                            <a href={BlockCtaUrl}
                                                target={BlockCtaTarget}
                                                rel="noopener noreferrer"
                                                className={`${BlockCtaClass} ${BlockCtaCustomClass}`}
                                            >
                                                <span>{BlockCtaLabel}</span>
                                            </a>

                                        </div>
                                    }
                                </>

                            }

                        </div>
                    </div>
                </div>
            </section>
        </>
        )
    },
});