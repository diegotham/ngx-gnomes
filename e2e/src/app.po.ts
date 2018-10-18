import { browser, by, element, ExpectedConditions } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  // Get
  getMainTitle() {
    return element(by.css('app-root h1')).getText();
  }

  // Check
  checkMatListItemExist(item): any {
    return element.all(by.cssContainingText('.mat-list-item-content', item)).isPresent();
  }

  // Click
  clickOnItemByClass(className): any {
    return element(by.className(className)).click();
  }

  // Scroll
  scrollIntoDivClass(className): any {
    const inputBox = element(by.xpath(`//div[contains(concat(' ', @class, ' '), ' ${className} ')]`));
    return browser.executeScript('arguments[0].scrollIntoView()', inputBox.getWebElement());
  }

  // Wait
  waitForDialog(): any {
    return this.waitUntilClassVisible('mat-dialog-container');
  }
  private waitUntilClassVisible(className): any {
    const item = element(by.className(className));
    return browser.wait(ExpectedConditions.visibilityOf(item));
  }
}
