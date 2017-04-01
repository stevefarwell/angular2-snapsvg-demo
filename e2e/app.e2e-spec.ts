import { AngularSnapSvgDemoPage } from './app.po';

describe('angular-snap-svg-demo App', () => {
  let page: AngularSnapSvgDemoPage;

  beforeEach(() => {
    page = new AngularSnapSvgDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
