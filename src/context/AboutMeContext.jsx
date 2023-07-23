import { useState, createContext } from "react";
import { aboutMeData } from "../data/aboutMeData";
import { skillsHeading as skillsPageHeading } from "../data/clientsData";
import { skillsData as skillsDataJson } from "../data/clientsData";

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
  const [aboutMe, setAboutMe] = useState(aboutMeData);

  const skillsHeading = skillsPageHeading;

  const [skillsData, setSkillsData] = useState(skillsDataJson);

  return (
    <AboutMeContext.Provider
      value={{
        aboutMe,
        setAboutMe,
        skillsHeading,
        skillsData,
        setSkillsData,
      }}
    >
      {children}
    </AboutMeContext.Provider>
  );
};

export default AboutMeContext;
