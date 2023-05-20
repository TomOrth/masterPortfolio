/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Tom Orth's Portfolio",
  description:
    "A developer interested in working on machine learning algorithms and machine learning systems that deliver high impact.",
  og: {
    title: "Tom Orth's Portfolio",
    type: "website",
    url: "thomasjorth.com",
  },
};

//Home Page
const greeting = {
  title: "Tom Orth",
  logo_name: "TomOrth",
  nickname: "",
  subTitle:
    "A developer interested in working on machine learning algorithms and machine learning systems that deliver high impact.",
  resumeLink:
    "https://drive.google.com/file/d/1KaTj_V_1CeMsEK995B0pRKynGJxPOM7T/view?usp=sharing",
  githubProfile: "https://github.com/TomOrth",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/TomOrth",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/tomorth/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
      ],
      softwareSkills: [
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikit-learn",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Huggingface",
          fontAwesomeClassname: "noto-v1:hugging-face",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Learning to develop mobile apps using Flutter, Kotlin, and Swift",
        "⚡ Creating application backend in Flask and FastAPI",
      ],
      softwareSkills: [
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "devicon:fastapi",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "logos:flask",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "devicon:kotlin",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Swift",
          fontAwesomeClassname: "logos:swift",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Infrastructure and DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on both cloud and on-prem clusters",
        "⚡ Well-versed in tools to containerize microservices and service components such as databases",
        "⚡ Deploying deep learning models for use within different applications",
        "⚡ Developed CI/CD pipelines to ensure software is maintained and highly tested",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "OpenShift",
          fontAwesomeClassname: "logos:openshift",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "The College of New Jersey (TCNJ)",
      subtitle: "B.S. in Computer Science",
      logo_path: "tcnj.png",
      alt_name: "tcnj",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, OS and Software Engineering",
        "⚡ Apart from this, I have done courses on Artificial Intelligence, Human Computer Interaction, Information Retrieval, and Database Systems.",
        "⚡ I did research in different areas under different advisors include Machine Learning + Natural Language Processing, and Machine Learning + Human-Computer Interaction",
      ],
      website_link: "https://tcnj.edu",
    },
    {
      title: "Georgia Institute of Technology",
      subtitle: "M.S. in Computer Science, Machine Learning Specialization",
      logo_path: "gatech.png",
      alt_name: "Georgia Tech",
      duration: "2022 - Present",
      descriptions: [
        "⚡ I am taking classes related to Machine Learning, Deep Learning, etc.",
      ],
      website_link: "https://omscs.gatech.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning Engineer",
      subtitle: "- Udacity",
      logo_path: "udacity.jpeg",
      certificate_link:
        "https://www.linkedin.com/in/tomorth/details/education/1611092034020/single-media-viewer/?type=DOCUMENT&profileId=ACoAABjOl88BWiLCTCFjx1zSzt8lN6F-NJXndV8",
      alt_name: "Udacity",
      color_code: "#FFFFFF",
    },
    {
      title: "Deep Learning",
      subtitle: "- Udacity",
      logo_path: "udacity.jpeg",
      certificate_link:
        "https://www.linkedin.com/in/tomorth/details/education/1635468368684/single-media-viewer/?profileId=ACoAABjOl88BWiLCTCFjx1zSzt8lN6F-NJXndV8",
      alt_name: "Udacity",
      color_code: "#FFFFFF",
    },
    {
      title: "Deep Reinforcement Learning",
      subtitle: "- Udacity",
      logo_path: "udacity.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1OskgP2p8Y7vLRjcVg27_rcOkTjRWzYWz/view",
      alt_name: "RL",
      color_code: "#FFFFFF",
    },
    {
      title: "Computer Vision 1 (Python)",
      subtitle: "- OpenCV",
      logo_path: "opencv.png",
      certificate_link:
        "https://drive.google.com/file/d/10t7wl270zA8dc_ybM7mPK6zYSQBKV61D/view",
      alt_name: "OpenCV",
      color_code: "#FFFFFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've worked at different companies, doing a range of tasks including AI/ML, full stack web development, and data engineering",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "AI/ML Engineer",
          company: "Lockheed Martin",
          company_url: "https://lockheedmartin.com/",
          logo_path: "lockheed.png",
          duration: "June 2022 - Present",
          location: "Remote",
          description:
            "I'm currently working on a set of highly tested and versatile python modules to advance AI across Lockheed Martin's business. I'm researching, implementing, and integrated best of breed AI research in Computer Vision. I regularly meet with stakeholders to ensure that the modules solve their needs. I also work a project usign Natural Language Processing in order to classify different LM documents with the proper government labels. I previously worked on a program dedicated to using AI/ML to enhance wildfire suppression systems.",
          color: "#0879bf",
        },
        {
          title: "Associate AI/ML Engineer",
          company: "Lockheed Martin",
          company_url: "https://www.lockheedmartin.com/",
          logo_path: "lockheed.png",
          duration: "June 2021 - June 2022",
          location: "Remote",
          description:
            "When I joined Lockheed, I was placed on a program dedicated to developing AI/ML systems in order to improve wildfire supression efforts. I developed different microservices with python, golang and gRPC in order to deploy Computer Vision and Geospatial algorithms to edge devices. I transitioned into working on AI algorithms where I developed a segmentation model in order to segment in a given image where a fire is located.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "Lockheed Martin",
          company_url: "https://www.lockheedmartin.com",
          logo_path: "lockheed.png",
          duration: "June 2020 - Aug 2020",
          location: "Remote",
          description:
            "I worked with a team to develop an end-to-end platform for training machine learning models. I worked adding features to microservices to allow for datalake management and model training. I also worked on a research project related to predictive maintenance of undersea equipment where a small team and I developed autoencoders for anomaly detection.",
          color: "#000000",
        },
        {
          title: "Software Engineering Intern",
          company: "Tabula Rasa Healthcare",
          company_url: "https://www.tabularasahealthcare.com",
          logo_path: "trhc.png",
          duration: "Dec 2019 - Jan 2020",
          location: "Moorestown, NJ",
          description:
            "I worked on creating a set of software tools to aid QA engineers in performing end-to-end tests of the software product. I regularly addressed feature requests and pushed out new semantic versions when relevant.",
          color: "#84bf42",
        },
        {
          title: "Software Engineering Intern",
          company: "AT&T",
          company_url: "https://www.att.com/",
          logo_path: "att.png",
          duration: "June 2019 - Aug 2019",
          location: "Middletown, New Jersey",
          description:
            "As a member of the Chief Security Office (CSO), I was able to work on Apache Spark pipelines related to network data. I improved multiple legacy pipelines in order to 40% faster and put less load on the server.",
          color: "#009fdd",
        },
        {
          title: "Software Engineering Intern",
          company: "Lockheed Martin",
          company_url: "https://www.lockheedmartin.com",
          logo_path: "lockheed.png",
          duration: "June 2018 - Aug 2018",
          location: "Moorestown, New Jersey",
          description:
            "I worked on an Agile team to provide updates to operational readiness software for Lockheed's warships. I collaborated with engineers to maintain the codebase to a high quality.",
          color: "#000000",
        },
        {
          title: "Software Engineering Intern",
          company: "Lockheed Martin",
          company_url: "https://www.lockheedmartin.com",
          logo_path: "lockheed.png",
          duration: "June 2017 - Aug 2017",
          location: "Moorestown, New Jersey",
          description:
            "I was the sole developer on a full-stack web application meant to service different program management tickets. I revitalized the stack to use modern technologies and provide more flexibility to the end user.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me.jpeg",
    description: "",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
