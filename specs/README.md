# Specs

Dyrektor dla planów testów aplikacji React Project Manager.

## Application Overview

Aplikacja React Project Manager umożliwia dodawanie nowych projektów poprzez formularz zawierający pola Title, Description i Due date. Wszystkie pola są wymagane i formularz można otworzyć na dwa sposoby - przyciskiem "+ Add Project" z sidebara lub "Create new project" z głównego widoku.

## Test Architecture

### Page Object Model (POM)

Testy używają wzorca **Page Object Model** z następującymi klasami w folderze `pages/`:

- `BasePage` - klasa bazowa ze wspólną funkcjonalnością
- `HomePage` - strona główna z listą projektów i nawigacją
- `NewProjectPage` - formularz tworzenia nowego projektu
- `ProjectDetailsPage` - widok szczegółów projektu

### Fixtures

Testy wykorzystują **Playwright Fixtures** (`fixtures/pages.fixture.ts`) dla automatycznego tworzenia instancji page objects. Każdy test otrzymuje gotowe obiekty jako parametry, a nawigacja do aplikacji odbywa się automatycznie.

### Test Data

Dane testowe są przechowywane w dedykowanym pliku `test-data/projects.ts` dla łatwiejszego zarządzania i ponownego wykorzystania.

### Test Structure

Każdy test jest zorganizowany według wzorca **AAA (Arrange-Act-Assert)** dla lepszej czytelności i konsystencji.

## Test Plans

- [adding-project.md](adding-project.md) - Scenariusze dodawania projektów
