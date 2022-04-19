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
    },
    {
      id: 3,
      name: 'Skyflix (Movie App)',
      url: 'https://movie-app-tan.vercel.app/',
      imgUrl: '/movie-app.png',
      description: `A typical movie app that you can filter by genres or sort the list of movies or tv shows. You can view each movie and tv shows details. You can search as well your favorite movies and tv shows.
      I used Client-Side Rendering Architechture for getting the list of all movies and tv shows, and Server-side Rendering for each movie and tv show details. As you can see when you go to each movie and tv show details there is no loading state as it is pre-rendered on a server compare to Client-Side rendering.`,
      techStack: ["HTML5", "CSS3 (TailwindCSS)", "NEXTJS", "React Query" , "Zustand(State Management)"],
      isItResponsive: true,
      hasAccount: false,
      account: {},
      slug: 'sky-flix'
    }
  ]

  const graphicDesigns = []

  export {works,graphicDesigns}