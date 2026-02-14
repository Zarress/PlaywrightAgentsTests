import { test as base } from '@playwright/test';
import { HomePage, NewProjectPage, ProjectDetailsPage } from '../pages';
import { testProjects } from '../test-data/projects';

type PageFixtures = {
  homePage: HomePage;
  newProjectPage: NewProjectPage;
  projectDetailsPage: ProjectDetailsPage;
  seedSingleProject: void;
};

export const test = base.extend<PageFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await use(homePage);
  },
  newProjectPage: async ({ page }, use) => {
    await use(new NewProjectPage(page));
  },
  projectDetailsPage: async ({ page }, use) => {
    await use(new ProjectDetailsPage(page));
  },
  seedSingleProject: async ({ homePage, page }, use) => {
    await page.evaluate((projectData) => {
      localStorage.setItem('projectList', JSON.stringify([projectData]));
    }, testProjects.seedProject);
    
    await page.reload();
    await use();
  }
});

export { expect } from '@playwright/test';
