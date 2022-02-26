import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { style, content, title, placeholder } = attributes;

    // const trimUrl = placeholder + 'untrimmed trime'

    return (
        <div class={'single-video'}>
            <span data-video-id={ placeholder } class={'js-modal-video'} data-video-text={ title }>
                <img src={'https://img.youtube.com/vi/' + placeholder + '/mqdefault.jpg'} alt={title}/>
                <span class={'modal-video-title'}>{ title }</span>
            </span>
        </div>
    );
}