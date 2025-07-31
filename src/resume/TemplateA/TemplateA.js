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

const TemplateA = () => {
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
        <p className="text-sm mt-1">
          Senior Frontend Developer with 7+ years of experience building
          scalable, high-performance React and Angular applications. Skilled in
          modern JavaScript frameworks, component-based development, REST APIs,
          and CI/CD pipelines. Strong problem-solving abilities and
          collaborative team player.
        </p>
      </Section>
      <Section title="Skills">
        <Skills />
      </Section>
      <Section title="Work Experience">
        <WorkExperience description="Led a small team of developers and Worked for a leading US-based Insurance company" />
        <WorkExperience
          companyName="Fingent Global Solutions"
          location="Kochi, India"
          jobTitle="Software Engineer"
          startDate="August 2017"
          endDate="March 2021"
          description="Worked on product team and was heavily involved in the development of InfinCE Digital Workplace"
          acheivements={[
            "Developed frontend modules using Angular, React, Laravel.",
            "Integrated Stripe for real-time billing and payment handling.",
            "Created dynamic dashboards with data visualizations",
          ]}
        />
      </Section>
      <Section title="Education">
        <WorkExperience
          companyName="International Institute of Information Technology"
          location="Banglore, India"
          jobTitle="Executive PG Programme in Machine Learning & AI"
          startDate="May 2023"
          endDate="July 2024"
          description="Completed course with  a GPA of 3.44"
          acheivements={[]}
        />
        <WorkExperience
          companyName="University College of Engineering, Thodupuzha"
          location="Kerala, India"
          jobTitle="B.Tech in Electronics & Communication"
          startDate="March 2013"
          endDate="May 2017"
          description="Completed course with  a CGPA of 7.11"
          acheivements={[]}
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
