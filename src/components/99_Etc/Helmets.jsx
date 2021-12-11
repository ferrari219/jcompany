import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PropTypes from 'prop-types';

const Helmets = ({ ttl = '' }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{ttl && `${ttl}:`} Jcompany</title>
      </Helmet>
    </HelmetProvider>
  );
};
Helmets.propTypes = {
  ttl: PropTypes.string,
};

export default Helmets;
