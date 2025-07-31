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
