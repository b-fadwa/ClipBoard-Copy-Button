import { EComponentKind, T4DComponentConfig } from '@ws-ui/webform-editor';
import { Settings } from '@ws-ui/webform-editor';
import { FaRegCopy } from 'react-icons/fa6';

import ClipBoardCopyButtonSettings, { BasicSettings } from './ClipBoardCopyButton.settings';

export default {
  craft: {
    displayName: 'ClipBoardCopyButton',
    kind: EComponentKind.BASIC,
    props: {
      name: '',
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(ClipBoardCopyButtonSettings, BasicSettings),
    },
  },
  info: {
    settings: ClipBoardCopyButtonSettings,
    displayName: 'ClipBoardCopyButton',
    exposed: true,
    icon: FaRegCopy,
    events: [
      {
        label: 'On Click',
        value: 'onclick',
      },
      {
        label: 'On Blur',
        value: 'onblur',
      },
      {
        label: 'On Focus',
        value: 'onfocus',
      },
      {
        label: 'On MouseEnter',
        value: 'onmouseenter',
      },
      {
        label: 'On MouseLeave',
        value: 'onmouseleave',
      },
      {
        label: 'On KeyDown',
        value: 'onkeydown',
      },
      {
        label: 'On KeyUp',
        value: 'onkeyup',
      },
    ],
    datasources: {
      accept: ['string'],
    },
  },
  defaultProps: {
    iterableChild: true,
    label: 'Copy content to clipboard',
    iconPosition: 'left',
    style: {
      display: 'flex',
      width: 'fit-content',
    },
  },
} as T4DComponentConfig<IClipBoardCopyButtonProps>;

export interface IClipBoardCopyButtonProps extends webforms.ComponentProps {
  iconPosition: any;
  label: any;
}
