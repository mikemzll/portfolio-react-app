import React from 'react';
import { IProject } from '../../interfaces/home';

import './Project.scss';

const ProjectComponent = ({data}: {data: IProject}) => {
  const { title, description } = data;

  return  (
    <div className="project">
      <p>
        <span className="project__title"><b>{title}</b></span>
        <span className="project__description">{description}</span>
      </p>
    </div>
  )
}

export default ProjectComponent;
