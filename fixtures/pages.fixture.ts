import { test as base } from '@playwright/test';
import { HomePage, NewProjectPage, ProjectDetailsPage } from '../pages';

type PageFixtures = {
  homePage: HomePage;
  newProjectPage: NewProjectPage;
  projectDetailsPage: ProjectDetailsPage;
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
  }
});

export { expect } from '@playwright/test';
