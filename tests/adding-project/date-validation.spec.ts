// spec: specs/adding-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Scenariusze Dodawania Projektów', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://zarress.github.io/Project-Manager-App/');
  });

  test('Walidacja formatu daty', async ({ page }) => {
    // 1. Kliknij przycisk '+ Add Project'
    await page.getByRole('button', { name: '+ Add Project' }).click();
    
    // Sprawdź, że formularz został otwarty
    await expect(page.getByRole('heading', { name: 'Creating a New Project', level: 1 })).toBeVisible();
    
    // 2. Spróbuj wpisać nieprawidłowy format daty w pole Due date
    // HTML5 date input automatycznie waliduje format - nieprawidłowe dane będą odrzucone
    await expect(async () => {
      await page.getByRole('textbox', { name: 'Due date' }).fill('złaData');
    }).rejects.toThrow('Malformed value');
    
    // 4. Wpisz prawidłową datę w formacie YYYY-MM-DD
    await page.getByRole('textbox', { name: 'Due date' }).fill('2026-07-15');
    
    // 5. Wypełnij Title: 'Test Daty', Description: 'Test walidacji dat' i zapisz projekt
    await page.getByRole('textbox', { name: 'Title' }).fill('Test Daty');
    await page.getByRole('textbox', { name: 'Description' }).fill('Test walidacji dat');
    await page.getByRole('button', { name: 'Save' }).click();
    
    // Sprawdź, że projekt z prawidłową datą został utworzony
    await expect(page.getByText('Test Daty')).toBeVisible();
  });
});