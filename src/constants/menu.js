import Twitter from "svgs/socials/twitter.inline.svg"
import Linkedin from "svgs/socials/linkedin.inline.svg"
import Github from "svgs/socials/github.inline.svg"
import Discourse from "svgs/socials/discourse.inline.svg"

export const HeaderMenu = [
  {
    id: 0,
    title: "About us",
    link: "#"
  },
  {
    id: 1,
    title: "Services",
    link: "#"
  },
  {
    id: 2,
    title: "Why DevOptima",
    link: "#"
  },
]

export const FooterMenu = [
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