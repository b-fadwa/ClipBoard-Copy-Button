import { useRenderer, useSources, selectResolver, useEnhancedEditor } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';

import { IClipBoardCopyButtonProps } from './ClipBoardCopyButton.config';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Element } from '@ws-ui/craftjs-core';

const ClipBoardCopyButton: FC<IClipBoardCopyButtonProps> = ({
  iconPosition,
  label,
  style,
  className,
  classNames = [],
}) => {
  const { connect } = useRenderer();
  const { resolver } = useEnhancedEditor(selectResolver);

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
        <button className="copy-button p-2  border-2 border-blue-400 rounded-lg" style={style}>
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
            {copied ? 'Content copied!' : label}
          </span>
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default ClipBoardCopyButton;
