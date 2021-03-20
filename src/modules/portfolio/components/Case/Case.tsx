import React from 'react';
import { ICase } from '../../interfaces/portfolio';

import './Case.scss';

const CaseComponent = ({data}: {data: ICase}) => {
  const { title, platform, description } = data;

  return (
    <div className="case">
      <div className="case__info">
        <div className="case__info__title">{title}</div>

        {!!platform && (
          <div className="case__info__platform">//: {platform.map((item, index) => index < (platform.length - 1) ? item + ' – ' : item)} </div>
        )}

        {!!description && (<div className="case__info__description">{description}</div>)}
      </div>
      <div className="case__image"></div>
    </div>
  )
};

export default CaseComponent;