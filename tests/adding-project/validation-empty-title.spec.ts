// spec: specs/adding-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Scenariusze Dodawania Projektów', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://zarress.github.io/Project-Manager-App/');
  });

  test('Walidacja wymaganych pól - puste Title', async ({ page }) => {
    // 1. Kliknij przycisk '+ Add Project'
    await page.getByRole('button', { name: '+ Add Project' }).click();
    
    // Sprawdź, że formularz został otwarty
    await expect(page.getByRole('heading', { name: 'Creating a New Project', level: 1 })).toBeVisible();
    
    // 2. Nie wypełniając żadnego pola, kliknij przycisk 'Save'
    await page.getByRole('button', { name: 'Save' }).click();
    
    // Sprawdź, że kursor przeniósł się do pola Title (walidacja)
    await expect(page.getByRole('textbox', { name: 'Title' })).toBeFocused();
    
    // Anuluj operację
    await page.getByRole('button', { name: 'Cancel' }).click();
    
    // 3. Sprawdź czy projekt nie został dodany do listy - powinien być widoczny widok "No Project Selected"
    await expect(page.getByRole('heading', { name: 'No Project Selected', level: 1 })).toBeVisible();
  });
});