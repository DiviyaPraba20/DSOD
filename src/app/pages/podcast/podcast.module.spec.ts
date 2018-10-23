import { PodcastModule } from './podcast.module';

describe('PodcastModule', () => {
  let podcastModule: PodcastModule;

  beforeEach(() => {
    podcastModule = new PodcastModule();
  });

  it('should create an instance', () => {
    expect(podcastModule).toBeTruthy();
  });
});
