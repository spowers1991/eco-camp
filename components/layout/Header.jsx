import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MobileMenu from './MobileMenu';

const Header = (props) => {
    
const router = useRouter();

const [openMobileMenu, setOpenMobileMenu] = useState(false);

function mobileMenuState(status) {
    setOpenMobileMenu(status);
}

 const [scrollPosition, setScrollPosition] = useState(0);

  // Function to update the scroll position in pixels
  const updateScrollPosition = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setScrollPosition(scrollTop);
  };

  // Update scroll position on scroll
  useEffect(() => {
    window.addEventListener("scroll", updateScrollPosition);
    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  

  return (
      <header className='z-30 w-full bg-[#8fc18e] fixed '>
        <div className={`${scrollPosition > 100 && '!py-4'} duration-500 lg:flex lg:justify-between lg:items-center py-6 mx-auto container font-bebas-neue px-6 xl:px-16 3xl:px-0`}>
            <div className="flex justify-between items-center">
                <div>
                    <Link href="/" className={`${scrollPosition > 100 && '!text-xl'} duration-500 relative font-semiBold text-2xl uppercase tracking-[1.25px] ${(router.asPath === '/' || router.pathname === '/' || router.pathname === undefined) ? '' : ''}`}>
                         <img className="w-[50px]" src="https://vesuvioeco.it/images/logo-header-ve-white.svg"/>
                    </Link>
                    <p className="text-sm font-light text-gray-600"></p>
                </div>
                <div className="lg:hidden">
                    <div onClick={() => mobileMenuState('open')}>
                        <svg viewBox="0 0 20 20" className="inline-block w-6 h-6 text-white" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd">
                            <g id="icon-shape">
                                <path d="M0,3 L20,3 L20,5 L0,5 L0,3 Z M0,9 L20,9 L20,11 L0,11 L0,9 Z M0,15 L20,15 L20,17 L0,17 L0,15 Z" id="Combined-Shape"></path>
                            </g>
                        </g>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="hidden bg-gray-100 mt-4 p-4 lg:mt-0 lg:p-0 lg:bg-transparent lg:block">
                <ul className="lg:flex lg:-mx-4">
                    {props?.globalSettings?.content?.menu.map(( item, index ) => (
                        <li key={index} className={`text-white font-light tracking-[1.25px] lg:mx-4 relative text-lg after:absolute after:h-[2px] after:left-0 after:bottom-[2px] after:bg-[#fff] after:duration-1000 hover:after:w-full ${(router.asPath === '/'+item.link.cached_url) ? 'after:w-full' : 'after:w-0'}`}>
                            <Link href={item.link.cached_url}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <MobileMenu status={openMobileMenu} mobileMenuState={mobileMenuState} globalSettings={props.globalSettings}/>
        </div>
      </header>
  );
};

export default Header;
