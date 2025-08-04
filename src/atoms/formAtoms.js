import { atom } from "jotai";

export const basicInfo = atom({
  name: "Alex Johnson",
  title: "Full Stack Developer",
  location: "Berlin, Germany",
  phone: "+49 170 1234567",
  email: "alex.johnson@example.com",
  linkedin: "https://www.linkedin.com/in/alexjohnson",
  github: "https://github.com/alexjohnsondev",
  dob: "01 January 1990",
  nationality: "Canadian",
  visa: "Work Permit - Eligible to work in EU",
});

export const languageList = atom([
  "English (Native)",
  "German (B1)",
  "Spanish (A2)",
]);

export const certificationList = atom([
  "Certified Full Stack Developer – Code Academy (Jun 2024)",
  "Cloud Fundamentals – Coursera (Jan 2023)",
  "Agile with Scrum – LinkedIn (Dec 2022)",
]);

export const skillGroup = atom([
  {
    header: "Frontend",
    skills: ["VueJS", "ReactJS", "Tailwind", "HTML", "CSS", "JavaScript"],
    occupyfullRow: false,
  },
  {
    header: "Backend",
    skills: ["ExpressJS", "Django", "GoLang"],
    occupyfullRow: false,
  },
  {
    header: "Other",
    skills: [
      "Docker",
      "GitHub Actions",
      "Kubernetes",
      "Figma",
      "REST APIs",
      "GraphQL",
      "TypeScript",
      "AWS",
      "Firebase",
      "Webpack",
      "Jest",
      "Agile/Scrum",
      "CI/CD",
      "Terraform",
    ],
    occupyfullRow: true,
  },
]);

export const professionalSummery = atom(
  "Full Stack Developer with over 5 years of experience building modern, responsive web applications. Skilled in JavaScript frameworks, scalable backend systems, and cloud infrastructure. Passionate about clean code, team collaboration, and continuous learning."
);

export const availability = atom("Open to opportunities starting September 2025");

export const interests = atom(
  "Web performance, cloud-native development, remote teams, open source contributions"
);

export const experienceGroup = atom([
  {
    title: "Full Stack Developer",
    organization: "TechNova Solutions",
    location: "Berlin, Germany",
    from: "Feb 2022",
    to: "Present",
    description:
      "Worked on various client projects in the fintech and e-commerce space",
    achievements: [
      "Built microservices for internal tools, reducing deployment time by 30%",
      "Implemented CI/CD pipelines using GitHub Actions",
      "Refactored monolithic legacy system into modular architecture",
    ],
  },
  {
    title: "Web Developer",
    organization: "Pixel Forge",
    location: "Toronto, Canada",
    from: "Jul 2018",
    to: "Jan 2022",
    description:
      "Contributed to client-facing applications and internal admin dashboards",
    achievements: [
      "Created reusable React components and design system",
      "Integrated 3rd party APIs and payment gateways",
      "Improved lighthouse performance score from 65 to 92",
    ],
  },
]);

export const educationGroup = atom([
  {
    title: "MSc in Computer Science",
    organization: "Global University of Technology",
    location: "Toronto, Canada",
    from: "Sep 2020",
    to: "Aug 2022",
    description: "Graduated with distinction",
    achievements: [],
  },
  {
    title: "BSc in Information Technology",
    organization: "Northern State University",
    location: "Calgary, Canada",
    from: "Sep 2015",
    to: "Jun 2019",
    description: "Completed coursework in data structures, web dev, and cloud",
    achievements: [],
  },
]);
