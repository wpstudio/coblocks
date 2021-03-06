/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, RangeControl } = wp.components;

/**
 * Inspector controls
 */
class Inspector extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {

		const {
			attributes,
			setAttributes,
		} = this.props;

		const {
			count,
		} = attributes;

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Pricing Table Settings' ) } className='coblocks__inspector-block-settings-panel-body'>
						<RangeControl
							label={ __( 'Tables' ) }
							value={ count }
							onChange={ ( nextCount ) => {
								setAttributes( {
									count: nextCount,
								} );
							} }
							min={ 1 }
							max={ 4 }
						/>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	}
};

export default Inspector;
