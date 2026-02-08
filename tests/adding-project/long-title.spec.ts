// spec: specs/adding-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Scenariusze Dodawania Projektów', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://zarress.github.io/Project-Manager-App/');
  });

  test('Dodanie projektu z długą nazwą', async ({ page }) => {
    // 1. Kliknij przycisk '+ Add Project'
    await page.getByRole('button', { name: '+ Add Project' }).click();
    
    // Sprawdź, że formularz został otwarty
    await expect(page.getByRole('heading', { name: 'Creating a New Project', level: 1 })).toBeVisible();
    
    // 2. Wpisz w Title bardzo długą nazwę projektu
    const longTitle = 'To jest bardzo długa nazwa projektu testowego która sprawdza obsługę długich tytułów i czy są jakieś ograniczenia długości nazw projektów w tej aplikacji';
    await page.getByRole('textbox', { name: 'Title' }).fill(longTitle);
    
    // 3. Wypełnij Description: 'Test długiej nazwy' i Due date: '2026-06-10'
    await page.getByRole('textbox', { name: 'Description' }).fill('Test długiej nazwy');
    await page.getByRole('textbox', { name: 'Due date' }).fill('2026-06-10');
    
    // 4. Kliknij przycisk 'Save'
    await page.getByRole('button', { name: 'Save' }).click();
    
    // 5. Sprawdź, czy projekt z długą nazwą jest widoczny na liście bocznej
    await expect(page.getByText(longTitle)).toBeVisible();
  });
});