import { useEffect, useState } from 'react';
import { listCats } from '../services/TheCat.api';
import { Cat } from '../utils/types';
const useBoticario = () => {
  const [catList, setCatList] = useState<Cat[]>([]);

  const [page, setPage] = useState<number>(1);

  const [limit] = useState<number>(15);

  useEffect(() => {
    listCats(page, limit).then(response =>{
        setCatList(response);
    })
  }, [page]);

  return { catList, setPage };
};

export default useBoticario;
