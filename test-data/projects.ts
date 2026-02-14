export interface ProjectData {
  id?: string;
  title: string;
  description: string;
  dueDate: string;
  tasks?: any[];
}

export const testProjects = {
  mainButtonProject: {
    title: 'Projekt z głównego przycisku',
    description: 'Test drugiego sposobu dodawania',
    dueDate: '2026-05-20'
  },
  sidebarProject: {
    title: 'Nowy Projekt Testowy',
    description: 'Opis nowego projektu testowego',
    dueDate: '2026-04-15'
  },
  cancelTest: {
    title: 'Test Cancel',
    description: '',
    dueDate: ''
  },
  dateValidation: {
    title: 'Test Daty',
    description: 'Test walidacji dat',
    dueDate: '2026-07-15'
  },
  duplicateProject: {
    title: 'Duplikat Projektu',
    description1: 'Pierwszy projekt',
    description2: 'Drugi projekt o tej samej nazwie',
    dueDate1: '2026-08-01',
    dueDate2: '2026-08-15'
  },
  longTitle: {
    title: 'To jest bardzo długa nazwa projektu testowego która sprawdza obsługę długich tytułów i czy są jakieś ograniczenia długości nazw projektów w tej aplikacji',
    description: 'Test długiej nazwy',
    dueDate: '2026-06-10'
  },
  pastDate: {
    title: 'Projekt z przeszłości',
    description: 'Test daty z przeszłości',
    dueDate: '2025-01-01'
  },
  futureDate: {
    title: 'Projekt dalekiej przyszłości',
    description: 'Test odległej daty',
    dueDate: '2030-12-31'
  },
  seedProject: {
    id: "99a1f607-2851-41fe-abc9-5ba67163ff1b",
    title: "test title",
    description: "test description",
    dueDate: "2026-02-14",
    tasks: []
  },
  seedProjectWithTasks: {
    id: "c4a44c7c-4983-4eeb-bd3e-e029b127eefc",
    title: "test title",
    description: "test description",
    dueDate: "2026-02-27",
    tasks: ["to do 1", "to do 2"]
  },
  secondSeedProject: {
    id: "a2b3c4d5-6789-4abc-def0-123456789abc",
    title: "Second Project",
    description: "Second project description",
    dueDate: "2026-05-20",
    tasks: []
  },
  thirdSeedProject: {
    id: "b3c4d5e6-7890-4bcd-ef01-23456789abcd",
    title: "Third Project",
    description: "Third project description",
    dueDate: "2026-06-15",
    tasks: []
  }
} as const;
