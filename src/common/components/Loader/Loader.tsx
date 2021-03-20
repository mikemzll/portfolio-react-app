import React, { FC } from 'react';

const Loader: FC = ({ children }) => (
  <div className="loader">
    {children}
  </div>
);

export default Loader;
