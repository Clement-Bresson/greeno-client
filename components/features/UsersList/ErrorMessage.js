import React from 'react';

import T from 'prop-types';

const ErrorMessage = ({ message }) => (
  <aside>
    {message}
    <style jsx>{`
      aside {
        padding: 1.5em;
        font-size: 14px;
        color: white;
        background-color: red;
      }
    `}</style>
  </aside>
);

ErrorMessage.propTypes = {
  message: T.string
};

export default ErrorMessage;
