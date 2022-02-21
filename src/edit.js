import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl } from '@wordpress/components';
import {
    InspectorControls,
    RichText,
	URLInput,
	InnerBlocks,
    useBlockProps,
} from '@wordpress/block-editor';

export default function AlertEdit({ attributes, setAttributes }) {
    const { style, content, title } = attributes;

    const blockProps = useBlockProps({
        className: `alert alert-${style}`,
    });

	const ALLOWED_BLOCKS = [ 'core/paragraph' ];

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Style Settings', 'alert-block')}>
                    <SelectControl
                        value={style}
                        onChange={(value) => setAttributes({ style: value })}
                        options={[
                            {
                                label: __('Success', 'alert-block'),
                                value: 'success',
                            },
                            { label: __('Info', 'alert-block'), value: 'info' },
                            {
                                label: __('Warning', 'alert-block'),
                                value: 'warning',
                            },
                            {
                                label: __('Danger', 'alert-block'),
                                value: 'danger',
                            },
                        ]}
                    />
                </PanelBody>
            </InspectorControls>
            <div {...blockProps}>
				<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS }/>
            </div>
        </>
    );
}