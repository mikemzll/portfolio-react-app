import React, { useEffect, useState } from 'react';
import Logo from '../../../../assets/images/logo.png';
import { useTranslation } from 'react-i18next';
import { Link, generatePath, matchPath, useLocation, useHistory } from 'react-router-dom';

import './Header.scss';

interface IHeaderNavItem {
  path: string;
  name: string;
}

const HeaderNavigationItem = ({ itemData, isActive }: { itemData: IHeaderNavItem; isActive: boolean }) => {
  const { t } = useTranslation();

  return (
    <div className={isActive ? 'link active' : 'link'}>
      <Link to={generatePath(itemData.path)}>{t(itemData.name)}</Link>
      <div className="underline"></div>
    </div>
  );
};

const HeaderNavigation = () => {
  const location = useLocation();
  const [activeItemPath, setActiveItemPath] = useState('');


  const navigationItems: IHeaderNavItem[] = [{
    path: '/home',
    name: 'Home'
  }, {
    path: '/portfolio',
    name: 'Portfolio'
  }, {
    path: '/about-us',
    name: 'About Us'
  }
];

  useEffect(() => {
    console.log("🚀 ~ file: Header.tsx ~ line 47 ~ useEffect ~ location.pathname", location.pathname); // test remove
    for (const item of navigationItems) {
      if (matchPath(location.pathname, { path: item.path, exact: true })) {
        setActiveItemPath(item.path);

        return;
      }
    }
  }, [location]);

  return (
    <div className="app-header__navigation">
      <ul>
        {navigationItems.map((item, index) => {
          return (
            <li key={index}>
              <HeaderNavigationItem itemData={item} isActive={activeItemPath === item.path} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const HeaderComponent = () => {

  return (
    <div className="app-header">
      <div className="app-header__wrapper">
        <img className="app-header__logo" src={Logo} alt="logo"/>
        
        <HeaderNavigation />
      </div>
    </div>
  );
};

export default HeaderComponent;
