import { renderHook } from '@testing-library/react-hooks';
import { useTheCat } from '../../src/hooks';

jest.mock('../../src/services/TheCat.api', () => {
  const { listCatsMock } = require('../mocks/catlist');
  return {
    listCats: () => Promise.resolve(listCatsMock),
  };
});

describe('Tests of useTheCat', () => {
  it('should get list of cats', async () => {
    const hookUseTheCat = Object.assign(useTheCat);
    const testingLibraryReturn = renderHook(() => hookUseTheCat());

    const { result, waitForNextUpdate } = testingLibraryReturn;

    await waitForNextUpdate();
    const cats = result.current.catList;
    expect(cats.length).toEqual(5);
  });
});
