import { blockEditor, components, i18n } from 'wp';
import classnames from 'classnames';

import { Controls } from './controls';

const { InnerBlocks } = blockEditor;
const { Placeholder, SelectControl } = components;
const { __ } = i18n;

const Edit = (props) => {
    const {
        attributes: { currentlyEditedChildIndex, type },
        className,
        isSelected,
        setAttributes,
    } = props;

    return (
        <>
            <Controls {...this.props} />
            <div className={classnames([className, 'my-class'])}>
                <Placeholder>
                    <SelectControl />
                </Placeholder>
                <InnerBlocks
                    allowedBlocks={['type']}
                    template={[
                        ['type', {attributes: true}],
                        ['type', {attributes: true}],
                    ]}
                    templateLock={false}
                    renderAppender={() => null}
                />
            </div>
        </>
    );
}

export const edit = Edit;
