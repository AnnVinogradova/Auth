import { nanoquery } from '@nanostores/query';

export const [createFetcherStore, createMutatorStore] = nanoquery({
  fetcher: (...keys ) => fetch(keys.join('')).then(r => r.json()),
});

export const $photos = createFetcherStore(['/api/public/photo/']);
export const $addPhotos = createMutatorStore(
  async ({ data, getCacheUpdater }) => {

    const [updateCache, char] = getCacheUpdater('/api/public/photo/');
    updateCache([...char, data]);

    return fetch('/api/public/photo/',{
      method: 'POST',
      body:{data}
    });
  }
);