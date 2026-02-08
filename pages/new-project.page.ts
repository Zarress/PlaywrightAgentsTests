import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class NewProjectPage extends BasePage {
  readonly formHeading: Locator;
  readonly titleInput: Locator;
  readonly descriptionInput: Locator;
  readonly dueDateInput: Locator;
  readonly saveButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    super(page);
    this.formHeading = page.getByRole('heading', { name: 'Creating a New Project', level: 1 });
    this.titleInput = page.getByRole('textbox', { name: 'Title' });
    this.descriptionInput = page.getByRole('textbox', { name: 'Description' });
    this.dueDateInput = page.getByRole('textbox', { name: 'Due date' });
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
  }

  async verifyFormVisible() {
    await expect(this.formHeading).toBeVisible();
  }

  async fillTitle(title: string) {
    await this.titleInput.fill(title);
  }

  async fillDescription(description: string) {
    await this.descriptionInput.fill(description);
  }

  async fillDueDate(date: string) {
    await this.dueDateInput.fill(date);
  }

  async fillForm(data: { title?: string; description?: string; dueDate?: string }) {
    if (data.title !== undefined) {
      await this.fillTitle(data.title);
    }
    if (data.description !== undefined) {
      await this.fillDescription(data.description);
    }
    if (data.dueDate !== undefined) {
      await this.fillDueDate(data.dueDate);
    }
  }

  async clickSave() {
    await this.saveButton.click();
  }

  async clickCancel() {
    await this.cancelButton.click();
  }

  async verifyTitleFocused() {
    await expect(this.titleInput).toBeFocused();
  }

  async saveProject(data: { title: string; description: string; dueDate: string }) {
    await this.fillForm(data);
    await this.clickSave();
  }

  async createProject(data: { title: string; description: string; dueDate: string }) {
    await this.verifyFormVisible();
    await this.saveProject(data);
  }
}