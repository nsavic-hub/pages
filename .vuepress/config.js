module.exports = {
  title: "Freightmate",
  description: "Your Comprehensive User Guide",
  themeConfig: {
    editLinks: true,
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Contact", link: "mailto:devops@freightmate.com" },
      { text: "Login", link: "https://freightmate.com/login" }
    ],
    smoothScroll: true
  },
  sidebar: {
    '/guide/': [
      {
        text: 'Getting Started',
        link: '/guide/getting-started/',
      },
      {
        text: 'Usage',
        link: '/guide/usage/',
      },
    ],
  },
  publicPath: process.env.NODE_ENV === "production" ? "/REPO_NAME/" : "/",
}
