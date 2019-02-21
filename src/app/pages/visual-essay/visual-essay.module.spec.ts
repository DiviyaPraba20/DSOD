import { VisualEssayModule } from './visual-essay.module';

describe('VisualEssayModule', () => {
  let visualEssayModule: VisualEssayModule;

  beforeEach(() => {
    visualEssayModule = new VisualEssayModule();
  });

  it('should create an instance', () => {
    expect(visualEssayModule).toBeTruthy();
  });
});
