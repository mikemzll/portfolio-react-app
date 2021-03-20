import React from 'react';
import Social from '../../../../common/components/Social/Social';
import { ISocial } from '../../../../common/interfaces/common';

import './Footer.scss';

const FooterComponent = () => {
  const socials: ISocial[] = [{
    type: 'telegram',
    url: ''
  }, {
    type: 'linkedin',
    url: ''
  }, ]

  return (
    <div className="footer">
      <div className="footer-divider">
        <div></div>
        <div></div>
      </div>
      <div className="footer-content">
        <div className="footer-content__copyright">
          © Copyright the Design again/. 2020
        </div>
        <div className="footer-content__contacts">
          <a href="mailto:some.desssigner@gmail.com">some.desssigner@gmail.com</a>
          <div className="socials">
            {!!socials.length && socials.map((item) => <Social data={item}/>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
