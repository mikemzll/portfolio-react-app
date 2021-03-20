import React from 'react';
import { IApproach } from '../../interfaces/home';

import './Approach.scss';

const ApproachComponent = ({data}: {data: IApproach}) => {
  const { title, description } = data;
  return (
    <div className="approach">
      <div className="approach__title">{title}</div>
      <div className="approach__description">{description}</div>
    </div>
  );
};

export default ApproachComponent;
