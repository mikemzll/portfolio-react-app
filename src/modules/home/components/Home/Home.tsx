import React from 'react';
import { useTranslation } from 'react-i18next';
import Service from '../Service/Service';
import Approach from '../Approach/Approach';
import Project from '../Project/Project';
import { IApproach, IService, IProject } from '../../interfaces/home';

import BannerImage from '../../../../assets/images/banner_home.gif';
import './Home.scss';

const HomeComponent = () => {
  const { t } = useTranslation();

  const approachSteps: IApproach[] = [{ 
    title: 'Explore your business idea',
    description: 'Before starting any project we strive to obtain the same understanding of the business context as our clients have.'
  }, { 
    title: 'From idea to release',
    description: 'Our approach focus on business-minded, utilizing a wide variety of design interactions techniques we creating solution from idea to release.'
  }, { 
    title: 'UI & User Experience',
    description: 'In our projects we use effective solutions proven by experience and easy to development and we attach documentation and guideline.'
  }];

  const serviceList: IService[] = [{
      title: 'UI/UX Design',
      tools: ['Photoshop', 'Sketch', 'Figma'],
      expertise: [
        'Information architecture',
        'Wireframe (Prototyping)',
        'User inteface design',
        'User flow mapping',
        'Motion design',
        'Style guide',
      ]
    }, {
      title: 'Site building',
      tools: ['Readymag', 'Tilda'],
      expertise: [
        'UI/UX Design ( See previus )',
        'Building design in site builder',
        'Push your domain',
        'Support your site in future'
      ],
    }, {
      title: 'Graphic design',
      tools: ['Illustrator', 'Photoshop'],
      expertise: [
        'Undestanding your position',
        'Building identity patterns',
        'Creating / improve you branding'
      ],
    },
  ];

  const projectList: IProject[] = [{
    title: 'Quick Slim App.',
    description: ' Mobile application for tracking daily activity and creating strong way from position A to position B. Its design which got 2 achievements at Behance – { Best interaction design gallery } and { Best design solution with Experience Design }',
  }, {
    title: 'G & Quiz.',
    description: ' Gamified editorial portal for user behavior analysis.'
  }, {
    title: 'Hey Learner',
    description: ' is a revolutionary, hassle-free, and super simple app that allows learners to book lessons with instructors online. Always have full control over your lesson price, where you work, when you work, and who you work with.',
  }, ];

  return (
    <div className="home">
      <div className="banner home__block">
        <div className="banner-text">
          Hello, we are the Design again, your design supplier //.
        </div>
        <img src={BannerImage} alt=""/>
      </div>
      <div className="home__block">
        <div className="home__block-title">
          {t('HOME.RECENT_PROJECTS') + '/:'}
        </div>
        {!!projectList.length && projectList.map((item) => <Project data={item} />)}
      </div>
      <div className="home__block">
        <div className="home__block-title">
          {t("HOME.SERVICES.T") + "<//>"}
        </div>
        <div className="services">
          {!!serviceList.length && serviceList.map((service) => <Service service={service} />)}
        </div>
      </div>
      <div className="home__block">
        <div className="home__block-title">
          {t('HOME.OUR_APPROACH') + '//.'}
        </div>
        {!!approachSteps && approachSteps.map((item) => <Approach data={item} />)}
      </div>
    </div>
  );
};

export default HomeComponent;
