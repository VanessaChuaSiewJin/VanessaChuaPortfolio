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

// School Logo
import {ReactComponent as DigipenLogo} from "./assets/images/DigiPen_SingaporeLogo_Black.svg";
import {ReactComponent as TPLogo} from "./assets/images/Temasek Polytechnic_Logo.svg";

//Achievement logo
import {ReactComponent as StarIcon} from "./assets/icons/star_icon2.svg";

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
    "https://drive.google.com/file/d/1rOd2hFvE01KEHC5idt6B7ZcFV2Y1I9C3/view?usp=sharing", // Set to empty to hide the button
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
  subTitle: "",
  skills: [
    emoji("◆ Develop interactive and game projects using Unity and PlayCanvas"),
    emoji(
      "◆ Collaborate with producers, designers, artists, 3D generalists, and animators to turn ideas into playable experiences"
    ),
    emoji(
      "◆ Prototype and iterate on interactive systems by translating Figma designs into Unity implementations and refining through playtesting"
    )
  ],

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
  display: true
};

// Education Section

const educationSection = {
  display: true,
  schools: [
    {
      schoolName:
        "DigiPen Institute of Technology (Singapore) — Singapore Institute of Technology (SIT)",
      logoComponent: DigipenLogo,
      subHeader:
        "BSc (Hons) Computer Science in Interactive Media and Game Development",
      duration: "Aug 2022 - Apr 2026",
      desc: "Specialized in interactive software and game development through team projects spanning engine-level systems and complete gameplay prototypes.",
      descBullets: [
        "Built core systems for custom-engine projects (C/C++): integrated FMOD via an internal wrapper (3D spatial audio), implemented enemy state machines, and extended math utilities",
        "Collaborated using Git workflows (branching, pull requests, code reviews, merge conflict resolution) and issue tracking (GitHub Issues)",
        "Used Unity and prototyping tools such as Figma across coursework and projects"
      ]
    },
    {
      schoolName: "Temasek Polytechnic",
      logoComponent: TPLogo,
      subHeader: "Diploma in Game Design and Development",
      duration: "Apr 2019 - May 2022",
      desc: "Built game prototypes and learned the end-to-end pipeline from development to basic 3D art.",
      descBullets: [
        "Developed team-based game projects in Unity (C#), contributing to gameplay systems and UI",
        "Created 3D assets in Maya and produced basic textures in Photoshop",
        "Prototyped designs and collaborated using tools like Adobe XD and GitHub"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Gameplay & Interaction Systems",
      progressPercentage: "70%"
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
  displayCodersrank: false
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
      desc: "Developed interactive Unity systems for large-scale exhibitions and installations.",
      descBullets: [
        "Built real-time interactive systems in Unity (C#)",
        "Implemented UI flows and touch-based input handling",
        "Translated Figma concepts into production-ready prototypes",
        "Optimized interaction logic for stable public deployment"
      ]
    },
    {
      role: "Game Design Intern",
      company: "Stepping Stone Studio LLP",
      companylogo: require("./assets/images/game_control.png"),
      date: "Jul 2021 - Nov 2021",
      desc: "Contributed to the development of a 2D mobile game in Unity.",
      descBullets: [
        "Designed and iterated 2D levels using Unity Tilemap",
        "Created pixel art assets and tilesets in Piskel",
        "Animated 2D characters using Unity Animator",
        "Refined gameplay through playtesting and iteration"
      ]
    }
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/CraveFX_Logo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

const openSource = {
  showGithubProfile: false, // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS THAT I HAVE WORKED ON",
  sections: [
    // CRAVEFX
    {
      sectionTitle: "CraveFX Projects",
      projects: [
        {
          //image: require("./assets/images/saayaHealthLogo.webp"),
          projectName: "SG60 Heart & Soul Exhibition",
          projectDesc: [
            "Interactive Developer (Unity)",
            "Built modular ScriptableObject system for dynamic visual generation",
            "Implemented JSON pipeline for cross-application design reconstruction"
          ],
          videoEmbed:
            "https://drive.google.com/file/d/1jW5gHHAXq0t45XKLLr1vZIBl8F6axWcC/preview",
          footerLink: [
            {
              name: "Visit Website",
              url: "https://www.heartandsoul.gov.sg/"
            }
          ]
        },
        // {
        //   //image: require("./assets/images/nextuLogo.webp"),
        //   projectName: "Heineken Connected Bar",
        //   projectDesc: "Interactive web for Heineken",
        //   footerLink: [
        //     {
        //       name: "Visit Website"
        //       //url: "http://nextu.se/"
        //     }
        //   ]
        // },
        {
          //image: require("./assets/images/nextuLogo.webp"),
          projectName: "T5 In The Making Exhibition",
          projectDesc: [
            "Interactive Developer (Unity)",
            "Built permutation-driven design database (56 keyword combinations)",
            "Implemented designer-defined user workflow from Figma to production",
            "Integrated QR code generation with backend API"
          ],
          videoEmbed:
            "https://drive.google.com/file/d/1XwDOMjhJ4ymsiEjRYACLl7WgszoLZTox/preview",
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
          projectDesc: [
            "Team of 13",
            "Integrated FMOD into custom engine",
            "Built 3D audio system (Source, Listener, Zones)",
            "Implemented event-driven gameplay audio",
            "Prototyped level selection flow"
          ],
          footerLink: [
            {
              name: "Watch on YouTube",
              url: "https://youtu.be/vzexESdUBdo?si=r9wKfE-LXy05UmAT"
            }
          ]
        },
        {
          projectName: "Purrfect Putt!!",
          videoEmbed:
            "https://www.youtube.com/embed/SZhhRPjjCzA?si=PADhZSFAo1OqDAw1",
          projectDesc: [
            "Team of 7",
            "Implemented AI using custom state machine",
            "Designed enemy logic (Chaser, Mage, Charger)",
            "Developed custom math library (C++)",
            "Built gameplay prototype in Unity 2D"
          ],
          footerLink: [
            {
              name: "Watch on YouTube",
              url: "https://www.youtube.com/watch?v=SZhhRPjjCzA"
            }
          ]
        },
        {
          projectName: "KoKopalms Adventure",
          videoEmbed:
            "https://www.youtube.com/embed/4aNe6FhXW7Y?si=ffIUMb7R9TeaIEaC",
          projectDesc: [
            "Team of 5",
            "Built custom in-game audio system",
            "Implemented dynamic audio loading & playback",
            "Managed sound lifecycle & grouping",
            "Designed interactive tutorial UI"
          ],
          footerLink: [
            {
              name: "Watch on YouTube",
              url: "https://www.youtube.com/watch?v=4aNe6FhXW7Y"
            }
          ]
        },
        {
          projectName: "Deflect",
          videoEmbed:
            "https://www.youtube.com/embed/6ftVcL10mJ8?si=5d2gvL0QrmuGW8Xd",
          projectDesc: [
            "Team of 5",
            "Creating enemy AI Behaviour",
            "Playtesting"
          ],
          footerLink: [
            {
              name: "Watch on YouTube",
              url: "https://www.youtube.com/watch?v=6ftVcL10mJ8"
            }
          ]
        },
        {
          projectName: "Reliving The Dead",
          videoEmbed:
            "https://www.youtube.com/embed/hd4BJYaZigs?si=BSa08D68KSurWLR6",
          projectDesc: ["Solo"],
          footerLink: [
            {
              name: "Watch on YouTube",
              url: "https://www.youtube.com/watch?v=hd4BJYaZigs"
            }
          ]
        },
        {
          projectName: "Kill & Survive",
          videoEmbed:
            "https://www.youtube.com/embed/f9s8Ke8DOqY?si=hCxldACd0ZpPy2IM",
          projectDesc: ["Solo"],
          footerLink: [
            {
              name: "Watch on YouTube",
              url: "https://www.youtube.com/watch?v=f9s8Ke8DOqY"
            }
          ]
        }
        // {
        //   projectName: "Mobile Computing Project",
        //   videoEmbed:
        //     "https://www.youtube.com/embed/1wRyfeFr7vI?si=EVQb4ybGhwqNFDdI",
        //   projectDesc: "",
        //   footerLink: [
        //     {
        //       name: "Watch on YouTube",
        //       url: "https://www.youtube.com/watch?v=1wRyfeFr7vI"
        //     }
        //   ]
        // }
      ]
    },
    {
      sectionTitle: "Temasek Polytechnic Projects",
      projects: [
        {
          projectName: "The Mini Escape",
          videoEmbed:
            "https://www.youtube.com/embed/53BLoKajY08?si=KgRkTpGKkdJB7aHd",
          projectDesc: [
            "Team of 4",
            "Level design (Total created 10 levels)",
            "2D sprite drawing",
            "Tile mapping"
          ],
          footerLink: [
            {
              name: "Watch on YouTube",
              url: "https://www.youtube.com/watch?v=53BLoKajY08"
            }
          ]
        },
        {
          projectName: "Crimson Song Adventure Gameplay",
          videoEmbed:
            "https://www.youtube.com/embed/bz4Hd1zBYNU?si=pg4VThfcYCWgKjvx",
          projectDesc: [
            "Team of 4",
            "Level design (Total created 10 levels)",
            "2D sprite drawing",
            "Tile mapping"
          ],
          footerLink: [
            {
              name: "Watch on YouTube",
              url: "https://youtu.be/bz4Hd1zBYNU?si=_a5gWzSBZNnIklvI"
            }
          ]
        },
        {
          projectName: "Ceendi vs The Sea Pollutants",
          videoEmbed:
            "https://www.youtube.com/embed/L47-fkvqpYo?si=PrF-oaKHN4ZIb8lJ",
          projectDesc: ["Team of 5", "Health system", "Timed tutorial"],
          footerLink: [
            {
              name: "Watch on YouTube",
              url: "https://youtu.be/L47-fkvqpYo?si=_dGo2W31bGySqkJp"
            }
          ]
        },
        {
          projectName: "Donutty Catch",
          videoEmbed:
            "https://www.youtube.com/embed/M1O-GwAE6wM?si=G2u2U59qbVSrWlXs",
          projectDesc: ["Solo", "Score system", "Level system", "Main menu"],
          footerLink: [
            {
              name: "Watch on YouTube",
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
          image: require("./assets/images/MuseumOfLights.png"),
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
          image: require("./assets/images/ScrapCollector.png"),
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
  title: emoji("Achievements And Recognition 🏆"),
  subtitle: "Academic awards, certifications, and distinctions",

  achievementsCards: [
    {
      title: "Edusave Merit Bursary",
      subtitle: "2020",
      icon: StarIcon,
      iconAlt: "Edusave Merit Bursary"
    },
    {
      title:
        "Edusave Award for Achievement, Good Leadership & Service (EAGLES)",
      subtitle: "2012, 2017",
      icon: StarIcon,
      iconAlt: "EAGLES Award"
    },
    {
      title: "Edusave Certificate of Academic Achievement",
      subtitle: "2015, 2016",
      icon: StarIcon,
      iconAlt: "Edusave Academic Achievement"
    },
    {
      title: "Edusave Character Award",
      subtitle: "2015",
      icon: StarIcon,
      iconAlt: "Edusave Character Award"
    },
    {
      title: "R3lse Award Winner - Resilience",
      subtitle: "2015",
      icon: StarIcon,
      iconAlt: "R3lse Award"
    },
    {
      title: "First in Computer Application (2T1)",
      subtitle: "2015",
      icon: StarIcon,
      iconAlt: "First in Computer Application"
    },
    {
      title: "First in Standard (2T1)",
      subtitle: "2015",
      icon: StarIcon,
      iconAlt: "First in Standard"
    },
    {
      title: "Model Learner Award",
      subtitle: "2015, 2018",
      icon: StarIcon,
      iconAlt: "Model Learner Award"
    },
    {
      title: "Edusave Scholarship",
      subtitle: "2013, 2014",
      icon: StarIcon,
      iconAlt: "Edusave Scholarship"
    }
  ],
  display: true
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
  number: "+65 " + 98231208,
  email_address: "vanessa.chuasiewjin.2000@gmail.com"
};

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
  isHireable,
  resumeSection
};
