// spec: specs/adding-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Scenariusze Dodawania Projektów', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://zarress.github.io/Project-Manager-App/');
  });

  test('Dodanie projektu z datą daleko w przyszłości', async ({ page }) => {
    // 1. Kliknij przycisk '+ Add Project'
    await page.getByRole('button', { name: '+ Add Project' }).click();
    
    // Sprawdź, że formularz został otwarty
    await expect(page.getByRole('heading', { name: 'Creating a New Project', level: 1 })).toBeVisible();
    
    // 2. Wypełnij formularz: Title: 'Projekt dalekiej przyszłości', Description: 'Test odległej daty', Due date: '2030-12-31'
    await page.getByRole('textbox', { name: 'Title' }).fill('Projekt dalekiej przyszłości');
    await page.getByRole('textbox', { name: 'Description' }).fill('Test odległej daty');
    await page.getByRole('textbox', { name: 'Due date' }).fill('2030-12-31');
    
    // 3. Kliknij przycisk 'Save'
    await page.getByRole('button', { name: 'Save' }).click();
    
    // Sprawdź, że projekt z odległą datą został zapisany 
    await expect(page.getByText('Projekt dalekiej przyszłości')).toBeVisible();
    
    // 4. Kliknij na projekt i sprawdź, czy data '31 gru 2030' jest poprawnie wyświetlana
    await page.getByText('Projekt dalekiej przyszłości').click();
    
    // Sprawdź, że przyszła data jest poprawnie wyświetlana
    await expect(page.getByText('31 gru 2030')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Projekt dalekiej przyszłości', level: 1 })).toBeVisible();
    await expect(page.getByText('Test odległej daty')).toBeVisible();
  });
});