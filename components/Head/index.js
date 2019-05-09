import React from 'react';

import T from 'prop-types';
import NextHead from 'next/head';

import colors from '../../vars/ui/colors';

const Head = ({ title }) => (
  <NextHead>
    <title>{title}</title>
    <link rel="icon" href="/static/favicon.ico" />
    <meta charSet="utf-8" />
    <meta name="msapplication-TileColor" content={colors.PRIMARY} />
    <meta name="theme-color" content={colors.PRIMARY} />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="theme-color" content={colors.PRIMARY} />
    <link rel="manifest" href="/static/manifest.json" />
    <link
      href="https://fonts.googleapis.com/css?family=Lato:300"
      rel="stylesheet"
    />
  </NextHead>
);

Head.propTypes = {
  title: T.string
};

export default Head;
