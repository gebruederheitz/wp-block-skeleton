import { blockEditor, components, i18n } from 'wp';

import { InputWithIcon } from '@gebruederheitz/wp-editor-components';

const {
    Panel,
    ToggleControl,
    Toolbar: WPToolbar,
    ToolbarButton,
} = components;
const { BlockControls, InspectorControls } = blockEditor;
const { __ } = i18n;

export const Controls = (props) => {
    const {
        /* Parent component props passed down directly */
        attributes: {},
        setAttributes,
    } = props;

    return (
        <>
            <InspectorControls>
                <InputWithIcon />
                <Panel>
                    <InputWithIcon />
                </Panel>
            </InspectorControls>

            <BlockControls>
                <WPToolbar>
                    <ToolbarButton
                        icon={}
                        label={''}
                        isPressed={true}
                        onClick={() => {
                            setAttributes();
                        }}
                    />
                </WPToolbar>
            </BlockControls>
        </>
    );
};
