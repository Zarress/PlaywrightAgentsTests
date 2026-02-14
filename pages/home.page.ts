import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class HomePage extends BasePage {
  readonly addProjectButton: Locator;
  readonly createNewProjectButton: Locator;
  readonly noProjectSelectedHeading: Locator;
  readonly projectList: Locator;

  constructor(page: Page) {
    super(page);
    this.addProjectButton = page.getByRole('button', { name: '+ Add Project' });
    this.createNewProjectButton = page.getByRole('button', { name: 'Create new project' });
    this.noProjectSelectedHeading = page.getByRole('heading', { name: 'No Project Selected', level: 1 });
    this.projectList = page.getByRole('complementary').getByRole('list');
  }

  async goto() {
    await this.page.goto('');
  }

  async clickAddProject() {
    await this.addProjectButton.click();
  }

  async clickCreateNewProject() {
    await this.createNewProjectButton.click();
  }

  async verifyNoProjectSelectedVisible() {
    await expect(this.noProjectSelectedHeading).toBeVisible();
  }

  async verifyCreateNewProjectButtonVisible() {
    await expect(this.createNewProjectButton).toBeVisible();
  }

  getProjectByName(name: string): Locator {
    return this.projectList.getByRole('listitem').filter({ hasText: name });
  }

  async clickProjectByName(name: string) {
    await this.getProjectByName(name).click();
  }

  async verifyProjectVisible(name: string) {
    await expect(this.getProjectByName(name)).toBeVisible();
  }

  async verifyProjectNotVisible(name: string) {
    await expect(this.getProjectByName(name)).not.toBeVisible();
  }

  async verifyProjectCount(name: string, count: number) {
    await expect(this.getProjectByName(name)).toHaveCount(count);
  }

  async clickFirstProjectByName(name: string) {
    await this.getProjectByName(name).first().click();
  }

  async clickNthProjectByName(name: string, index: number) {
    await this.getProjectByName(name).nth(index).click();
  }
}