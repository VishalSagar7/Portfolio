import myWatchlist from "./imgs/myWatchlist.png"
import myBlogimg from './imgs/myBlog.png'
import Connect from './imgs/Connect.png';
import SocialMedia from './imgs/SocialMedia.png';

export const projectsArray = [
    {
        title: "myWatchlist",
        hostedlink: 'https://frolicking-liger-91d98e.netlify.app/',
        githublink : 'https://github.com/VishalSagar7/myWatchlist_frontend.git',
        description: 'lorem ipsum asfio asodif n aoiehf ashdf asfoyercccc goiuieuro gosidgy rn oiusdgyyaudfyoaudfjlae  euyafhadfoadfh auyf aof afdhiausdfui aosfyeuhncgooadkf ausfhiasudg',
        image : myWatchlist,
        
    },
    // {
    //     title: "myBlog",
    //     hostedlink: 'https://mybblogapp.netlify.app/',
    //     githublink : 'https://github.com/VishalSagar7/Blog_app_frontend.git',
    //     description: 'lorem ipsum asfio asodif n aoiehf ashdf asfoyercccc goiuieuro gosidgy rn oiusdgyyaudfyoaudfjlae  euyafhadfoadfh auyf aof afdhiausdfui aosfyeuhncgooadkf ausfhiasudg',
    //     image : myBlogimg,
    // },
    {
        title: "Connect-Real-time Chat App",
        hostedlink: 'https://connect-chat-app.onrender.com/',
        githublink: 'https://github.com/VishalSagar7/Connect-chat-app.git',
        description: "Built a real-time chat application using MERN, Socket.io, and Zustand for state management. Implemented protected routes,jwt authentication for secure access and styled the UI with DaisyUI and Tailwind CSS for a modern, responsive design.",
        image: Connect,
    },
    {
        title: "Social-Media app",
        hostedlink: 'https://socialmedia2-z3qi.onrender.com',
        githublink: 'https://github.com/VishalSagar7/SocialMedia2.git',
        description: "Developed a full-stack social media application using MERN, featuring functionalities such as image posting, real-time chat, comments, post saving, and follow/unfollow options. Integrated JWT authentication with protected routes to ensure secure user access. Utilized Socket.io for real-time interactions and Redux Toolkit for efficient state management. Styled the application with Tailwind CSS,Cloudinry for hosting images.",
        image: SocialMedia,
    },
]