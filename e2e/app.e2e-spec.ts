import { MaterialProjectXPage } from './app.po';

describe('material-project-x App', () => {
  let page: MaterialProjectXPage;

  beforeEach(() => {
    page = new MaterialProjectXPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
