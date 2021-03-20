import HomeComponent from '../../home/components/Home/Home';
import PortfolioComponent from '../../portfolio/components/Portfolio/Portfolio';
import AboutUsComponent from '../../aboutUs/components/AboutUs/AboutUs';
import { generatePath } from 'react-router-dom';

const ROUTES = {
  HOME: {
    path: '/home',
    component: HomeComponent,
  },
  PORTFOLIO: {
    path: '/portfolio',
    component: PortfolioComponent,
  },
  ABOUT_US: {
    path: '/about-us',
    component: AboutUsComponent,
  },
};

const { HOME, PORTFOLIO, ABOUT_US } = ROUTES;

export const DEFAULT_PAGE = generatePath(HOME.path);

export const BASE_NAME = '/portfolio-react-app';

export { HOME, PORTFOLIO, ABOUT_US };