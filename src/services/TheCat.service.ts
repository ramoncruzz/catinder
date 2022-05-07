import service from './TheCat.api';
import { Cat } from '../utils/types';

const listCats = (page: number, size: number): Promise<Array<Cat>> =>
  new Promise<Array<Cat>>((resolve, reject) => {
    service
      .get<Array<Cat>>('/breeds', {
        params: {
          page,
          size,
        },
      })
      .then((response) => {
        resolve(response.data);
        console.log('calling the page', page);
      })
      .catch((error:any) => reject(error));
  });

export { listCats };
