import React from 'react';
import Link from 'next/link';
import resolveLink from '../../../utils/ResolveLink';

const SocialIcons = ({ globalSettings }) => {
  return ( 
    <>
        {globalSettings.content?.social_icons.map((icon, index) => (
            <Link key={index} href={resolveLink(icon.link.cached_url)} target="_blank">
            <img className="w-8 h-full sm:w-12 sm:h-full" src={`/social_icons/${icon.title.toLowerCase() }.svg`} />  
            </Link>
        ))}
    </>
  );
};

export default SocialIcons;
