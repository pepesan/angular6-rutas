import { browser, by, element } from 'protractor';

export class TodoPage {
  navigateTo() {
    return browser.get('/todo');
  }

  getParagraphText() {
    const para = element(by.css('p')).getText();
    // console.log(para);
    return para;
  }
}
