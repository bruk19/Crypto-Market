import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { LoadCrypto } from '../Redux/CryptoReducer';

const Pages = () => {
    const dispatch = useDispatch();
    const myState = useSelector((state) => state);
    useEffect(() => {
      if (myState.length ===0) {
        dispatch(LoadCrypto());
      }
    }, []);

    const [search, setSearch] = useSearchParams();
  return (
    <>
    <div className='search-bar'>
        <input
            type='text' 
            value={search.get('filter') || ''}
            placeholder='search crypto...' 
            on onChange={(e) => {
             const filter = e.target.value;
             if (filter) {
                setSearch({ filter });
             } else {
                setSearch({});
             }
         }} 
        />
    </div>
    </>
  )
}

export default Pages