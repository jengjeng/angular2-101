import { AngularQueuePage } from './app.po';

describe('angular-queue App', () => {
  let page: AngularQueuePage;

  beforeEach(() => {
    page = new AngularQueuePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
