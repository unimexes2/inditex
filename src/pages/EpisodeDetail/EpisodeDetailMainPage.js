import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../css/episode.css';

function EpisodeDetailMainPage() {
  const location = useLocation();
  const { state } = location.state;
  const podcastCollection = state.podcastCollection;
  let description = state.item;

  return (
    <div className="podcastdetail">
      <Link to={'/podcast/' + state.podcastId}>
        <div className="imageblock">
          <img
            src={podcastCollection['im:image'][2].label}
            alt=""
            className="rectangleimg"
          />

          <div className="description1underimage">
            <div className="lineimageblock" />
            <p className="podcastname">
              {' '}
              {podcastCollection['im:name'].label}{' '}
            </p>
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
      </Link>

      <div className="descriptionblock">
        <div className="episode">
          <div className="headerepisode">{description.trackName}</div>

          <div className="descriptiontext">{description.description}</div>
          <div>
            <audio className="audioplayer" controls>
              <source src={state.item.previewUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EpisodeDetailMainPage;
