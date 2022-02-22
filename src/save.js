import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { style, content, title, placeholder } = attributes;

    // const trimUrl = placeholder + 'untrimmed trime'

    return (
        <div class={'single-video'}>
            <span data-video-id={ placeholder } class={'js-modal-video'}>
                <img src={'https://img.youtube.com/vi/' + placeholder + '/mqdefault.jpg'}/>
            </span>
        </div>
    );
}