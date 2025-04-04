import React from 'react';
import Link from 'next/link';
import Logo from "svgs/footer/logo.inline.svg"
import Twitter from "svgs/socials/twitter.inline.svg"
import Linkedin from "svgs/socials/linkedin.inline.svg"
import Github from "svgs/socials/github.inline.svg"
import Discourse from "svgs/socials/discourse.inline.svg"
import clsx from 'clsx';

const navigation = [
  {
    id: 0,
    title: "Resources",
    subLinks: [
      {
        id: 0,
        title: "Docs",
        link: "#",
        icon: null
      },
      {
        id: 1,
        title: "Release notes",
        link: "#",
        icon: null
      },
      {
        id: 2,
        title: "Security",
        link: "#",
        icon: null
      },
    ]
  },
  {
    id: 1,
    title: "Community",
    subLinks: [
      {
        id: 0,
        title: "Twitter",
        link: "#",
        icon: <Twitter className="w-4 h-4"/>
      },
      {
        id: 1,
        title: "LinkedIn",
        link: "#",
        icon: <Linkedin className="w-4 h-4"/>
      },
      {
        id: 2,
        title: "GitHub",
        link: "#",
        icon: <Github className="w-4 h-4"/>
      },
      {
        id: 4,
        title: "Discourse",
        link: "#",
        icon: <Discourse className="w-4 h-4"/>
      },
    ]
  },
  {
    id: 2,
    title: "Legal",
    subLinks: [
      {
        id: 0,
        title: "Privacy policy",
        link: "#",
        icon: null
      },
      {
        id: 1,
        title: "Terms of service",
        link: "#",
        icon: null
      },
    ]
  }
]

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
              {navigation.map((nav) => (
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
          <p className="text-gray-1 font-light text-sm leading-[150%] tracking-[-0.02em]">Devoptima {new Date().getFullYear()} © All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
