const works = [
    {
      id: 0,
      name: 'chatout',
      url: 'https://chatout.vercel.app/',
      imgUrl: '/chatout-desktop.png',
      description: "A chat application with some features of FB's messenger app. A user should create an account to use this app.",
      techStack: ["HTML5", "CSS3", "NEXT JS", "Firebase"],
      isItResponsive: true,
      hasAccount: true,
      account: {email: 'rose@gmail.com' , password: 'test1234'},
      slug: 'chatout'
    },
    {
      id: 1,
      name: 'wooz that pokemon',
      url: 'https://wooz-that-pokemon.vercel.app/',
      imgUrl: '/wtp-home.png',
      description: `A browser game inspired by Pokemon's mini-game segment "Who's that Pokemon" where the player guess the pokemon behind its silhouette form.`,
      techStack: ["HTML5", "CSS3", "VUE JS","vuex", "Firebase", "SASS" ],
      isItResponsive: false,
      hasAccount: true,
      account: {email: 'uwang@gmail.com' , password: 'test1234'},
      slug: 'wooz-that-pokemon'
    },
    {
      id: 2,
      name: 'monster match',
      url: 'https://monster-match.vercel.app/',
      imgUrl: '/mm.png',
      description: `A memory game in which all of the tiles are laid face down on a surface. The object of the game is to turn over pairs of matching object.`,
      techStack: ["HTML5", "CSS3", "NEXTJS", "Redux toolkit"],
      isItResponsive: true,
      hasAccount: false,
      account: {},
      slug: 'monster-match'
    }
  ]

  const graphicDesigns = []

  export {works,graphicDesigns}