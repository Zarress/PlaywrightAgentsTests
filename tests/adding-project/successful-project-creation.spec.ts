// spec: specs/adding-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '../../fixtures/pages.fixture';
import { testProjects } from '../../test-data/projects';

test.describe('Dodawanie projektów - podstawowy flow', () => {
  test('Pomyślnie tworzy projekt z wszystkimi wypełnionymi polami', async ({ homePage, newProjectPage, projectDetailsPage }) => {
    // Act
    await homePage.clickAddProject();
    await newProjectPage.createProject(testProjects.sidebarProject);
    
    // Assert
    await homePage.clickProjectByName(testProjects.sidebarProject.title);
    await projectDetailsPage.verifyProjectDetails({
      title: testProjects.sidebarProject.title,
      date: '15 kwi 2026',
      description: testProjects.sidebarProject.description
    });
  });
});