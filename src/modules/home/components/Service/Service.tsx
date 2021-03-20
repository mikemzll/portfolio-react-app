import React, { useLayoutEffect } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { useTranslation } from 'react-i18next';
import Divider from '../../../../common/components/Divider/Divider';
import { IService } from '../../interfaces/home';

import './Service.scss';

const ServiceComponent = ({service}: {service: IService}) => {
  const { title, tools, expertise } = service;
  const { t } = useTranslation();

  return (
    <div className="service">
      <div className="service__title">{title}</div>
      <Divider />
      <div className="service__block">
        <div className="service__subtitle">
          {t("HOME.SERVICES.MAIN_TOOLS")}
        </div>
        <div>
          {!!tools.length && tools.map((item, index) => index < (tools.length - 1) ? item + ', ' : item)}
        </div>
      </div>
      <div className="service__block">
        <div className="service__subtitle">
          {t("HOME.SERVICES.OUR_EXPERTISE")}
        </div>
        <ul className="service__item-list">
          {!!expertise.length && expertise.map((item) => <li>{item}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default ServiceComponent;
