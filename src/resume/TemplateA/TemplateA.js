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
  experienceGroup,
  professionalSummery,
  skillGroup,
} from "../../atoms/formAtoms";

const TemplateA = () => {
  const skillValue = useAtomValue(skillGroup);
  const summary = useAtomValue(professionalSummery);
  const workExp = useAtomValue(experienceGroup);
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800 font-sans">
      <header className="text-center mb-5">
        <h1 className="text-3xl font-bold">Vivek Pulimparambil Rajeev</h1>
        <h2 className="text-2xl font-bold">Senior Software Engineer</h2>
        <p className="text-sm mt-1">
          <HeaderLabel icon={faLocationDot} label={" Hamburg, Germany "} /> |
          <HeaderLabel icon={faPhone} label={" +49 1575 6609725 "} /> |
          <HeaderLabel
            icon={faEnvelope}
            label={"vivek.rajeev.09@gmail.com"}
            href="mailto:vivek.rajeev.09@gmail.com"
          />{" "}
          |
          <HeaderLabel
            icon={faLinkedin}
            target="_blank"
            href="https://www.linkedin.com/in/vivekprajeev"
            rel="noopener noreferrer"
            label="LinkedIn Profile"
          />{" "}
          |
          <HeaderLabel
            icon={faGithub}
            target="_blank"
            href="https://github.com/VivekPRajeev"
            rel="noopener noreferrer"
            label="Github"
          />
        </p>
        <p className="text-sm mt-1">
          <FontAwesomeIcon icon={faCalendarDay} /> Date of Birth: 12 July 1995 |{" "}
          <FontAwesomeIcon icon={faEarthEurope} /> Nationality: Indian |{" "}
          <FontAwesomeIcon icon={faPassport} />
          Visa: Chancenkarte (Job Seeker Visa) - Eligible to work in Germany
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
        <WorkExperience
          companyName="International Institute of Information Technology"
          location="Banglore, India"
          jobTitle="Executive PG Programme in Machine Learning & AI"
          startDate="May 2023"
          endDate="July 2024"
          description="Completed course with  a GPA of 3.44"
          achievements={[]}
        />
        <WorkExperience
          companyName="University College of Engineering, Thodupuzha"
          location="Kerala, India"
          jobTitle="B.Tech in Electronics & Communication"
          startDate="March 2013"
          endDate="May 2017"
          description="Completed course with  a CGPA of 7.11"
          achievements={[]}
        />
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
