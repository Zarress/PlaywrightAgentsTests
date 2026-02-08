// spec: specs/adding-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Scenariusze Dodawania Projektów', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://zarress.github.io/Project-Manager-App/');
  });

  test('Walidacja wymaganych pól - brak Due date', async ({ page }) => {
    // 1. Kliknij przycisk '+ Add Project'
    await page.getByRole('button', { name: '+ Add Project' }).click();
    
    // Sprawdź, że formularz został otwarty
    await expect(page.getByRole('heading', { name: 'Creating a New Project', level: 1 })).toBeVisible();
    
    // 2. Wpisz 'Test Validation' w Title i 'Test opisu' w Description
    await page.getByRole('textbox', { name: 'Title' }).fill('Test Validation');
    await page.getByRole('textbox', { name: 'Description' }).fill('Test opisu');
    
    // 3. Nie wypełniając Due date, kliknij przycisk 'Save'
    await page.getByRole('button', { name: 'Save' }).click();
    
    // Sprawdź, że kursor przeniósł się do pola Due date (walidacja)
    await expect(page.getByRole('textbox', { name: 'Due date' })).toBeFocused();
    
    // Anuluj operację
    await page.getByRole('button', { name: 'Cancel' }).click();
    
    // 4. Sprawdź czy projekt nie został dodany do listy
    await expect(page.getByRole('heading', { name: 'No Project Selected', level: 1 })).toBeVisible();
    await expect(page.getByText('Test Validation')).not.toBeVisible();
  });
});