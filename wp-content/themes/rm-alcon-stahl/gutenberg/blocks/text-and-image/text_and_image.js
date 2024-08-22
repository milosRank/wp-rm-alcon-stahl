const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;

registerBlockType('rm-alcon-stahl/text-and-image', {
    title: 'Text and Image',
    description: 'Generate Text and Image block',
    icon: 'smiley',
    category: 'theme',
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p',
        },
    },
    edit({ attributes, setAttributes }) {
        return (
            <RichText
                tagName="p"
                value={attributes.content}
                onChange={(content) => setAttributes({ content })}
                placeholder="Enter text..."
            />
        );
    },
    save({ attributes }) {
        return <RichText.Content tagName="p" value={attributes.content} />;
    },
});