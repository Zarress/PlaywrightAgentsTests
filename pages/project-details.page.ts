import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class ProjectDetailsPage extends BasePage {
  readonly deleteProjectButton: Locator;
  readonly deleteConfirmYesButton: Locator;
  readonly deleteConfirmNoButton: Locator;
  readonly deleteConfirmDialog: Locator;

  constructor(page: Page) {
    super(page);
    this.deleteProjectButton = page.getByRole('button', { name: 'Delete project' });
    this.deleteConfirmYesButton = page.getByRole('button', { name: 'Yes' });
    this.deleteConfirmNoButton = page.getByRole('button', { name: 'No' });
    this.deleteConfirmDialog = page.getByRole('dialog');
  }

  getProjectHeading(name: string): Locator {
    return this.page.getByRole('heading', { name: name, level: 1 });
  }

  async verifyProjectHeading(name: string) {
    await expect(this.getProjectHeading(name)).toBeVisible();
  }

  async verifyProjectDate(date: string) {
    await expect(this.page.getByText(date)).toBeVisible();
  }

  async verifyProjectDescription(description: string) {
    await expect(this.page.getByText(description)).toBeVisible();
  }

  async verifyProjectDetails(data: { title: string; date: string; description: string }) {
    await this.verifyProjectHeading(data.title);
    await this.verifyProjectDate(data.date);
    await this.verifyProjectDescription(data.description);
  }

  async verifyDeleteButtonVisible() {
    await expect(this.deleteProjectButton).toBeVisible();
  }

  async clickDeleteProject() {
    await this.deleteProjectButton.click();
  }

  async confirmDelete() {
    await this.deleteConfirmYesButton.click();
  }

  async cancelDelete() {
    await this.deleteConfirmNoButton.click();
  }

  async verifyDeleteConfirmDialog() {
    await expect(this.deleteConfirmDialog).toBeVisible();
    await expect(this.page.getByText('Are you sure you want to delete this whole project?')).toBeVisible();
    await expect(this.deleteConfirmYesButton).toBeVisible();
    await expect(this.deleteConfirmNoButton).toBeVisible();
  }

  async dismissDialogWithEscape() {
    await this.page.keyboard.press('Escape');
  }

  async rapidClickDelete(times: number) {
    await this.deleteProjectButton.click();
    for (let i = 1; i < times; i++) {
      await this.deleteProjectButton.click({ force: true });
    }
  }

  async addTask(taskName: string) {
    await this.page.getByRole('textbox', { name: 'Enter task name' }).fill(taskName);
    await this.page.getByRole('button', { name: '+ Add Task' }).click();
  }

  async verifyTaskVisible(taskName: string) {
    await expect(this.page.getByText(taskName)).toBeVisible();
  }
}