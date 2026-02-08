import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class ProjectDetailsPage extends BasePage {
  constructor(page: Page) {
    super(page);
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
}