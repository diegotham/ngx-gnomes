import { AppPage } from './app.po';
import { browser } from 'protractor';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

describe('workspace-project App', () => {
  const page = new AppPage();

  beforeEach(() => {
    page.navigateTo();
  });

  it('should display Brastlewark in the navbar', () => {
    expect(page.getMainTitle()).toEqual('Brastlewark');
  });
  it('should show a gnome\'s name when clicking on one', async () => {
    await page.clickOnItemByClass('gnome');
    await page.waitForDialog();
    expect(page.checkMatListItemExist('Name')).toBeTruthy();
  });
  it('should show a gnome\'s age when clicking on one', async () => {
    await page.clickOnItemByClass('gnome');
    await page.waitForDialog();
    expect(page.checkMatListItemExist('Age')).toBeTruthy();
  });
  it('should show a gnome\'s hair color when clicking on one', async () => {
    await page.clickOnItemByClass('gnome');
    await page.waitForDialog();
    expect(page.checkMatListItemExist('Hair Color')).toBeTruthy();
  });
  it('should show a gnome\'s height when clicking on one', async () => {
    await page.clickOnItemByClass('gnome');
    await page.waitForDialog();
    expect(page.checkMatListItemExist('Height')).toBeTruthy();
  });
  it('should show a gnome\'s weight when clicking on one', async () => {
    await page.clickOnItemByClass('gnome');
    await page.waitForDialog();
    expect(page.checkMatListItemExist('Weight')).toBeTruthy();
  });
});
