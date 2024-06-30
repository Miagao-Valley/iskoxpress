import React from 'react'
import { socialLinks } from '../links'

const SocialLinks = ({parentClass, itemClass}) => {
  return (
    <ul className="">
      {socialLinks.map((icon) => {
        return (
          <li>
            <a href={icon.href} target={icon.target} className="">
              <i className={icon.class}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialLinks
