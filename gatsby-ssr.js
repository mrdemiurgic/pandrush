import React from 'react';

const postBodyComponents = [<div id="portal"></div>];

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents(postBodyComponents);
};
