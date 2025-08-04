import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faEarthEurope,
  faEnvelope,
  faLocationDot,
  faPassport,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import HeaderLabel from "../../components/HeaderLabel";
import WorkExperience from "../../components/WorkExperience";
import Section from "../../components/Section";
import Skills from "../../components/Skills";
import { useAtomValue } from "jotai";
import {
  availability,
  basicInfo,
  certificationList,
  educationGroup,
  experienceGroup,
  interests,
  languageList,
  professionalSummery,
  skillGroup,
} from "../../atoms/formAtoms";
import ColumnList from "../../components/ColumnList";

const TemplateA = () => {
  const basicInfoValue = useAtomValue(basicInfo);
  const skillValue = useAtomValue(skillGroup);
  const summary = useAtomValue(professionalSummery);
  const workExp = useAtomValue(experienceGroup);
  const education = useAtomValue(educationGroup);
  const language = useAtomValue(languageList);
  const certificates = useAtomValue(certificationList);
  const availabilityValue = useAtomValue(availability);
  const interestsValue = useAtomValue(interests);
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800 font-sans">
      <header className="text-center mb-5">
        <h1 className="text-3xl font-bold">{basicInfoValue.name}</h1>
        <h2 className="text-2xl font-bold">{basicInfoValue.title}</h2>
        <p className="text-sm mt-1">
          {basicInfoValue.location && (
            <>
              <HeaderLabel
                icon={faLocationDot}
                label={basicInfoValue.location}
              />{" "}
              |
            </>
          )}
          {basicInfoValue.phone && (
            <>
              <HeaderLabel icon={faPhone} label={basicInfoValue.phone} /> |
            </>
          )}
          {basicInfoValue.email && (
            <>
              <HeaderLabel
                icon={faEnvelope}
                label={basicInfoValue.email}
                href={`mailto:${basicInfoValue.email}`}
              />{" "}
              |
            </>
          )}
          {basicInfoValue.linkedin && (
            <>
              <HeaderLabel
                icon={faLinkedin}
                target="_blank"
                href={basicInfoValue.linkedin}
                rel="noopener noreferrer"
                label="LinkedIn Profile"
              />{" "}
              |
            </>
          )}
          {basicInfoValue.github && (
            <>
              <HeaderLabel
                icon={faGithub}
                target="_blank"
                href={basicInfoValue.github}
                rel="noopener noreferrer"
                label="Github"
              />
            </>
          )}
        </p>
        <p className="text-sm mt-1">
          {basicInfoValue.dob && (
            <>
              <FontAwesomeIcon icon={faCalendarDay} /> Date of Birth:{" "}
              {basicInfoValue.dob} |{" "}
            </>
          )}
          {basicInfoValue.nationality && (
            <>
              <FontAwesomeIcon icon={faEarthEurope} /> Nationality:{" "}
              {basicInfoValue.nationality} |{" "}
            </>
          )}
          {basicInfoValue.visa && (
            <>
              <FontAwesomeIcon icon={faPassport} />
              Visa: {basicInfoValue.visa}
            </>
          )}
        </p>
      </header>
      <Section title="Professional Summary">
        <p className="text-sm mt-1">{summary}</p>
      </Section>
      <Section title="Skills">
        <Skills skillData={skillValue} />
      </Section>
      <Section title="Work Experience">
        {workExp.map((work) => (
          <WorkExperience
            key={work.title}
            achievements={work.achievements}
            companyName={work.organization}
            startDate={work.from}
            endDate={work.to}
            jobTitle={work.title}
            location={work.location}
            description={work.description}
          />
        ))}
      </Section>
      <Section title="Education">
        {education.map((edu) => (
          <WorkExperience
            companyName={edu.organization}
            location={edu.location}
            jobTitle={edu.title}
            startDate={edu.from}
            endDate={edu.to}
            description={edu.description}
            achievements={[]}
          />
        ))}
      </Section>
      <div className="print:page-break"></div>
      <Section title="Languages" className="print:pt-10">
        <ColumnList listElems={language} />
      </Section>

      <Section title="Certificates">
        <ColumnList listElems={certificates} />
      </Section>
      <Section title="Availability">
        <p className="text-sm">{availabilityValue}</p>
      </Section>
      <Section title="Interests">
        <p className="text-sm">{interestsValue}</p>
      </Section>
    </div>
  );
};

export default TemplateA;
