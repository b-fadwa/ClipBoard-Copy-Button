import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC } from 'react';

import { IClipBoardCopyButtonProps } from './ClipBoardCopyButton.config';

const ClipBoardCopyButton: FC<IClipBoardCopyButtonProps> = ({
  style,
  className,
  classNames = [],
}) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <button className="copy-button p-2" style={style}>
        Copy
      </button>
    </div>
  );
};

export default ClipBoardCopyButton;
