// spec: specs/adding-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Scenariusze Dodawania Projektów', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://zarress.github.io/Project-Manager-App/');
  });

  test('Dodanie projektu przyciskiem Create new project', async ({ page }) => {
    // 1. Upewnij się, że nie jest wybrany żaden projekt - sprawdź widok główny
    await expect(page.getByRole('heading', { name: 'No Project Selected', level: 1 })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Create new project' })).toBeVisible();
    
    // 2. Kliknij przycisk 'Create new project'
    await page.getByRole('button', { name: 'Create new project' }).click();
    
    // Sprawdź, że formularz został otwarty
    await expect(page.getByRole('heading', { name: 'Creating a New Project', level: 1 })).toBeVisible();
    
    // 3. Wypełnij wszystkie pola
    await page.getByRole('textbox', { name: 'Title' }).fill('Projekt z głównego przycisku');
    await page.getByRole('textbox', { name: 'Description' }).fill('Test drugiego sposobu dodawania');
    await page.getByRole('textbox', { name: 'Due date' }).fill('2026-05-20');
    
    // 4. Kliknij przycisk 'Save'
    await page.getByRole('button', { name: 'Save' }).click();
    
    // Sprawdź, czy projekt został zapisany i pojawił się na liście
    await expect(page.getByText('Projekt z głównego przycisku')).toBeVisible();
  });
});