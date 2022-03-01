export default function save({ attributes }) {

    const { title, placeholder } = attributes;

    return (
        <div class={'single-video'}>
            <span data-video-id={ placeholder } class={'js-modal-video'} data-video-text={ title }>
                <img src={'https://img.youtube.com/vi/' + placeholder + '/mqdefault.jpg'} alt={title}/>
                <span class={'modal-video-title'}>{ title }</span>
            </span>
        </div>
    );
}