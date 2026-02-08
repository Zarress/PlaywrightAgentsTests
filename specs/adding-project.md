# Plan Testów Dodawania Projektów

> **Note:** Ogólne informacje o aplikacji i architekturze testów znajdują się w [README.md](README.md)

## Test Scenarios

### 1. Scenariusze Dodawania Projektów

**Seed:** `tests/seed.spec.ts`

#### 1.1. Pomyślne dodanie projektu z wszystkimi polami

**File:** `tests/adding-project/successful-project-creation.spec.ts`

**Steps:**
  1. Kliknij przycisk '+ Add Project' z sidebara
    - expect: Formularz utworzenia projektu powinien zostać otwarty z wszystkimi wymaganymi polami
  2. Wpisz 'Nowy Projekt Testowy' w polu Title
    - expect: Pole Title powinno zostać wypełnione
  3. Wpisz 'Opis nowego projektu testowego' w polu Description
    - expect: Pole Description powinno zostać wypełnione
  4. Wpisz '2026-04-15' w polu Due date
    - expect: Pole Due date powinno zostać wypełnione
  5. Kliknij przycisk 'Save'
    - expect: Projekt powinien zostać zapisany i pojawić się na liście projektów po lewej stronie
  6. Kliknij na nowo utworzony projekt z listy
    - expect: Szczegóły projektu powinny zostać wyświetlone z właściwymi danymi (nazwa, data, opis)

#### 1.2. Dodanie projektu przyciskiem 'Create new project'

**File:** `tests/adding-project/create-project-button.spec.ts`

**Steps:**
  1. Kliknij przycisk 'Create new project' z głównego widoku
    - expect: Formularz utworzenia projektu powinien zostać otwarty
  2. Wypełnij wszystkie pola: Title: 'Projekt z głównego przycisku', Description: 'Test drugiego sposobu dodawania', Due date: '2026-05-20' i zapisz projekt
    - expect: Pola formularza powinny zostać wypełnione i projekt zapisany
  3. Sprawdź, że projekt pojawił się na liście
    - expect: Projekt powinien być widoczny na liście projektów

#### 1.3. Walidacja wymaganych pól - puste Title

**File:** `tests/adding-project/validation-empty-title.spec.ts`

**Steps:**
  1. Kliknij przycisk '+ Add Project'
    - expect: Formularz powinien zostać otwarty
  2. Nie wypełniając żadnego pola, kliknij przycisk 'Save'
    - expect: Kursor powinien przenieść się do pola Title (walidacja)
  3. Sprawdź czy projekt nie został dodany do listy
    - expect: Projekt nie powinien zostać zapisany

#### 1.4. Walidacja wymaganych pól - brak Description

**File:** `tests/adding-project/validation-empty-description.spec.ts`

**Steps:**
  1. Kliknij przycisk '+ Add Project'
    - expect: Formularz powinien zostać otwarty
  2. Wpisz 'Test Validation' w polu Title
    - expect: Pole Title powinno zostać wypełnione
  3. Nie wypełniając Description i Due date, kliknij przycisk 'Save'
    - expect: Kursor powinien przenieść się do pola Description (walidacja)
  4. Sprawdź czy projekt nie został dodany do listy
    - expect: Projekt nie powinien zostać zapisany

#### 1.5. Walidacja wymaganych pól - brak Due date

**File:** `tests/adding-project/validation-empty-date.spec.ts`

**Steps:**
  1. Kliknij przycisk '+ Add Project'
    - expect: Formularz powinien zostać otwarty
  2. Wpisz 'Test Validation' w Title i 'Test opisu' w Description
    - expect: Pola Title i Description powinny zostać wypełnione
  3. Nie wypełniając Due date, kliknij przycisk 'Save'
    - expect: Kursor powinien przenieść się do pola Due date (walidacja)
  4. Sprawdź czy projekt nie został dodany do listy
    - expect: Projekt nie powinien zostać zapisany

#### 1.6. Anulowanie tworzenia projektu z częściowo wypełnionym formularzem

**File:** `tests/adding-project/cancel-creation.spec.ts`

**Steps:**
  1. Kliknij przycisk '+ Add Project'
    - expect: Formularz powinien zostać otwarty
  2. Wypełnij częściowo formularz: tylko Title: 'Test Cancel'
    - expect: Pole Title powinno zostać wypełnione
  3. Kliknij przycisk 'Cancel'
    - expect: Formularz powinien zostać zamknięty
  4. Sprawdź, że projekt 'Test Cancel' nie został dodany do listy projektów
    - expect: Projekt nie powinien zostać zapisany na liście

#### 1.7. Dodanie projektu z długą nazwą

**File:** `tests/adding-project/long-title.spec.ts`

**Steps:**
  1. Kliknij przycisk '+ Add Project'
    - expect: Formularz powinien zostać otwarty
  2. Wpisz w Title: 'To jest bardzo długa nazwa projektu testowego która sprawdza obsługę długich tytułów i czy są jakieś ograniczenia długości nazw projektów w tej aplikacji'
    - expect: Długa nazwa powinna zostać zaakceptowana
  3. Wypełnij Description: 'Test długiej nazwy' i Due date: '2026-06-10'
    - expect: Pozostałe pola powinny zostać wypełnione
  4. Kliknij przycisk 'Save'
    - expect: Projekt z długą nazwą powinien zostać zapisany i wyświetlony na liście
  5. Sprawdź, czy projekt z długą nazwą jest widoczny na liście bocznej
    - expect: Długa nazwa powinna być widoczna na liście projektów

#### 1.8. Walidacja formatu daty

**File:** `tests/adding-project/date-validation.spec.ts`

##### 1.8.1. Odrzucenie nieprawidłowego formatu daty

**Steps:**
  1. Kliknij przycisk '+ Add Project'
    - expect: Formularz powinien zostać otwarty
  2. Spróbuj wpisać nieprawidłowy format daty w pole Due date (np. 'złaData')
    - expect: System powinien odrzucić nieprawidłowy format i rzucić wyjątek 'Malformed value'

##### 1.8.2. Pomyślne utworzenie projektu z prawidłową datą

**Steps:**
  1. Kliknij przycisk '+ Add Project'
    - expect: Formularz powinien zostać otwarty
  2. Wypełnij wszystkie pola: Title: 'Test Daty', Description: 'Test walidacji dat', Due date: '2026-07-15'
    - expect: Pola formularza powinny zostać wypełnione prawidłowym formatem daty
  3. Kliknij przycisk 'Save'
    - expect: Projekt z prawidłową datą powinien zostać utworzony i pojawić się na liście

#### 1.9. Dodanie projektów z identycznymi nazwami

**File:** `tests/adding-project/duplicate-names.spec.ts`

**Steps:**
  1. Utwórz projekt z danymi: Title: 'Duplikat Projektu', Description: 'Pierwszy projekt', Due date: '2026-08-01'
    - expect: Pierwszy projekt powinien zostać utworzony
  2. Utwórz drugi projekt z danymi: Title: 'Duplikat Projektu', Description: 'Drugi projekt o tej samej nazwie', Due date: '2026-08-15'
    - expect: Drugi projekt z tą samą nazwą powinien zostać utworzony
  3. Sprawdź, czy lista projektów zawiera oba projekty 'Duplikat Projektu'
    - expect: Oba projekty powinny być widoczne na liście, mimo identycznych nazw
  4. Kliknij na pierwszy projekt i sprawdź jego szczegóły (data: 1 sie 2026, opis: 'Pierwszy projekt')
    - expect: Każdy projekt powinien mieć właściwe szczegóły
  5. Kliknij na drugi projekt i sprawdź jego szczegóły (data: 15 sie 2026, opis: 'Drugi projekt o tej samej nazwie')
    - expect: Drugi projekt powinien mieć swoje właściwe szczegóły

#### 1.10. Dodanie projektu z datą w przeszłości

**File:** `tests/adding-project/past-date.spec.ts`

**Steps:**
  1. Kliknij przycisk '+ Add Project'
    - expect: Formularz powinien zostać otwarty
  2. Wypełnij formularz: Title: 'Projekt z przeszłości', Description: 'Test daty z przeszłości', Due date: '2025-01-01'
    - expect: Data z przeszłości powinna zostać zaakceptowana
  3. Kliknij przycisk 'Save'
    - expect: Projekt z datą z przeszłości powinien zostać zapisany
  4. Kliknij na projekt i sprawdź, czy data '1 sty 2025' jest wyświetlana
    - expect: Projekt powinien wyświetlać datę z przeszłości

#### 1.11. Dodanie projektu z datą daleko w przyszłości

**File:** `tests/adding-project/future-date.spec.ts`

**Steps:**
  1. Kliknij przycisk '+ Add Project'
    - expect: Formularz powinien zostać otwarty
  2. Wypełnij formularz: Title: 'Projekt dalekiej przyszłości', Description: 'Test odległej daty', Due date: '2030-12-31'
    - expect: Data daleko w przyszłości powinna zostać zaakceptowana
  3. Kliknij przycisk 'Save'
    - expect: Projekt z odległą datą powinien zostać zapisany
  4. Kliknij na projekt i sprawdź, czy data '31 gru 2030' jest poprawnie wyświetlana
    - expect: Projekt powinien wyświetlać przyszłą datę
