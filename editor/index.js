import { blocks, i18n } from 'wp';

import defaultAttributes from './attributes.json';
import { edit as defaultEdit } from './edit';
import { save as defaultSave } from './save';
import meta from './meta.json';

const { registerBlockType } = blocks;
const { __ } = i18n;

export function register(options = {}) {
    const {
        category = meta.category,
        icon = 'file',
        edit = defaultEdit,
        save = defaultSave,
        attributes = defaultAttributes,
    } = options;

    registerBlockType(meta.name, {
        title: __(meta.prettyName, 'ghwp'),
        icon,
        description: __(meta.description, 'ghwp'),
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
};
