// spec: specs/adding-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '../../fixtures/pages.fixture';
import { testProjects } from '../../test-data/projects';

test.describe('Scenariusze Dodawania Projektów', () => {
  test('Dodanie projektów z identycznymi nazwami', async ({ homePage, newProjectPage, projectDetailsPage }) => {
    const duplicateName = testProjects.duplicateProject.title;
    
    // 1. Utwórz pierwszy projekt z danymi: Title: 'Duplikat Projektu', Description: 'Pierwszy projekt', Due date: '2026-08-01'
    await homePage.clickAddProject();
    await newProjectPage.verifyFormVisible();
    
    await newProjectPage.fillForm({
      title: duplicateName,
      description: testProjects.duplicateProject.description1,
      dueDate: testProjects.duplicateProject.dueDate1
    });
    await newProjectPage.clickSave();
    
    // Sprawdź, że pierwszy projekt został utworzony
    await homePage.verifyProjectVisible(duplicateName);
    
    // 2. Utwórz drugi projekt z danymi: Title: 'Duplikat Projektu', Description: 'Drugi projekt o tej samej nazwie', Due date: '2026-08-15'
    await homePage.clickAddProject();
    await newProjectPage.fillForm({
      title: duplicateName,
      description: testProjects.duplicateProject.description2,
      dueDate: testProjects.duplicateProject.dueDate2
    });
    await newProjectPage.clickSave();
    
    // 3. Sprawdź, czy lista projektów zawiera oba projekty 'Duplikat Projektu'
    await homePage.verifyProjectCount(duplicateName, 2);
    
    // 4. Kliknij na pierwszy projekt i sprawdź jego szczegóły (data: 1 sie 2026, opis: 'Pierwszy projekt')
    await homePage.clickFirstProjectByName(duplicateName);
    await projectDetailsPage.verifyProjectDetails({
      title: duplicateName,
      date: '1 sie 2026',
      description: testProjects.duplicateProject.description1
    });
    
    // 5. Kliknij na drugi projekt i sprawdź jego szczegóły (data: 15 sie 2026, opis: 'Drugi projekt o tej samej nazwie')
    await homePage.clickNthProjectByName(duplicateName, 1);
    await projectDetailsPage.verifyProjectDetails({
      title: duplicateName,
      date: '15 sie 2026',
      description: testProjects.duplicateProject.description2
    });
  });
});