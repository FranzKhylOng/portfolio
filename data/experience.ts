export interface Role {
  title: string;
  date: string;
  description: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  roles: Role[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "1",
    company: "ScaleForge",
    roles: [
      {
        title: "Backend Engineer",
        date: "July 2023 - January 2026",
        description: [
          "Managed end-to-end integration epics for 10+ global B2B partners, overseeing the full development lifecycle from initial technical requirements to production deployment.",
          "Headed the development of feature epics, engineering the backend architecture while managing cross-team coordination with frontend and QA teams.",
          "Identified and remediated critical security vulnerabilities, including a financial logic exploit and a system-wide DoS, preventing potential revenue loss and platform downtime.",
          "Developed and maintained backend APIs, using NestJS integrated with GraphQL for flexible data fetching, and optimized database operations using MongoDB."
        ]
      }
    ]
  },
  {
    id: "2",
    company: "The Coding School",
    roles: [
      {
        title: "Programming Instructor",
        date: "April 2023 -  June 2023",
        description: [
          "Earned a Teaching Certification in Python and Web Development by delivering technical demonstrations and engineering a capstone project."
        ]
      },
      {
        title: "Programming Course Development Intern",
        date: "May 2023 -  June 2023",
        description: [
          "Developed standardized curriculum and instructional materials for internal programming courses, including hands-on activities and comprehensive lesson guides."
        ]
      }
    ]
  },
  {
    id: "3",
    company: "Questronix",
    roles: [
      {
        title: "Power Apps Developer Intern",
        date: "March 2023 - May 2023",
        description: [
          "Engineered a custom event management dashboard, incorporating key features such as a calendar view, kanban board, and event database modification capabilities, using Power Apps."
        ]
      }
    ]
  },
];
