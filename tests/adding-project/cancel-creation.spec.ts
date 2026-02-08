// spec: specs/adding-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Scenariusze Dodawania Projektów', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://zarress.github.io/Project-Manager-App/');
  });

  test('Anulowanie tworzenia projektu', async ({ page }) => {
    // 1. Kliknij przycisk '+ Add Project'
    await page.getByRole('button', { name: '+ Add Project' }).click();
    
    // Sprawdź, że formularz został otwarty
    await expect(page.getByRole('heading', { name: 'Creating a New Project', level: 1 })).toBeVisible();
    
    // 2. Wypełnij częściowo formularz: tylko Title: 'Test Cancel'
    await page.getByRole('textbox', { name: 'Title' }).fill('Test Cancel');
    
    // 3. Kliknij przycisk 'Cancel'
    await page.getByRole('button', { name: 'Cancel' }).click();
    
    // Sprawdź, że formularz został zamknięty i powrócono do głównego widoku
    await expect(page.getByRole('heading', { name: 'No Project Selected', level: 1 })).toBeVisible();
    
    // 4. Sprawdź, że projekt 'Test Cancel' nie został dodany do listy projektów
    await expect(page.getByText('Test Cancel')).not.toBeVisible();
  });
});