import { atom } from "jotai";

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

export const experienceGroup = atom([
  {
    title: "Module Lead / Senior Software Engineer",
    organization: "Aspire  Systems",
    location: "Kochi, India",
    from: "Mar 2021",
    to: "May 2024",
    description: "Led a small team of developers and Worked for a leading US-based Insurance company",
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
