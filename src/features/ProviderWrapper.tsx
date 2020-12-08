import React, {Component, ComponentType} from 'react';
import {Provider as StoreProvider} from 'react-redux';
import getStore from '../Libs/Navigation/store';

const wrapWithProvider = <OriginalProps extends {}>(
  WrappedComponent: ComponentType<OriginalProps>,
) => {
  class ProviderWrapper extends Component {
    render() {
      const {...props} = this.props;
      const rest = (props as unknown) as OriginalProps;
      return (
        <StoreProvider store={getStore()}>
            <WrappedComponent {...rest} />
        </StoreProvider>
      );
    }
  }

  const wrapper = (props: any) => (
    <ProviderWrapper {...props} />
  );

  return wrapper;
};

export default wrapWithProvider;
