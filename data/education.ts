export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  date: string;
  description: string;
}

export const educationData: EducationItem[] = [
  {
    id: "1",
    degree: "Bachelor's Degree in Computer Engineering",
    school: "Pamantasan ng Lungsod ng Maynila",
    date: "2019 - 2023",
    description: "Graduated as Magna Cum Laude",
  },
  {
    id: "2",
    degree: "DOST Merit Scholar",
    school: "Department of Science and Technology",
    date: "2019 - 2023",
    description: "DOST-SEI RA 7687 Science and Technology Scholarship Program",
  },
  {
    id: "3",
    degree: "STEM Technology",
    school: "Adamson University",
    date: "2017 - 2019",
    description: "Senior High School",
  },
];
