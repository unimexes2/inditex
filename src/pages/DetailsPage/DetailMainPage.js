import { Link, useParams, useNavigate } from 'react-router-dom';
import '../../css/podcastdetail.css';
import { connect } from 'react-redux';
import { detailPodcast } from '../../api/detailPodcast';
import { useEffect, useState } from 'react';
import { setLoadState } from '../../context/actions';
import { useDispatch } from 'react-redux';
import millisecondsConverter from '../../helpers/millisecondsConverter';
import formatDate from '../../helpers/formatDate';

function DetailMainPage({ songList }) {
  const [isloading, setisLoading] = useState(true);
  const [podcast, setPodcast] = useState(null);
  const dispatch = useDispatch();
  const { podcastId } = useParams();
  const navigate = useNavigate();
  const podcastCollection = songList.jsonData.filter(item => {
    return item.id.attributes['im:id'] === podcastId ? item : null;
  })[0];

  useEffect(() => {
    //Retriving cached podcast from local storage

    const cachedPodcast = localStorage.getItem(`cachedPodcast${podcastId}`);
    const lastRequestTimestamp = localStorage.getItem(
      `lastRequestTimestamp${podcastId}`,
    );

    const currentTime = Date.now();
    const timeElapsed = currentTime - lastRequestTimestamp;
    // Checking last visit time

    if (cachedPodcast && timeElapsed < 24 * 60 * 60 * 100 * 0) {
      setPodcast(JSON.parse(cachedPodcast));
      setisLoading(false);
    } else {
      const fetchData = async () => {
        // circle at the right side is ON
        dispatch(setLoadState(true));
        try {
          //API call with COR$S proxy(sometimes it does not work - its a free service)
          const detailsList = await detailPodcast(podcastId);

          //Handling API fetch error
          if (detailsList === 'error') {
            console.log('It is an error');

            navigate('/error');
          }

          setPodcast(detailsList);

          // Put fetching data inside local storage
          localStorage.setItem(
            `cachedPodcast${podcastId}`,
            JSON.stringify(detailsList),
          );
          localStorage.setItem(`lastRequestTimestamp${podcastId}`, Date.now());
        } catch (error) {
          console.error('Error fetching podcast details:', error);
          navigate('/error');
        } finally {
          // Everythingh is fine - turn off circle
          dispatch(setLoadState(false));
          setisLoading(false);
        }
      };

      fetchData();
    }
    // eslint-disable-next-line
  }, [podcastId, dispatch, songList]);

  return !isloading ? (
    <div className="podcastdetail">
      <div className="imageblock">
        <img
          src={podcastCollection['im:image'][2].label}
          alt=""
          className="rectangleimg"
        />

        <div className="description1underimage">
          <div className="lineimageblock" />
          <p className="podcastname"> {podcastCollection['im:name'].label} </p>
          <p className="artistname">
            {' '}
            by {podcastCollection['im:artist'].label}{' '}
          </p>
          <div className="lineimageblock" />
          <div className="description2underimage">
            <p className="tableheader"> Description:</p>
            <p className="artistname">{podcastCollection.summary.label}</p>
          </div>
        </div>
      </div>

      <div className="descriptionblock">
        <div className="episodes">
          <p className="episodescountertext">
            Episodes:{podcast.resultCount - 1}
          </p>
        </div>

        <div className="episodestable">
          <div className="table">
            <div className="row">
              <div className="cell1">
                <p className="tableheader">Title</p>
              </div>
              <div className="cell2">
                <p className="tableheader">Date</p>
              </div>
              <div className="cell3">
                <p className="tableheader">Duration</p>
              </div>
            </div>
            {podcast.results.slice(1).map((item, index) => {
              let time = millisecondsConverter(item.trackTimeMillis);
              let releaseDate = formatDate(item.releaseDate);
              const podcastLength = podcast.results.slice(2).length;

              return (
                <Link
                  to={'/podcast/episode/' + item.trackId}
                  state={{ state: { item, podcastCollection, podcastId } }}
                  key={item.trackId}
                >
                  <div className={index % 2 === 0 ? 'roweven' : 'row'}>
                    <div
                      className={
                        index === podcastLength ? 'celllast1' : 'cell1'
                      }
                    >
                      {item.trackName}
                    </div>
                    <div
                      className={
                        index === podcastLength ? 'celllast2' : 'cell2'
                      }
                    >
                      {releaseDate}
                    </div>
                    <div
                      className={
                        index === podcastLength ? 'celllast3' : 'cell3'
                      }
                    >
                      {time}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
const mapStateToProps = state => ({
  songList: state.data,
  isLoading: state.load,
});

export default connect(mapStateToProps)(DetailMainPage);
