export interface ProjectData {
  title: string;
  description: string;
  dueDate: string;
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
    title: 'To jest bardzo długa nazwa projektu która ma na celu przetestowanie jak aplikacja radzi sobie z długimi tytułami projektów',
    description: 'Test długiego tytułu',
    dueDate: '2026-06-01'
  },
  pastDate: {
    title: 'Projekt Przeszłość',
    description: 'Test daty w przeszłości',
    dueDate: '2020-01-01'
  },
  futureDate: {
    title: 'Projekt Przyszłość',
    description: 'Test dalekiej przyszłości',
    dueDate: '2050-12-31'
  }
} as const;
