import { useEnhancedEditor, useEnhancedNode ,selectResolver } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC } from 'react';

import { IClipBoardCopyButtonProps } from './ClipBoardCopyButton.config';
import { Element } from '@ws-ui/craftjs-core';

const ClipBoardCopyButton: FC<IClipBoardCopyButtonProps> = ({
  iconPosition,
  label,
  style,
  className,
  classNames = [],
}) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();
  const { resolver } = useEnhancedEditor(selectResolver);


  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <button className="copy-button p-2 border-2 border-blue-400 rounded-lg" style={style}>
      <span
        className={cn([
          'flex items-center',
          {
            'flex-row-reverse': iconPosition === 'right',
            'flex-col': iconPosition === 'top',
            'flex-col-reverse': iconPosition === 'bottom',
          },
        ])}
      >
        <span
          className={cn([
            {
              hidden: iconPosition === 'hidden',
              'mb-1': iconPosition === 'top',
              'mt-1': iconPosition === 'bottom',
              'ml-1': iconPosition === 'right',
              'mr-1': iconPosition === 'left',
            },
          ])}
        >
          <Element is={resolver.Icon} id="icon" />
        </span>
        {label}
      </span>
      </button>
    </div>
  );
};

export default ClipBoardCopyButton;
