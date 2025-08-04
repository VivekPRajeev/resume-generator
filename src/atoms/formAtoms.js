import { atom } from "jotai";

export const basicInfo = atom({
  name: "Vivek Pulimparambil Rajeev",
  title: "Senior Software Engineer",
  location: " Hamburg, Germany",
  phone: "+49 1575 6609725",
  email: "vivek.rajeev.09@gmail.com",
  linkedin: "https://www.linkedin.com/in/vivekprajeev",
  github: "https://github.com/VivekPRajeev",
  dob: "12 July 1995",
  nationality: "Indian",
  visa: "Chancenkarte (Job Seeker Visa) - Eligible to work in Germany",
});

export const languageList = atom([
  "English (C1-C2)",
  "German (A1-A2) - Studying to reach B1-B2",
  "Hindi (B1)",
  "Malayalam (C2)",
]);

export const certificationList = atom([
  "Cutshort Certified JavaScript – Advanced (Feb 2025)",
  "IT Security Foundations – LinkedIn (Jul 2024)",
  "React: Software Architecture – LinkedIn (Aug 2021)",
]);

export const skillGroup = atom([
  {
    header: "Frontend",
    skills: ["ReactJS", "Redux", "Tailwind", "Angular", "SCSS", "Bootstrap"],
    occupyfullRow: false,
  },
  {
    header: "Backend",
    skills: ["NodeJs", "Laravel", "Python"],
    occupyfullRow: false,
  },
  {
    header: "Other",
    skills: [
      "CI/CD",
      "Jenkins",
      "Docker",
      "Jira",
      "Bitbucket",
      "Git",
      "SonarQube",
      "Webpack",
      "Storybook",
      "Typescript",
      "ES6",
      "GraphQL",
      "Microfrontend",
      "Javascript",
      "TDD",
      "Jest",
      "React testing library",
      "D3Js",
      "Figma",
      "Code Review",
      "AWS",
      "Data Analytics",
    ],
    occupyfullRow: true,
  },
]);

export const professionalSummery = atom(
  "Senior Frontend Developer with 7+ years of experience building scalable, high-performance React and Angular applications. Skilled in modern JavaScript frameworks, component-based development, REST APIs, and CI/CD pipelines. Strong problem-solving abilities and collaborative team player."
);

export const availability = atom("Available to start immediately");

export const interests = atom(
  "UI/UX design, performance optimization, AI in frontend, relocation within Germany"
);

export const experienceGroup = atom([
  {
    title: "Module Lead / Senior Software Engineer",
    organization: "Aspire  Systems",
    location: "Kochi, India",
    from: "Mar 2021",
    to: "May 2024",
    description:
      "Led a small team of developers and Worked for a leading US-based Insurance company",
    achievements: [
      "Led migration to React, improving performance and UX.",
      "Boosted test coverage to 75% using SonarQube.",
      "Managed CI/CD pipelines with Jenkins and resolved 100% of security vulnerabilities.",
    ],
  },
  {
    title: "Software Engineer",
    organization: "Fingent Global Solutions",
    location: "Kochi, India",
    from: "August 2017",
    to: "March 2021",
    description:
      "Worked on product team and was heavily involved in the development of InfinCE Digital Workplace",
    achievements: [
      "Developed frontend modules using Angular, React, Laravel.",
      "Integrated Stripe for real-time billing and payment handling.",
      "Created dynamic dashboards with data visualizations",
    ],
  },
]);

export const educationGroup = atom([
  {
    title: "Executive PG Programme in Machine Learning & AI",
    organization: "International Institute of Information Technology",
    location: "Banglore, India",
    from: "May 2023",
    to: "July 2024",
    description: "Completed course with  a GPA of 3.44",
    achievements: [],
  },
  {
    title: "B.Tech in Electronics & Communication",
    organization: "University College of Engineering, Thodupuzha",
    location: "Kerala, India",
    from: "March 2013",
    to: "May 2017",
    description: "Completed course with  a CGPA of 7.11",
    achievements: [],
  },
]);
