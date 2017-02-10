import { OscarPage } from './app.po';

describe('oscar App', function() {
  let page: OscarPage;

  beforeEach(() => {
    page = new OscarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
