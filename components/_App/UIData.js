export const logo = {
  url:"/images/logo.png",
  alt:"logo"
}

export const menuData = [
  {
    title: "Services",
    link: "/services",
    subtitle: [
      {
        title: "Web Development",
        link: "/services/web-development",
        subtitle:[]
      },
      {
        title:"Mobile Development",
        link: "/services/mobile-development",
        subtitle:[]
      },
      {
        title:"AI Development",
        link: "/services/ai-development",
        subtitle:[]
      }
    ]
  },
  {
    title: "Technologies",
    link: "/technologies",
    subtitle: [
      {
        title:"Front End",
        link: "/technologies/front-end",
        subtitle:[
          {
            title:"React",
            link: "/technologies/front-end/react"
          },
          {
            title:"Vue",
            link: "/technologies/front-end/vue"
          },
          {
            title:"Angular",
            link: "/technologies/front-end/angular"
          }
        ]
      },
      {
        title:"Back End",
        link: "/technologies/back-end",
        subtitle:[
          {
            title:"NodeJs",
            link: "/technologies/back-end/nodejs"
          },
          {
            title:"PHP",
            link: "/technologies/back-end/php"
          },
          {
            title:"Python",
            link: "/technologies/back-end/python"
          }
        ]
      },
      {
        title:"Mobile",
        link: "/technologies/mobile",
        subtitle:[
          {
            title:"Android",
            link: "/technologies/mobile/android"
          },
          {
            title:"ReactNative",
            link: "/technologies/mobile/react-native"
          }
        ]
      },
      {
        title:"AI",
        link: "/technologies/ai",
        subtitle:[]
      }
    ]
  },
  {
    title: "Case Study",
    link: "/case-study",
    subtitle: []
  },
  {
    title: "Blog",
    link: "/blog",
    subtitle: []
  },
  {
    title: "About us",
    link: "/aboutus",
    subtitle: [
      {
        title:"Client/Testmonial",
        link: "/aboutus/client-testmonial",
        subtitle:[]
      },
      {
        title:"Policy",
        link: "/aboutus/privacy-policy",
        subtitle:[]
      },
      {
        title:"FAQ",
        link: "/aboutus/faq",
        subtitle:[]
      }
    ]
  },
  {
    title: "Contact",
    link: "/contact",
    subtitle: []
  }
]

export const contact = {
  companyMission:"Best solution for your it startup business consecteturadipiscing elit. Scelerisque amet odio velit  auctor. nam elit nulla.",
  tel: {
    number: "(312) 895-9800",
    href: "tel:3128959800"
  },
  email: {
    address: "hello.me@ozen.com",
    href: "mailto:hello.me@ozen.com"
  },
  address: "121 St, Melbourne VIC 3000, Australia",
  social: {
    linkedin: "https://www.linkedin.com/",
    facebook:"https://www.facebook.com/",
    twitter:"https://twitter.com/",
    messenger:"https://www.messenger.com/"
  }
}
export const footer = {
  accessMenu: [
    {
      title: "Quick Link",
      links: menuData
    },
    {
      title: "About Us",
      links: menuData[4].subtitle
    },
    {
      title: "Services",
      links: menuData[0].subtitle
    }
  ],
  news: "Best solution for your it startup business consectetur adipiscing elit."
}