// spec: specs/adding-project.md

import { test, expect } from '../../fixtures/pages.fixture';
import { testProjects } from '../../test-data/projects';

test.describe('Dodawanie projektów - duplikaty nazw', () => {
  test('Pozwala na utworzenie projektów z identycznymi nazwami', async ({ homePage, newProjectPage, projectDetailsPage }) => {
    const duplicateName = testProjects.duplicateProject.title;
    
    // Arrange & Act - Utwórz pierwszy projekt
    await homePage.clickAddProject();
    await newProjectPage.createProject({
      title: duplicateName,
      description: testProjects.duplicateProject.description1,
      dueDate: testProjects.duplicateProject.dueDate1
    });
    
    // Act - Utwórz drugi projekt z tą samą nazwą
    await homePage.clickAddProject();
    await newProjectPage.createProject({
      title: duplicateName,
      description: testProjects.duplicateProject.description2,
      dueDate: testProjects.duplicateProject.dueDate2
    });
    
    // Assert - Sprawdź, że oba projekty są na liście
    await homePage.verifyProjectCount(duplicateName, 2);
    
    // Assert - Sprawdź szczegóły pierwszego projektu
    await homePage.clickFirstProjectByName(duplicateName);
    await projectDetailsPage.verifyProjectDetails({
      title: duplicateName,
      date: '1 sie 2026',
      description: testProjects.duplicateProject.description1
    });
    
    // Assert - Sprawdź szczegóły drugiego projektu
    await homePage.clickNthProjectByName(duplicateName, 1);
    await projectDetailsPage.verifyProjectDetails({
      title: duplicateName,
      date: '15 sie 2026',
      description: testProjects.duplicateProject.description2
    });
  });
});