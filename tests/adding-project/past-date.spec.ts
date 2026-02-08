// spec: specs/adding-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '../../fixtures/pages.fixture';

test.describe('Dodawanie projektów - daty w przeszłości', () => {
  test('Pozwala na utworzenie projektu z datą w przeszłości', async ({ homePage, newProjectPage, projectDetailsPage }) => {
    // Act
    await homePage.clickAddProject();
    await newProjectPage.createProject({
      title: 'Projekt z przeszłości',
      description: 'Test daty z przeszłości',
      dueDate: '2025-01-01'
    });
    
    // Assert
    await homePage.clickProjectByName('Projekt z przeszłości');
    await projectDetailsPage.verifyProjectDetails({
      title: 'Projekt z przeszłości',
      date: '1 sty 2025',
      description: 'Test daty z przeszłości'
    });
  });
});