import '../css/app.css';
import RouterMain from '../router/RouterMain';
import { FetchList } from '../api/fetchList';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setJsonData, setLoadState } from '../context/actions';

export default function LayoutMain() {
  const [isLoad, setIsLoad] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      // checking local storage for saved data

      const cachedList = localStorage.getItem('cachedList');
      const lastRequestTimestamp = localStorage.getItem('lastRequestTimestamp');
      const currentTime = Date.now();
      const timeElapsed = currentTime - lastRequestTimestamp;
      // checking 24 hour period

      if (cachedList && timeElapsed < 24 * 60 * 60 * 1000) {
        // Put everything in the state

        dispatch(setJsonData(JSON.parse(cachedList)));
        setIsLoad(false);
      } else {
        try {
          // circle at the right side is ON

          dispatch(setLoadState(true));
          // API call

          const result = await FetchList();
          /// Put fetched data to local storage and in the REDUX

          dispatch(setJsonData(result.data.feed.entry));
          dispatch(setLoadState(false));

          localStorage.setItem(
            'cachedList',
            JSON.stringify(result.data.feed.entry),
          );
          localStorage.setItem('lastRequestTimestamp', Date.now());
        } catch (error) {
          console.error('Error fetching list:', error);
        } finally {
          setIsLoad(false);
        }
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !isLoad ? (
    <div className="maincontainer">
      <RouterMain />
    </div>
  ) : null;
}
