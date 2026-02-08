// spec: specs/adding-project.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Scenariusze Dodawania Projektów', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://zarress.github.io/Project-Manager-App/');
  });

  test('Pomyślne dodanie projektu z wszystkimi polami', async ({ page }) => {
    // 1. Kliknij przycisk '+ Add Project' z sidebara
    await page.getByRole('button', { name: '+ Add Project' }).click();
    
    // 2. Wpisz 'Nowy Projekt Testowy' w polu Title
    await page.getByRole('textbox', { name: 'Title' }).fill('Nowy Projekt Testowy');
    
    // 3. Wpisz 'Opis nowego projektu testowego' w polu Description
    await page.getByRole('textbox', { name: 'Description' }).fill('Opis nowego projektu testowego');
    
    // 4. Wpisz '2026-04-15' w polu Due date
    await page.getByRole('textbox', { name: 'Due date' }).fill('2026-04-15');
    
    // 5. Kliknij przycisk 'Save'
    await page.getByRole('button', { name: 'Save' }).click();
    
    // Sprawdź czy projekt został dodany do listy
    await expect(page.getByText('Nowy Projekt Testowy')).toBeVisible();
    
    // 6. Kliknij na nowo utworzony projekt z listy
    await page.getByText('Nowy Projekt Testowy').click();
    
    // Sprawdź szczegóły projektu
    await expect(page.getByRole('heading', { name: 'Nowy Projekt Testowy', level: 1 })).toBeVisible();
    await expect(page.getByText('15 kwi 2026')).toBeVisible();
    await expect(page.getByText('Opis nowego projektu testowego')).toBeVisible();
  });
});