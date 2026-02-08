// spec: specs/adding-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Scenariusze Dodawania Projektów', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://zarress.github.io/Project-Manager-App/');
  });

  test('Dodanie projektów z identycznymi nazwami', async ({ page }) => {
    const duplicateName = 'Duplikat Projektu';
    
    // 1. Utwórz pierwszy projekt z danymi: Title: 'Duplikat Projektu', Description: 'Pierwszy projekt', Due date: '2026-08-01'
    await page.getByRole('button', { name: '+ Add Project' }).click();
    await expect(page.getByRole('heading', { name: 'Creating a New Project', level: 1 })).toBeVisible();
    
    await page.getByRole('textbox', { name: 'Title' }).fill(duplicateName);
    await page.getByRole('textbox', { name: 'Description' }).fill('Pierwszy projekt');
    await page.getByRole('textbox', { name: 'Due date' }).fill('2026-08-01');
    await page.getByRole('button', { name: 'Save' }).click();
    
    // Sprawdź, że pierwszy projekt został utworzony
    await expect(page.getByText(duplicateName)).toBeVisible();
    
    // 2. Utwórz drugi projekt z danymi: Title: 'Duplikat Projektu', Description: 'Drugi projekt o tej samej nazwie', Due date: '2026-08-15'
    await page.getByRole('button', { name: '+ Add Project' }).click();
    await page.getByRole('textbox', { name: 'Title' }).fill(duplicateName);
    await page.getByRole('textbox', { name: 'Description' }).fill('Drugi projekt o tej samej nazwie');
    await page.getByRole('textbox', { name: 'Due date' }).fill('2026-08-15');
    await page.getByRole('button', { name: 'Save' }).click();
    
    // 3. Sprawdź, czy lista projektów zawiera oba projekty 'Duplikat Projektu'
    const projectItems = page.getByText(duplicateName);
    await expect(projectItems).toHaveCount(2);
    
    // 4. Kliknij na pierwszy projekt i sprawdź jego szczegóły (data: 1 sie 2026, opis: 'Pierwszy projekt')
    await projectItems.first().click();
    await expect(page.getByRole('heading', { name: duplicateName, level: 1 })).toBeVisible();
    await expect(page.getByText('1 sie 2026')).toBeVisible();
    await expect(page.getByText('Pierwszy projekt')).toBeVisible();
    
    // 5. Kliknij na drugi projekt i sprawdź jego szczegóły (data: 15 sie 2026, opis: 'Drugi projekt o tej samej nazwie')
    await projectItems.nth(1).click();
    await expect(page.getByRole('heading', { name: duplicateName, level: 1 })).toBeVisible();
    await expect(page.getByText('15 sie 2026')).toBeVisible();
    await expect(page.getByText('Drugi projekt o tej samej nazwie')).toBeVisible();
  });
});