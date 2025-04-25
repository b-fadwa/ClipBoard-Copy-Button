import config, { IClipBoardCopyButtonProps } from './ClipBoardCopyButton.config';
import { T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
import Build from './ClipBoardCopyButton.build';
import Render from './ClipBoardCopyButton.render';

const ClipBoardCopyButton: T4DComponent<IClipBoardCopyButtonProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <Build {...props} /> : <Render {...props} />;
};

ClipBoardCopyButton.craft = config.craft;
ClipBoardCopyButton.info = config.info;
ClipBoardCopyButton.defaultProps = config.defaultProps;

export default ClipBoardCopyButton;
