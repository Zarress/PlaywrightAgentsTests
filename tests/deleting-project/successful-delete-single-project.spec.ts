// spec: specs/deleting-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '../../fixtures/pages.fixture';
import { testProjects } from '../../test-data/projects';

test.describe('Scenariusze Usuwania Projektów', () => {
  test('Pomyślne usunięcie pojedynczego projektu', async ({ page, homePage, projectDetailsPage }) => {
    // sedowanie
    await page.evaluate((projectData) => {
      localStorage.setItem('projectList', JSON.stringify([projectData]));
    }, testProjects.seedProject);
    
    await page.reload();

    // 1. Kliknij na projekt z listy projektów
    await homePage.clickProjectByName(testProjects.seedProject.title);

    // 2. Zweryfikuj obecność przycisku 'Delete project'
    await projectDetailsPage.verifyDeleteButtonVisible();

    // 3. Kliknij przycisk 'Delete project'
    await projectDetailsPage.clickDeleteProject();
    await projectDetailsPage.verifyDeleteConfirmDialog();

    // 4. Kliknij przycisk 'Yes' w dialogu potwierdzenia
    await projectDetailsPage.confirmDelete();

    // 5. Sprawdź widok główny
    await homePage.verifyNoProjectSelectedVisible();
    await homePage.verifyCreateNewProjectButtonVisible();

    // 6. Sprawdź listę projektów po lewej stronie
    await homePage.verifyProjectNotVisible(testProjects.seedProject.title);
  });
});
