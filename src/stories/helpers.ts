import { NgModuleMetadata } from '@storybook/angular/dist/client/preview/angular/types';

export const moduleMetadata = (metadata: Partial<NgModuleMetadata>) => (storyFn: () => any) => {
  const story = storyFn();
  const storyMetadata = story.moduleMetadata || {};
  metadata = metadata || {};

  return {
    ...story,
    moduleMetadata: {
      declarations: [...(metadata.declarations || []), ...(storyMetadata.declarations || [])],
      entryComponents: [...(metadata.entryComponents || []), ...(storyMetadata.entryComponents || [])],
      imports: [...(metadata.imports || []), ...(storyMetadata.imports || [])],
      schemas: [...(metadata.schemas || []), ...(storyMetadata.schemas || [])],
      providers: [...(metadata.providers || []), ...(storyMetadata.providers || [])],
    },
  };
};
