import React from 'react';
import LinkedinInIcon from '../../../assets/images/icon_linkedin.webp';
import TelegramIcon from '../../../assets/images/icon_telegram.webp';
import { ISocial } from '../../interfaces/common';

const SocialComponent = ({data}: {data: ISocial}) => {
  const { type, url } = data;

  const getIcon = (type: ISocial['type']) => {
    switch (type) {
      case 'linkedin':
        return LinkedinInIcon;
      case 'telegram':
        return TelegramIcon;
      default:
        break;
    }
  }

  return <a className="social" href=""><img src={getIcon(type)} alt={type}/></a>
}

export default SocialComponent;
