import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useCurrentUser } from '../../../hooks/user';
import { UserContext } from '../../../context';
import * as sc from './Layout.style';

const Layout = props => {
  const { setCurrentUser } = useContext(UserContext);

  useCurrentUser({ onSuccess: data => setCurrentUser(data.data) });

  return (
    <sc.Container>
      <sc.Header>{props.header}</sc.Header>

      <sc.Main>{props.main}</sc.Main>
    </sc.Container>
  );
};

Layout.propTypes = {
  header: PropTypes.element,
  main: PropTypes.any
};

export default React.memo(Layout);
