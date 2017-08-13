import { MydemoAppPage } from './app.po';

describe('mydemo-app App', () => {
  let page: MydemoAppPage;

  beforeEach(() => {
    page = new MydemoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
