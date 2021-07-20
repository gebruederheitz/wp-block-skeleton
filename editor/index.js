import { blocks, i18n } from 'wp';

import { attributes as defaultAttributes } from './attributes';
import { edit as defaultEdit } from './edit';
import { save as defaultSave } from './save';
import { slideshowChildren, DEFAULT_ALLOWED_CHILDREN } from './utils/children';

const { registerBlockType } = blocks;
const { __ } = i18n;

export function register(options = {}) {
    const {
        category = 'widgets',
        icon = 'file',
        edit = defaultEdit,
        save = defaultSave,
        attributes = defaultAttributes,
    } = options;

    registerBlockType('ghwp/block', {
        title: __('Block name', 'ghwp'),
        icon,
        description: __(
            'A short description of what the block does.',
            'ghwp'
        ),
        category,
        attributes,
        edit,
        save,
    });
}

export {
    defaultEdit as edit,
    defaultSave as save,
    defaultAttributes as attributes,
    slideshowChildren,
    DEFAULT_ALLOWED_CHILDREN,
};
