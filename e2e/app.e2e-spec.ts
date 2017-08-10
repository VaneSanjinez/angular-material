import { MaterialDemoPage } from './app.po';

describe('material-demo App', () => {
  let page: MaterialDemoPage;

  beforeEach(() => {
    page = new MaterialDemoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
