import { BazarPage } from './app.po';

describe('bazar App', () => {
  let page: BazarPage;

  beforeEach(() => {
    page = new BazarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
