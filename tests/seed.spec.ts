import { test, expect } from '@playwright/test';
import { testProjects } from '../test-data/projects';

test.describe('Seedowanie', () => {
  test('Dodawanie projektu', async ({ page }) => {

    await page.goto('https://zarress.github.io/Project-Manager-App');

    await page.evaluate((projectData) => {
      localStorage.setItem('projectList', JSON.stringify([projectData]));
    }, testProjects.seedProject);
  });
});
