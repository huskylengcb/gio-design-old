import * as React from 'react';
type GetDisplayName = (x: React.ComponentType) => string;

export const getDisplayName: GetDisplayName = (Component: React.ComponentClass) => Component.displayName || Component.name || 'Component';

function pure<P>(Component: React.FC<P>): React.ComponentClass {
  class HOC extends React.PureComponent<P, undefined> {
    public static displayName: string
    public render() {
      return <Component {...this.props} />;
    }
  }
  HOC.displayName = `withPure(${getDisplayName(Component)})`;
  return HOC;
}

export default pure
