// Import WordPress blocks library
const { registerBlockType } = wp.blocks;

// Import localization library
const { __ } = wp.i18n;

// Import WordPress editor controls
const { InspectorControls, RichText, InnerBlocks, MediaUpload } = wp.blockEditor;

// Import WordPress Components
const { PanelBody, SelectControl, ToggleControl, IconButton } = wp.components;

// Define Allowed Blocks
const ALLOWED_BLOCKS = ['core/freeform'];

// Get custom attributes
const customAttributes = custom_attributes;

// Define template for nested blocks
const TEMPLATE = [
    [
        'core/freeform',
        {
            fontSize: '1.25em',
            placeholder: 'Insert content.'
        }
    ]
];

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
        BlockDecorationImage: {
            type: 'object',
            default: null,
        },
        BlockContentAligment: {
            type: 'string',
            default: ''
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
        BlockCtaAligment: {
            type: 'string',
            default: ' text-left',
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
            BlockDecorationImage,
            BlockContentAligment,
            BlockCtaToggle,
            BlockCtaLabel,
            BlockCtaUrl,
            BlockCtaTarget,
            BlockCtaRel,
            BlockCtaCustomClass,
            BlockCtaClass,
            BlockCtaAligment,
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
         * Save BlockDecorationImage attribute
         * 
         * @param {object} newBlockDecorationImage
         * 
         * @return {void} 
         */
        const onSelectBlockDecorationImage = newBlockDecorationImage => {

            setAttributes({ BlockDecorationImage: newBlockDecorationImage });

        }

        /**
         * Create BlockDecorationImage preview
         * 
         * @param {object} BlockDecorationImage
         * 
         * @return {mixed}
         */
        const BlockDecorationImagePreview = (BlockDecorationImage) => {

            if (BlockDecorationImage) {
                return (
                    <div className="custom-block-main-image-preview">
                        <img src={BlockDecorationImage.url} />
                    </div>
                )
            }

            return null;

        }

        /**
         * Create button for deleting BlockDecorationImage attribute
         * 
         * @param {object} BlockDecorationImage
         * 
         * @return {mixed}
         */
        const ButtonRemoveBlockDecorationImage = (BlockDecorationImage) => {

            if (BlockDecorationImage) {
                return (
                    <IconButton onClick={onClickRemoveBlockDecorationImage} icon="dismiss"
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
        const onClickRemoveBlockDecorationImage = () => {

            setAttributes({ BlockDecorationImage: null });

        }

        /* Aligment */

        /**
         * Save BlockContentAligment attribute
         * 
         * @param {string} newBlockContentAligment
         * 
         * @return {void} 
         */
        const onSelectBlockContentAligment = newBlockContentAligment => {

            setAttributes({ BlockContentAligment: newBlockContentAligment });

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

        /**
         * Save BlockCtaAligment attribute
         * 
         * @param {string} newBlockCtaAligment
         * 
         * @return {void} 
         */
        const onSelectBlockCtaAligment = newBlockCtaAligment => {

            setAttributes({ BlockCtaAligment: newBlockCtaAligment });

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
                            onSelect={onSelectBlockDecorationImage}
                            type="image"
                            value={BlockDecorationImage}
                            render={({ open }) => (

                                <IconButton onClick={open} icon="upload"
                                    className="editor-media-placeholder__button is-button is-default is-large"
                                >
                                    {__('Decoration Image', domain)}
                                </IconButton>

                            )}
                        />

                        {BlockDecorationImagePreview(BlockDecorationImage, BlockDecorationImage)}

                        {ButtonRemoveBlockDecorationImage(BlockDecorationImage)}

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

                    <div className="tr-settings-box">

                        <SelectControl label={__('Alignment', domain)} value={BlockCtaAligment}
                            options={[
                                { label: 'Left', value: ' text-left' },
                                { label: 'Center', value: ' text-center' },
                                { label: 'Right', value: ' text-right' },
                            ]}
                            onChange={onSelectBlockCtaAligment}
                        />

                    </div>

                </PanelBody>

                <PanelBody title={__('Alignment settings', domain)} initialOpen={false}>

                    <div className="tr-settings-box">

                        <SelectControl label={__('Content', domain)} value={BlockContentAligment}
                            options={[
                                { label: 'Left', value: '' },
                                { label: 'Right', value: ' content-right' },
                            ]}
                            onChange={onSelectBlockContentAligment}
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

                <div className="tr-form-row">

                    <label>{__('Block Content', domain)}:</label>

                    <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} templateLock="all" />

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
            BlockDecorationImage,
            BlockContentAligment,
            BlockCtaToggle,
            BlockCtaLabel,
            BlockCtaUrl,
            BlockCtaTarget,
            BlockCtaRel,
            BlockCtaCustomClass,
            BlockCtaClass,
            BlockCtaAligment,
            ...BlockSpacingAttributes

        } = attributes;

        return (
        <>
            <section className={`text-and-heading ${BlockBackgroundColor} ${getSpacingValues(BlockSpacingAttributes)} ${BlockContentAligment}`}>
                <div className="container-fluid">
                    <div className="wrapper">
                        <div className={`container ${BlockContainerWidth}`}>

                            {(BlockDecorationImage != null) &&
                                <img className="decoration" src={BlockDecorationImage.url} alt={BlockDecorationImage.alt} width={BlockDecorationImage.sizes.full.width} height={BlockDecorationImage.sizes.full.height} />
                            }

                            <div className="text-and-heading__inner">

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

                                <div className={`text`}>
                                    <InnerBlocks.Content />
                                </div>

                            </div>

                            {(BlockCtaToggle) &&

                                <>
                                    {((BlockCtaUrl != null && BlockCtaUrl.length > 0) && (BlockCtaLabel != null && BlockCtaLabel.length > 0)) &&
                                        <div className={`cta-wrapper  ${BlockCtaAligment}`}>

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