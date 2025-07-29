import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faEarthEurope,
  faEnvelope,
  faLocationDot,
  faPassport,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import HeaderLabel from "../../components/HeaderLabel";
import WorkExperience from "../../components/WorkExperience";
import Section from "../../components/Section";

const TemplateA = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800 font-sans">
      <header className="text-center mb-5">
        <h1 className="text-3xl font-bold">Vivek Pulimparambil Rajeev</h1>
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
        <p>
          Senior Frontend Developer with 7+ years of experience building
          scalable, high-performance React and Angular applications. Skilled in
          modern JavaScript frameworks, component-based development, REST APIs,
          and CI/CD pipelines. Strong problem-solving abilities and
          collaborative team player.
        </p>
      </Section>

      <Section title="Work Experience">
        <WorkExperience />
        <WorkExperience
          companyName="Fingent Global Solutions"
          location="Kochi, India"
          jobTitle="Software Engineer"
          startDate="Aug 2017"
          endDate="mar 2021"
          description="something  something ass"
          acheivements={[
            "Developed frontend modules using Angular, React, Laravel.",
            "Integrated Stripe for real-time billing and payment handling.",
            "Created dynamic dashboards with data visualizations",
          ]}
        />
      </Section>

      <section className="mb-6 text-left">
        <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">
          Education
        </h2>
        <p className="text-sm">
          <strong>IIIT Bangalore</strong> – Executive PG Programme in ML & AI
          (May 2023 – July 2024) – GPA: 3.44
        </p>
        <p className="text-sm mt-2">
          <strong>University College of Engineering, Thodupuzha</strong> –
          B.Tech in Electronics & Communication (2013–2017)
        </p>
      </section>
      <Section title="Skills">
        <div className="grid grid-cols-2 text-sm gap-y-1">
          <div>
            <h2 className="text-mb font-semibold ">Frontend</h2>
            <div className="grid grid-cols-5 text-sm gap-y-1">
              <span>ReactJS</span>
              <span>Angular</span>
              <span>Redux</span>
              <span> Next.js</span>
              <span>Typescript</span>
              <span>Javascript</span>
              <span>CSS</span>
              <span>SCSS</span>
              <span>Bootstrap</span>
              <span>JQuery</span>
            </div>
          </div>
          <div>
            <h2 className="text-mb font-semibold ">Backend</h2>
            <span>NodeJs, Laravel , Python</span>
          </div>
          <div>
            <h2 className="text-mb font-semibold ">DataBases</h2>
            <span>MySQL, PGSQL</span>
          </div>
         
        </div>
         <div>
            <h2 className="text-mb font-semibold ">other</h2>
            <span>
              CI/CD, Jenkins, Docker, Jira, Bitbucket, Git, SonarQube, Webpack,
              Storybook, Typescript, ES6, GraphQL, Microfrontend, Javascript,
              TDD, DDD (Domain Driven Development), Jest, React Testing Library,
              D3Js, Figma, Code Review, AWS, Data Analytics
            </span>
          </div>
      </Section>
      <section className="mb-6 text-left">
        <h3 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">
          Frontend skills
        </h3>

        <div className="grid grid-cols-2 text-sm gap-y-1">
          <span>Node.js, PHP, Laravel, Python</span>
          <span>TypeScript, JavaScript (ES6+)</span>
          <span>Tailwind CSS, Bootstrap, HTML, CSS</span>
          <span>REST APIs, GraphQL, D3.js</span>
          <span>Jenkins, Docker, CI/CD, AWS</span>
          <span>Git, Bitbucket, Jira, Webpack</span>
          <span>SonarQube, TDD, DDD, Jest</span>
        </div>
      </section>

      <section className="mb-6 text-left">
        <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">
          Languages
        </h2>
        <p className="text-sm">
          English (C1), German (A1), Hindi (B1), Malayalam (C2)
        </p>
      </section>

      <section className="mb-6  text-left">
        <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">
          Certifications
        </h2>
        <ul className="list-disc list-inside text-sm">
          <li>Cutshort Certified JavaScript – Advanced (Feb 2025)</li>
          <li>IT Security Foundations – LinkedIn (Jul 2024)</li>
          <li>React: Software Architecture – LinkedIn (Aug 2021)</li>
        </ul>
      </section>

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
