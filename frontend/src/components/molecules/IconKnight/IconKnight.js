import React from 'react';
import { Link } from 'react-router-dom';
import * as sc from './IconKnight.style';

const IconKnight = () => (
  <Link to='/'>
    <sc.KnightSvgg />
  </Link>
);

export default IconKnight;
