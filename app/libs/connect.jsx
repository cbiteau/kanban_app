import React from 'react';

export default (state, actions) => {
  if(typeof state === 'function' ||
    (typeof state === 'object' && Object.keys(state).length)) {
      return target => connect(state, actions, target);
  }
  return target => props => (
    <target {...Object.assign({}, props, actions)} />
  );
}
