import React from 'react';
import { useTranslation } from 'react-i18next';
import Case from '../Case/Case';
import { ICase } from '../../interfaces/portfolio';

import BannerImage from '../../../../assets/images/banner_portfolio.gif';
import './Portfolio.scss';

const PortfolioComponent = () => {
  const { t } = useTranslation();

  const portfolio: ICase[] = [{
      title: 'Raffle Zone App',
      platform: ['iOS', 'Android'],
      description: 'Create a gamified application for young users and gaming fans.'
    }, {
      title: 'Impact Music App',
      platform: ['iOS',],
      description: 'Mobile application for new musicians who want to share their own music. And take part in the contests from producers.'
    }, {
      title: 'Wrist Radio.',
      platform: ['Apple Watch',],
      description: 'Apple Watch standalone Radio application UI/UX design & build usability.'
    }, {
      title: 'Easy QA',
      platform: ['Web',],
      description: 'A test management tool that was created to make complicated things very simple.'
    }, {
      title: 'Pickr Food App',
      platform: ['iOS', 'Android', 'Web'],
      description: 'Application for booking queues at fast food establishments.'
    }, {
      title: 'Healthy Pregnancy App',
      platform: ['iOS', 'Android'],
      description: 'Application for monitoring hormone levels during pregnancy.'
    }, {
      title: 'Quick Slim App',
      platform: ['iOS', 'Android'],
      description: 'Mobile application for a traking dayli activity and creating strong way from position A to position B. It’s  design wich got 2 achivmants at Behance.'
    }, 
  ];
  
  return (
    <div className="portfolio">
      <div className="banner">
        <div className="banner-text">
          {t('PORTFOLIO.BANNER')}
        </div>
        <img src={BannerImage} alt=""/>
      </div>

      {!!portfolio.length && portfolio.map((item) => <Case data={item} />)}
    </div>
  );
};

export default PortfolioComponent;
