import Counter from './CounterComponent.js';
import SongCard from './SongCard.js';
import '../../css/app.css';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import React from 'react';

function MainPage({ songList }) {
  const [songNumbers, setSongNumber] = useState(null);
  const [filteredList, setFilteredList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (songList.jsonData) {
      setSongNumber(songList.jsonData.length);
      setFilteredList(songList.jsonData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [songList.jsonData]);
  // Seraching Song o Author
  const filterArray = () => {
    if (songList.jsonData) {
      const filtered = songList.jsonData.filter(
        item =>
          item.title.label.toLowerCase().includes(inputValue.toLowerCase()) ||
          item['im:name'].label
            .toLowerCase()
            .includes(inputValue.toLowerCase()),
      );
      setFilteredList(filtered);

      filtered.length === 0 ? setSongNumber(0) : setSongNumber(filtered.length);
    }
  };

  React.useEffect(() => {
    filterArray();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <>
      {songList.jsonData ? (
        <div>
          <div className="searchboxcontainer">
            <input
              className="inputbox"
              type="text"
              placeholder="Filter podcasts..."
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />

            <div className="counterbox">
              <Counter songNumbers={songNumbers} />
            </div>
          </div>
          <div className="cardcontainer">
            <SongCard filteredList={filteredList} />
          </div>
        </div>
      ) : null}
    </>
  );
}
const mapStateToProps = state => ({
  songList: state.data,
});

export default connect(mapStateToProps)(MainPage);
