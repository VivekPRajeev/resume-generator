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
  basicInfo,
  educationGroup,
  experienceGroup,
  professionalSummery,
  skillGroup,
} from "../../atoms/formAtoms";

const TemplateA = () => {
  const basicInfoValue = useAtomValue(basicInfo);
  const skillValue = useAtomValue(skillGroup);
  const summary = useAtomValue(professionalSummery);
  const workExp = useAtomValue(experienceGroup);
  const education = useAtomValue(educationGroup);
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
        <ul className="grid grid-cols-2  list-disc list-inside text-sm">
          <li> English (C1-C2)</li>
          <li> German (A1-A2) - Studying to reach B1-B2</li>
          <li> Hindi (B1)</li>
          <li> Malayalam (C2)</li>
        </ul>
      </Section>

      <Section title="Certificates">
        <ul className="grid grid-cols-2 list-disc list-inside text-sm">
          <li>Cutshort Certified JavaScript – Advanced (Feb 2025)</li>
          <li>IT Security Foundations – LinkedIn (Jul 2024)</li>
          <li>React: Software Architecture – LinkedIn (Aug 2021)</li>
        </ul>
      </Section>

      <section className="mb-6 text-left">
        <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">
          Availability
        </h2>
        <p className="text-sm">Available to start immediately</p>
      </section>

      <section className="text-left">
        <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">
          Interests
        </h2>
        <p className="text-sm">
          UI/UX design, performance optimization, AI in frontend, relocation
          within Germany
        </p>
      </section>
    </div>
  );
};

export default TemplateA;
