import { TodoPage } from './todo.po';

describe('workspace-project App', () => {
  let page: TodoPage;

  beforeEach(() => {
    page = new TodoPage();
  });

  it('should display todo message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('todo works!');
  });
});
