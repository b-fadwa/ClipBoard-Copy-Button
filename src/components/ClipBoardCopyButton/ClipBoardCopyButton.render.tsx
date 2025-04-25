import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';

import { IClipBoardCopyButtonProps } from './ClipBoardCopyButton.config';
import CopyToClipboard from 'react-copy-to-clipboard';

const ClipBoardCopyButton: FC<IClipBoardCopyButtonProps> = ({
  style,
  className,
  classNames = [],
}) => {
  const { connect } = useRenderer();
  const [value, setValue] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const {
    sources: { datasource: ds },
  } = useSources();

  useEffect(() => {
    if (!ds) return;

    const listener = async (/* event */) => {
      const v = await ds.getValue<string>();
      setValue(v);
    };

    listener();

    ds.addListener('changed', listener);

    return () => {
      ds.removeListener('changed', listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ds]);

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
        <button className="copy-button p-2" style={style}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default ClipBoardCopyButton;
