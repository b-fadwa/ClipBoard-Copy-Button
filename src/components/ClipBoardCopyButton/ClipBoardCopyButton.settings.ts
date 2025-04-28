import { ESetting, TSetting } from '@ws-ui/webform-editor';
import { BASIC_SETTINGS, DEFAULT_SETTINGS, load } from '@ws-ui/webform-editor';
import {
  FdAlignContentEnd,
  FdAlignContentStart,
  FdFlexEnd,
  FdFlexStart,
  FdHidden,
} from '@ws-ui/icons';

const commonSettings: TSetting[] = [
  {
    key: 'label',
    label: 'Label',
    defaultValue: 'Download',
    type: ESetting.TEXT_FIELD,
  },
  {
    key: 'iconPosition',
    label: 'Icon Position',
    type: ESetting.RADIOGROUP,
    defaultValue: 'hidden',
    options: [
      { value: 'top', icon: FdFlexStart },
      { value: 'bottom', icon: FdFlexEnd },
      { value: 'left', icon: FdAlignContentStart },
      { value: 'right', icon: FdAlignContentEnd },
      { value: 'hidden', icon: FdHidden },
    ],
  },
];

const Settings: TSetting[] = [
  {
    key: 'properties',
    label: 'Properties',
    type: ESetting.GROUP,
    components: commonSettings,
  },
  ...DEFAULT_SETTINGS,
];

export const BasicSettings: TSetting[] = [...load(BASIC_SETTINGS).filter('style.overflow')];

export default Settings;
