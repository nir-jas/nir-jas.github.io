module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://nir-jas.github.io`,
    // Your Name
    name: 'Nirmal Jasmatiya',
    // Main Site Title
    title: `Nirmal Jasmatiya | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `Full Stack Developer based in Bangalore, India.`,
    // Optional: Twitter account handle
    author: `@nir_jaz`,
    // Optional: Github account URL
    github: `https://github.com/nir-jas`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/nirmaljasmatiya/`,
    // Content of the About Me section
    about: `Master of Computer Applications from AMCEC, VTU. I have 5 years of experience in software development. I will be happy to craft a state of the art product using the following techs: Node, Express, Adonis, HTML, CSS, JavaScript, TypeScript, Vue, React, Angular, MySQL, MongoDB, Redis, GCP, AWS, DigitalOcean, Python, PHP, Laravel, Git, Docker. I am familiar with many others, but these are my favorite. I would always love to expand my knowledge and have hands on other programming languages as well.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'URL short',
        description:
          'A URL shortener web application based on the AdonisJS Framework. It is an open-source and easy-to-use URL shortener. It allows you to host your own URL shortener, and gives you many useful features.',
        link: 'https://github.com/nir-jas/adonis-url-short',
      },
      {
        name: 'Twitter Helpdesk',
        description:
          'This app will allow clients to connect their twitter accounts, fetch their tweets and reply to them within the application.',
        link: 'https://github.com/nir-jas/twitter-helpdesk-app',
      },
      {
        name: 'Vue Chat App',
        description:
          'Simple group chat application built with Vue, Socket.io & Adonis JS.',
        link: 'https://github.com/nir-jas/vue-auth-chat',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Powerplay',
        description: 'Senior Backend Engineer, June 2021 - Present',
        link: 'https://getpowerplay.in',
      },
      {
        name: 'Multibhashi',
        description: 'Lead Full-Stack Developer, March 2018 - June 2021',
        link: 'https://multibhashi.com',
      },
      {
        name: 'Itilite',
        description: 'Full-Stack Developer, June 2017 - March 2018',
        link: 'https://itilite.com',
      },
      {
        name: 'HappyLocate',
        description: 'Software Developer, January 2017 - June 2017',
        link: 'https://happylocate.com',
      },
      {
        name: 'TripMidas',
        description: 'Junior Programmer, April 2016 - January 2017',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript, TypeScript, Node.js, Express.js, Adonis.js, Vue, React, Angular,  Python, PHP, Laravel',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL, DynamoDB',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), Google Cloud Platform (GCP), DigitalOcean, CI / CD, Microservices, API design, Agile / Scrum, System Design',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-160304446-2`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nirmal Jasmatiya`,
        short_name: `Nirmal`,
        start_url: `/`,
        background_color: `#2f3e46`,
        theme_color: `#2f3e46`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
