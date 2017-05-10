import { FundMePage } from './app.po';

describe('fund-me App', () => {
  let page: FundMePage;

  beforeEach(() => {
    page = new FundMePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
