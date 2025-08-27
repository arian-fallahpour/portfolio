import mcMasterLogoSrc from "@/public/images/logo-mcmaster.png";
import azureLogoSrc from "@/public/images/certificates/azure.svg";
import udemyCertificate1Src from "@/public/images/certificates/javascript.jpg";
import udemyCertificate2Src from "@/public/images/certificates/nodejs.jpg";
import udemyCertificate3Src from "@/public/images/certificates/react.jpg";

const educationData = {
  university: {
    imageSrc: mcMasterLogoSrc,
    name: "McMaster University",
    program: "Software Engineering (Co-op)",
    list: [
      "Programmed a drone to autonomously navigate a simulated island",
      "Led a team of 4 to develop a full-stack web application for booking study rooms on campus",
      "Developed a mobile app that helps users find nearby hiking trails using React Native",
    ],
  },
  certifications: {
    count: 6,
    azureLogoSrc,
    udemyLogos: [udemyCertificate1Src, udemyCertificate2Src, udemyCertificate3Src],
    list: [
      "React - The Complete Guide 2024 (incl. Next.js, Redux) [2yrs]",
      "Node.js, Express, MongoDB & More: The Complete Bootcamp [4yrs]",
      "The Complete JavaScript Course 2024: From Zero to Expert! [4yrs]",
      "and more...",
    ],
  },
};

export default educationData;
