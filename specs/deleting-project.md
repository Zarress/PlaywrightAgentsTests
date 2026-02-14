# Plan Testów Usuwania Projektów

## Application Overview

Plan testów dla funkcjonalności usuwania projektów w aplikacji React Project Manager. Obejmuje scenariusze usuwania pojedynczych projektów, projektów z zadaniami, anulowania usuwania oraz przypadki brzegowe. Wszystkie testy wykorzystują dialog potwierdzenia z przyciskami "Yes" i "No".

## Test Scenarios

### 1. Scenariusze Usuwania Projektów

**Seed:** `tests/seed.spec.ts`

#### 1.1. Pomyślne usunięcie pojedynczego projektu

**File:** `tests/deleting-project/successful-delete-single-project.spec.ts`

**Steps:**
  1. Kliknij na projekt z listy projektów
    - expect: Szczegóły projektu powinny zostać wyświetlone
  2. Zweryfikuj obecność przycisku 'Delete project'
    - expect: Przycisk 'Delete project' powinien być widoczny w widoku szczegółów projektu
  3. Kliknij przycisk 'Delete project'
    - expect: Dialog potwierdzenia powinien się pojawić z komunikatem "Are you sure you want to delete this whole project?" oraz przyciskami "Yes" i "No"
  4. Kliknij przycisk 'Yes' w dialogu potwierdzenia
    - expect: Dialog powinien zostać zamknięty, projekt powinien zniknąć z listy projektów
  5. Sprawdź widok główny
    - expect: Powinien wyświetlić się ekran "No Project Selected" z przyciskiem "Create new project"
  6. Sprawdź listę projektów po lewej stronie
    - expect: Lista projektów powinna być pusta

#### 1.2. Anulowanie usuwania projektu

**File:** `tests/deleting-project/cancel-deletion.spec.ts`

**Steps:**
  1. Kliknij na projekt z listy projektów
    - expect: Szczegóły projektu powinny zostać wyświetlone
  2. Kliknij przycisk 'Delete project'
    - expect: Dialog potwierdzenia powinien się pojawić z komunikatem "Are you sure you want to delete this whole project?"
  3. Kliknij przycisk 'No' w dialogu potwierdzenia
    - expect: Dialog powinien zostać zamknięty, projekt powinien pozostać widoczny
  4. Sprawdź widok szczegółów projektu
    - expect: Szczegóły projektu powinny nadal być wyświetlone z przyciskiem 'Delete project'
  5. Sprawdź listę projektów po lewej stronie
    - expect: Projekt powinien nadal znajdować się na liście projektów

#### 1.3. Usunięcie projektu z zadaniami

**File:** `tests/deleting-project/delete-project-with-tasks.spec.ts`

**Steps:**
  1. Kliknij na projekt z listy projektów
    - expect: Szczegóły projektu powinny zostać wyświetlone
  2. Dodaj nowe zadanie do projektu wpisując nazwę zadania w polu "Enter task name ..." i klikając przycisk "+ Add Task"
    - expect: Zadanie powinno zostać dodane do listy zadań projektu
  3. Zweryfikuj że zadanie jest widoczne na liście zadań
    - expect: Dodane zadanie powinno być widoczne w sekcji "Tasks"
  4. Kliknij przycisk 'Delete project'
    - expect: Dialog potwierdzenia powinien się pojawić z komunikatem "Are you sure you want to delete this whole project?"
  5. Kliknij przycisk 'Yes' w dialogu potwierdzenia
    - expect: Dialog powinien zostać zamknięty, projekt wraz z zadaniami powinien zniknąć z listy projektów
  6. Sprawdź listę projektów
    - expect: Projekt nie powinien znajdować się na liście projektów

#### 1.4. Usunięcie jednego projektu spośród wielu

**File:** `tests/deleting-project/delete-one-of-multiple-projects.spec.ts`

**Steps:**
  1. Sprawdź liczbę projektów na liście
    - expect: Na liście powinny być co najmniej dwa projekty
  2. Kliknij na pierwszy projekt z listy (np. "Project Alpha")
    - expect: Szczegóły pierwszego projektu powinny zostać wyświetlone
  3. Kliknij przycisk 'Delete project'
    - expect: Dialog potwierdzenia powinien się pojawić
  4. Kliknij przycisk 'Yes' w dialogu potwierdzenia
    - expect: Projekt powinien zostać usunięty z listy
  5. Sprawdź listę projektów
    - expect: Pierwszy projekt nie powinien być już na liście, pozostałe projekty powinny pozostać
  6. Sprawdź widok główny
    - expect: Powinien wyświetlić się ekran "No Project Selected" z przyciskiem "Create new project"
  7. Kliknij na pozostały projekt z listy
    - expect: Szczegóły pozostałego projektu powinny zostać wyświetlone bez problemów

#### 1.5. Wielokrotne anulowanie i ponowne próby usunięcia

**File:** `tests/deleting-project/multiple-cancel-attempts.spec.ts`

**Steps:**
  1. Kliknij na projekt z listy projektów
    - expect: Szczegóły projektu powinny zostać wyświetlone
  2. Kliknij przycisk 'Delete project'
    - expect: Dialog potwierdzenia powinien się pojawić
  3. Kliknij przycisk 'No' w dialogu potwierdzenia
    - expect: Dialog powinien zostać zamknięty, projekt powinien pozostać widoczny
  4. Ponownie kliknij przycisk 'Delete project'
    - expect: Dialog potwierdzenia powinien ponownie się pojawić
  5. Kliknij przycisk 'No' w dialogu potwierdzenia
    - expect: Dialog powinien zostać zamknięty, projekt powinien pozostać widoczny
  6. Po raz trzeci kliknij przycisk 'Delete project'
    - expect: Dialog potwierdzenia powinien ponownie się pojawić
  7. Tym razem kliknij przycisk 'Yes' w dialogu potwierdzenia
    - expect: Projekt powinien zostać usunięty z listy
  8. Sprawdź listę projektów
    - expect: Projekt nie powinien znajdować się na liście projektów

#### 1.6. Usunięcie wszystkich projektów po kolei

**File:** `tests/deleting-project/delete-all-projects-sequentially.spec.ts`

**Steps:**
  1. Sprawdź liczbę projektów na liście i zapamiętaj początkową liczbę
    - expect: Na liście powinny być co najmniej trzy projekty
  2. Dla każdego projektu na liście w pętli: kliknij na pierwszy projekt z listy
    - expect: Szczegóły projektu powinny zostać wyświetlone
  3. Kliknij przycisk 'Delete project'
    - expect: Dialog potwierdzenia powinien się pojawić
  4. Kliknij przycisk 'Yes' w dialogu potwierdzenia
    - expect: Projekt powinien zostać usunięty z listy
  5. Po usunięciu wszystkich projektów sprawdź listę
    - expect: Lista projektów powinna być pusta
  6. Sprawdź widok główny
    - expect: Powinien wyświetlić się ekran "No Project Selected" z przyciskiem "Create new project"

### 2. Przypadki brzegowe

**Seed:** `tests/seed.spec.ts`

#### 2.1. Próba zamknięcia dialogu potwierdzenia klawiszem Escape

**File:** `tests/deleting-project/close-dialog-with-escape.spec.ts`

**Steps:**
  1. Kliknij na projekt z listy projektów
    - expect: Szczegóły projektu powinny zostać wyświetlone
  2. Kliknij przycisk 'Delete project'
    - expect: Dialog potwierdzenia powinien się pojawić
  3. Naciśnij klawisz 'Escape'
    - expect: Dialog powinien zostać zamknięty (jeśli obsługiwany) lub pozostać otwarty
  4. Sprawdź listę projektów
    - expect: Projekt powinien nadal znajdować się na liście projektów

#### 2.2. Szybkie wielokrotne kliknięcie przycisku Delete project

**File:** `tests/deleting-project/rapid-delete-clicks.spec.ts`

**Steps:**
  1. Kliknij na projekt z listy projektów
    - expect: Szczegóły projektu powinny zostać wyświetlone
  2. Szybko kliknij przycisk 'Delete project' kilka razy pod rząd
    - expect: Powinien pojawić się tylko jeden dialog potwierdzenia
  3. Kliknij przycisk 'No' w dialogu
    - expect: Dialog powinien zostać zamknięty, projekt powinien pozostać na liście
  4. Sprawdź listę projektów
    - expect: Projekt powinien nadal znajdować się na liście (tylko jeden egzemplarz)
