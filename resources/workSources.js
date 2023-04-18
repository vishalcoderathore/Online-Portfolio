import { find } from "lodash";
import { rearrangedTechnicalSkills } from "./skillSources";

export const work = [
  {
    workId: "work1",
    organization: "Multi-Tech Systems, Inc.",
    position: "Software Engineer",
    duration: "July 2019 - Present",
    location: "Minneapolis, MN",
    description:
      "Administers and develop code on Cloud Infrastructure using Amazon Web Services. Build, test and maintain our software product i.e. Enterprise LENS to track and configure gateway devices and end devices. Create project documentation using Confluence and track projects using Jira.",
    companyLogo: "/images/mts.png",
    tech: [
      find(rearrangedTechnicalSkills, { skill: "Vue.JS" }).skillLogo,
      find(rearrangedTechnicalSkills, { skill: "RoR" }).skillLogo,
      find(rearrangedTechnicalSkills, { skill: "AWS" }).skillLogo,
      find(rearrangedTechnicalSkills, { skill: "Linux" }).skillLogo,
    ],
  },
  {
    workId: "work2",
    organization: "Multi-Tech Systems, Inc.",
    position: "Software Engineer - Intern",
    duration: "July 2018 - June 2019",
    location: "Minneapolis, MN",
    description:
      "Migrated Node-Red from existing Conduits (Routers) to the AWS Cloud infrastructure to provide improved data processing and systems engineering capabilities on the IoT devices. Developed web app using MERN stack deployed behind Nginx server for path based routing to Node-Red docker containers.",
    companyLogo: "/images/mts.png",
    tech: [
      find(rearrangedTechnicalSkills, { skill: "Mongo" }).skillLogo,
      find(rearrangedTechnicalSkills, { skill: "Express" }).skillLogo,
      find(rearrangedTechnicalSkills, { skill: "React.JS" }).skillLogo,
      find(rearrangedTechnicalSkills, { skill: "Node.JS" }).skillLogo,
    ],
  },
  {
    workId: "work3",
    organization: "Sherwin Williams",
    position: "Full Stack Developer",
    duration: "August 2016 - August 2017",
    location: " Cleveland, OH",
    description:
      "Worked on upgrading Physical Inventory Adjustment (PIA), and added new functionalities ranging from front end to back end. The application is used in all 4000 SW stores across U.S. and Canada by the store managers to track their inventory online.",
    companyLogo: "/images/sherwin.png",
    tech: [
      find(rearrangedTechnicalSkills, { skill: "Java" }).skillLogo,
      find(rearrangedTechnicalSkills, { skill: "React.JS" }).skillLogo,
      find(rearrangedTechnicalSkills, { skill: "Spring_Boot" }).skillLogo,
      find(rearrangedTechnicalSkills, { skill: "Oracle" }).skillLogo,
    ],
  },
  {
    workId: "work4",
    organization: "Wells Fargo",
    position: "Java Developer",
    duration: "July 2015 - July 2016",
    location: "Philadelphia, PA",
    description:
      "Worked on upgrading Cyber Bank Reports (CBR), that provides internal customers of the bank the ability to login and check their accounts with the bank online and download the transaction reports pdf's.",
    companyLogo: "/images/wf.png",
    tech: [
      find(rearrangedTechnicalSkills, { skill: "Java" }).skillLogo,
      find(rearrangedTechnicalSkills, { skill: "Angular.JS" }).skillLogo,
      find(rearrangedTechnicalSkills, { skill: "Oracle" }).skillLogo,
      find(rearrangedTechnicalSkills, { skill: "PL/SQL" }).skillLogo,
    ],
  },
];
