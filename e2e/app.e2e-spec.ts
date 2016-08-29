import { Angular2SnapsvgDemoPage } from './app.po';

describe('angular2-snapsvg-demo App', function() {
  let page: Angular2SnapsvgDemoPage;

  beforeEach(() => {
    page = new Angular2SnapsvgDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
