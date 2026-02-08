// spec: specs/adding-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Scenariusze Dodawania Projektów', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://zarress.github.io/Project-Manager-App/');
  });

  test('Dodanie projektu z datą w przeszłości', async ({ page }) => {
    // 1. Kliknij przycisk '+ Add Project'
    await page.getByRole('button', { name: '+ Add Project' }).click();
    
    // Sprawdź, że formularz został otwarty
    await expect(page.getByRole('heading', { name: 'Creating a New Project', level: 1 })).toBeVisible();
    
    // 2. Wypełnij formularz: Title: 'Projekt z przeszłości', Description: 'Test daty z przeszłości', Due date: '2025-01-01'
    await page.getByRole('textbox', { name: 'Title' }).fill('Projekt z przeszłości');
    await page.getByRole('textbox', { name: 'Description' }).fill('Test daty z przeszłości');
    await page.getByRole('textbox', { name: 'Due date' }).fill('2025-01-01');
    
    // 3. Kliknij przycisk 'Save'
    await page.getByRole('button', { name: 'Save' }).click();
    
    // Sprawdź, że projekt z datą z przeszłości został zapisany
    await expect(page.getByText('Projekt z przeszłości')).toBeVisible();
    
    // 4. Kliknij na projekt i sprawdź, czy data '1 sty 2025' jest wyświetlana
    await page.getByText('Projekt z przeszłości').click();
    
    // Sprawdź, że data z przeszłości jest poprawnie wyświetlana
    await expect(page.getByText('1 sty 2025')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Projekt z przeszłości', level: 1 })).toBeVisible();
    await expect(page.getByText('Test daty z przeszłości')).toBeVisible();
  });
});