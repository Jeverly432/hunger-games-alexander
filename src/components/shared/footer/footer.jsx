import React from 'react';
import Link from 'next/link';
import Logo from "svgs/footer/logo.inline.svg"
import clsx from 'clsx';
import { FooterMenu } from "constants/menus"

function Footer() {
  return (
    <footer className="pt-[47px] px-safe pb-[51px] relative z-1 bg-primary-1 border-t border-blue-1">
      <div className='container'>
        <div className='flex flex-col gap-1'>
          <div className='flex justify-between'>
            <Link href='#'>
              <Logo className="w-[163px] h-[63px]" />
            </Link>
            <ul className='flex gap-[176px]'>
              {FooterMenu.map((nav) => (
                <li key={nav.id} className={clsx('w-fit flex flex-col gap-4')}>
                  <h3 className='font-medium text-base leading-150 tracking-[-0.02em]'>
                    {nav.title}
                  </h3>
                  <ul className='flex flex-col gap-3'>
                    {nav.subLinks.map((subNav) => (
                      <li key={subNav.id}>
                        <Link href={subNav.link} className='flex items-center font-light text-base leading-150 tracking-[-0.02em] text-gray-1 transition-colors hover:text-gray-2'>
                          {subNav.icon !== null ? (
                            <>
                              <span className='mr-2.5 w-4 h-4'>
                                {subNav.icon}
                              </span>
                              {subNav.title}
                            </>
                          ) : (
                            <>
                              {subNav.title}
                            </>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-gray-1 font-light text-sm leading-normal tracking-[-0.02em]">Devoptima {new Date().getFullYear()} © All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
