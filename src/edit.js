import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { 
    PanelBody, 
    SelectControl,
    ResizableBox, } from '@wordpress/components';
import {
    InspectorControls,
    RichText,
	URLInput,
	InnerBlocks,
    useBlockProps,
    __experimentalUseBorderProps as useBorderProps,
} from '@wordpress/block-editor';

export default function AlertEdit({ attributes, setAttributes }) {
    const { 
        style, 
        content, 
        title,
        placeholder,
        buttonPosition,
     } = attributes;

    const blockProps = useBlockProps({
        className: `alert alert-${style}`,
    });

	const ALLOWED_BLOCKS = [ 
        [ 'core/paragraph', { placeholder: 'Youtube URL' } ],
        [ 'core/search', { placeholder: 'SEOタイトル' } ],
    ];

    const isButtonPositionInside = 'button-inside' === buttonPosition;
    const borderProps = useBorderProps( attributes );

    const renderTextField = () => {
		// If the input is inside the wrapper, the wrapper gets the border color styles/classes, not the input control.
		const textFieldClasses = classnames(
			'wp-block-search__input',
			isButtonPositionInside ? undefined : borderProps.className
		);
		const textFieldStyles = isButtonPositionInside
			? { borderRadius }
			: borderProps.style;

		return (
			<input
				className={ textFieldClasses }
				style={ textFieldStyles }
				aria-label={ __( 'Optional placeholder text' ) }
				// We hide the placeholder field's placeholder when there is a value. This
				// stops screen readers from reading the placeholder field's placeholder
				// which is confusing.
				placeholder={
					placeholder ? undefined : '動画のURL'
				}
				value={ placeholder }
				onChange={ ( event ) =>
					setAttributes( { placeholder: event.target.value } )
				}
			/>
		);
	};

    const renderTitleField = () => {
        const textFieldClasses = classnames(
			'wp-block-search__input',
			isButtonPositionInside ? undefined : borderProps.className
		);
        const textFieldStyles = isButtonPositionInside
			? { borderRadius }
			: borderProps.style;
        return (
            <input 
                className={ textFieldClasses }
                style={ textFieldStyles }
                value={ title }
                onChange={ ( event ) =>
					setAttributes( { title: event.target.value } )
				}
            />
        );
    }

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Style Settings', 'alert-block')}>
                </PanelBody>
            </InspectorControls>
            <div {...blockProps}>
                <ResizableBox>
                    <>
                        <div className="input-box">
                            動画のURL<br />
                            { renderTextField() }
                            <br />動画のタイトル<br />
                            { renderTitleField() }
                        </div>
                        <div className="preview-box">
                            サムネプレビュー
                            <img src={'https://img.youtube.com/vi/' + placeholder + '/mqdefault.jpg'}/>
                        </div>
                        <div className="clear"></div>
					</>
                </ResizableBox>
            </div>
        </>
    );
}