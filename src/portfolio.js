/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Importation of Icons (software skills)
import {ReactComponent as PlayCanvasIcon} from "./assets/icons/playcanvas_icon.svg";
import {ReactComponent as AdobeXDIcon} from "./assets/icons/adobexd_icon.svg";
import {ReactComponent as CPPIcon} from "./assets/icons/cpp_icon.svg";
import {ReactComponent as CSharpIcon} from "./assets/icons/csharp_icon.svg";
import {ReactComponent as PhotoShopIcon} from "./assets/icons/photoshop_icon.svg";

import {ReactComponent as DigipenLogo} from "./assets/images/DigiPen_SingaporeLogo_Black.svg";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "VC",
  title: "Hi, I'm Vanessa Chua",
  subTitle: emoji(
    "I am a game and interactive developer who enjoys learning and exploring new ideas. I work primarily with Unity, using C# and C++ to build engaging interactive experiences and real-time systems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/B0B0ChaCha",
  linkedin: "https://www.linkedin.com/in/vanessa-chua-siew-jin",
  gmail: "vanessa.chuasiewjin.2000@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Game and interactive developer driven by curiosity, experimentation, and a love for games.",
  skills: [
    emoji("◆ Develop interactive and game projects using Unity and PlayCanvas"),
    emoji(
      "◆ Collaborate with producers, designers, artists, 3D generalists, and animators to turn ideas into playable experiences"
    ),
    emoji(
      "◆ Prototype and iterate on interactive systems by translating Figma designs into Unity implementations and refining through playtesting"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      category: "Engines",
      skills: [
        {skillName: "Unity", fontAwesomeClassname: "fa-brands fa-unity"},
        {skillName: "PlayCanvas", svgIcon: PlayCanvasIcon}
      ]
    },
    {
      category: "Languages",
      skills: [
        {skillName: "C#", svgIcon: CSharpIcon},
        {skillName: "C++", svgIcon: CPPIcon}
        //{ skillName: "C", imageSrc: require("./assets/icons/c.png") }
      ]
    },
    {
      category: "Tools",
      skills: [
        {skillName: "GitHub", fontAwesomeClassname: "fab fa-github"},
        {skillName: "Visual Studio", fontAwesomeClassname: "fas fa-code"},
        {skillName: "Notion", fontAwesomeClassname: "fab fa-notion"},
        {skillName: "Figma", fontAwesomeClassname: "fab fa-figma"},
        {skillName: "AdobeXD", svgIcon: AdobeXDIcon},
        {skillName: "Photoshop", svgIcon: PhotoShopIcon}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationSection = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName:
        "DigiPen Institute of Technology Singapore (Singapore Institute of Technology)",
      logoComponent: DigipenLogo,
      subHeader:
        "BSc (Hons) in Computer Science in Interactive Media and Game Development",
      duration: "August 2022 - April 2026",
      desc: "Studied programming and interactive development with an emphasis on game-related projects.",
      descBullets: [
        "Worked on group projects involving the development of a game engine and a complete game",
        "Gained hands-on experience with programming languages including C, C++, C#, and Python",
        "Used tools and software including Unity, Figma, Axure, and GitHub"
      ]
    }
    // { // Will put TP in it
    //   schoolName: "Temasek Polytechnic",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Gameplay & Interaction Systems", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Game Engines & Tooling",
      progressPercentage: "60%"
    },
    {
      Stack: "Design & Prototyping",
      progressPercentage: "55%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Interactive Media and Game Developer Intern",
      company: "CraveFX",
      companylogo: require("./assets/images/CraveFX_Logo.png"),
      date: "May 2025 - Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS THAT I HAVE WORKED ON",
  sections: [
    // CRAVEFX
    {
      sectionTitle: "Internship Projects",
      projects: [
        {
          image: require("./assets/images/saayaHealthLogo.webp"),
          projectName: "SG60 Heart & Soul Exhibition",
          projectDesc: "Worked on Arrival Feature Wall & Home Is A Feeling",
          footerLink: [
            {
              name: "Visit Website",
              url: "https://www.heartandsoul.gov.sg/"
            }
          ]
        },
        {
          image: require("./assets/images/nextuLogo.webp"),
          projectName: "Heineken Connected Bar",
          projectDesc: "Interactive web for Heineken",
          footerLink: [
            {
              name: "Visit Website",
              url: "http://nextu.se/"
            }
          ]
        },
        {
          image: require("./assets/images/nextuLogo.webp"),
          projectName: "T5 In The Making Exhibition",
          projectDesc: "Worked on kiosk interactivity",
          footerLink: [
            {
              name: "Visit Website",
              url: "https://www.changiairport.com/en/happenings/events-directory/t5-in-the-making.html"
            }
          ]
        }
      ]
    },
    // DIGIPEN
    {
      sectionTitle: "Digipen School Projects",
      projects: [
        {
          image: require("./assets/images/nextuLogo.webp"),
          projectName: "Keep It Brief",
          videoEmbed:
            "https://www.youtube.com/embed/vzexESdUBdo?si=1quqgs-95J-v1ejV",
          projectDesc: "",
          footerLink: [
            {
              //PUT VIDEO
              name: "Watch on YouTube",
              url: "https://youtu.be/vzexESdUBdo?si=r9wKfE-LXy05UmAT"
            }
          ]
        },
        {
          //image: require("./assets/images/nextuLogo.webp"),
          projectName: "Purrfect Putt!!",
          videoEmbed:
            "https://www.youtube.com/embed/SZhhRPjjCzA?si=PADhZSFAo1OqDAw1",
          projectDesc: "",
          footerLink: [
            {
              //PUT VIDEO
              name: "Watch on YouTube",
              url: "https://www.youtube.com/watch?v=SZhhRPjjCzA"
            }
          ]
        },
        {
          //image: require("./assets/images/nextuLogo.webp"),
          projectName: "KoKopalms Adventure",
          videoEmbed:
            "https://www.youtube.com/embed/4aNe6FhXW7Y?si=ffIUMb7R9TeaIEaC",
          projectDesc: "",
          footerLink: [
            {
              //PUT VIDEO
              name: "Watch on YouTube",
              url: "https://www.youtube.com/watch?v=4aNe6FhXW7Y"
            }
          ]
        },
        {
          //image: require("./assets/images/nextuLogo.webp"),
          projectName: "Deflect",
          videoEmbed:
            "https://www.youtube.com/embed/6ftVcL10mJ8?si=5d2gvL0QrmuGW8Xd",
          projectDesc: "",
          footerLink: [
            {
              //PUT VIDEO
              name: "Watch on YouTube",
              url: "https://www.youtube.com/watch?v=6ftVcL10mJ8"
            }
          ]
        },
        {
          //image: require("./assets/images/nextuLogo.webp"),
          projectName: "Reliving The Dead",
          videoEmbed:
            "https://www.youtube.com/embed/hd4BJYaZigs?si=BSa08D68KSurWLR6",
          projectDesc: "",
          footerLink: [
            {
              //PUT VIDEO
              name: "Watch on YouTube",
              url: "https://www.youtube.com/watch?v=hd4BJYaZigs"
            }
          ]
        },
        {
          //image: require("./assets/images/nextuLogo.webp"),
          projectName: "Kill & Survive",
          videoEmbed:
            "https://www.youtube.com/embed/f9s8Ke8DOqY?si=hCxldACd0ZpPy2IM",
          projectDesc: "",
          footerLink: [
            {
              //PUT VIDEO
              name: "Watch on YouTube",
              url: "https://www.youtube.com/watch?v=f9s8Ke8DOqY"
            }
          ]
        },
        {
          //image: require("./assets/images/nextuLogo.webp"),
          projectName: "Mobile Computing Project",
          videoEmbed:
            "https://www.youtube.com/embed/1wRyfeFr7vI?si=EVQb4ybGhwqNFDdI",
          projectDesc: "",
          footerLink: [
            {
              //PUT VIDEO
              name: "Watch on YouTube",
              url: "https://www.youtube.com/watch?v=1wRyfeFr7vI"
            }
          ]
        }
      ]
    },
    {
      sectionTitle: "Temasek Polytechnic Projects",
      projects: [
        {
          //image: require("./assets/images/nextuLogo.webp"),
          projectName: "The Mini Escape",
          videoEmbed:
            "https://www.youtube.com/embed/53BLoKajY08?si=KgRkTpGKkdJB7aHd",
          projectDesc: "",
          footerLink: [
            {
              //PUT VIDEO
              name: "Watch on YouTube",
              url: "https://www.youtube.com/watch?v=53BLoKajY08"
            }
          ]
        },
        {
          //image: require("./assets/images/nextuLogo.webp"),
          projectName: "Crimson Song Adventure Gameplay",
          videoEmbed:
            "https://www.youtube.com/embed/bz4Hd1zBYNU?si=pg4VThfcYCWgKjvx",
          projectDesc: "",
          footerLink: [
            {
              //PUT VIDEO
              name: "Watch on YouTube",
              url: "https://youtu.be/bz4Hd1zBYNU?si=_a5gWzSBZNnIklvI"
            }
          ]
        },
        {
          //image: require("./assets/images/nextuLogo.webp"),
          projectName: "Ceendi vs The Sea Pollutants",
          videoEmbed:
            "https://www.youtube.com/embed/L47-fkvqpYo?si=PrF-oaKHN4ZIb8lJ",
          projectDesc: "",
          footerLink: [
            {
              //PUT VIDEO
              name: "Watch on YouTube",
              url: "https://youtu.be/L47-fkvqpYo?si=_dGo2W31bGySqkJp"
            }
          ]
        },
        // {
        //   //image: require("./assets/images/nextuLogo.webp"),
        //   projectName: "Sugar Control",
        //   projectDesc: "",
        //   footerLink: [
        //     {
        //       //PUT VIDEO
        //       name: "",
        //       url: ""
        //     }
        //   ]
        // },
        {
          image: require("./assets/images/nextuLogo.webp"),
          projectName: "Donutty Catch",
          videoEmbed:
            "https://www.youtube.com/embed/M1O-GwAE6wM?si=G2u2U59qbVSrWlXs",
          projectDesc: "",
          footerLink: [
            {
              //PUT VIDEO
              name: "",
              url: "https://www.youtube.com/watch?v=M1O-GwAE6wM"
            }
          ]
        }
      ]
    },

    {
      sectionTitle: "Game Jams",
      sectionLink: {
        label: "itch.io",
        url: "https://b0b0chacha.itch.io/"
      },
      projects: [
        {
          image: require("./assets/images/nextuLogo.webp"),
          projectName: "Museum of lights",
          projectDesc: "",
          footerLink: [
            {
              name: "Visit Game",
              url: "https://jarrett-ang.itch.io/museum-of-lights"
            }
          ]
        },
        {
          image: require("./assets/images/nextuLogo.webp"),
          projectName: "Scrap Collector",
          projectDesc: "",
          footerLink: [
            {
              name: "Visit Game",
              url: "https://cheekyknob.itch.io/scrap-collector"
            }
          ]
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: emoji("Resume"),
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+65 98231208",
  email_address: "vanessa.chuasiewjin.2000@gmail.com"
};

// Twitter Section

// const twitterDetails = {
//   userName: "twitter", //Replace "twitter" with your twitter username without @
//   display: true // Set true to display this section, defaults to false
// };

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationSection,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  //twitterDetails,
  isHireable,
  resumeSection
};
