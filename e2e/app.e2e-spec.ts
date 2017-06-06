import { OctoOpsPage } from './app.po';

describe('octo-ops App', () => {
  let page: OctoOpsPage;

  beforeEach(() => {
    page = new OctoOpsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
