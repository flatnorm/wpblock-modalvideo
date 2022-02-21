import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { style, content, title } = attributes;

    return (
        <div {...useBlockProps.save({ className: `alert alert-${style}` })}>
            <InnerBlocks.Content />
        </div>
    );
}