import React from 'react';
import logoComp1 from '../../../helpers/images/logo/petlylogo-comp-1x.png';
import logoComp2 from '../../../helpers/images/logo/petlylogo-comp-2x.png';
import logoTab1 from '../../../helpers/images/logo/petlylogo-tab-1x.png';
import logoTab2 from '../../../helpers/images/logo/petlylogo-tab-2x.png';
import logoMob1 from '../../../helpers/images/logo/petlylogo-mob-1x.png';
import logoMob2 from '../../../helpers/images/logo/petlylogo-mob-2x.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/Auth/auth-selectors';

export default function Logo() {
  const token = useSelector(getToken);

  return (
    <Link to={token ? '/notices/sell' : '/'}>
      <picture>
        <source
          srcSet={`${logoComp1} 1x, ${logoComp2} 2x`}
          media="(min-width: 1280px)"
        />
        <source
          srcSet={`${logoTab1} 1x, ${logoTab2} 2x`}
          media="(min-width: 768px)"
        />
        <source
          srcSet={`${logoMob1} 1x, ${logoMob2} 2x`}
          media="(max-width: 767px)"
        />
        <img src={logoComp1} alt="logo" />
      </picture>
    </Link>
  );
}
