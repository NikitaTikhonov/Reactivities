import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const LoadingComponent: React.FC<{
  inverted?: boolean;
  content?: string;
}> = ({ inverted = true, content }) => {
  return (
    <Dimmer active inverted={inverted}>
      <Loader indeterminate content={content} />
    </Dimmer>
  );
};

export default LoadingComponent;
