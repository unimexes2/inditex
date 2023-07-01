import '../../css/app.css';
import { Link } from 'react-router-dom';
export default function SongCard({ filteredList }) {
  return (
    <div className="songcard">
      {filteredList.map((item, index) => (
        <div className="wrappercard" key={item.title.label}>
          <Link to={'/podcast/' + item.id.attributes['im:id']}>
            <div className="circle">
              <img
                src={item['im:image'][2].label}
                alt=""
                className="circleimg"
              />
            </div>
            <div className="cardalone">
              <div className="cardtextblock">
                <p className="cardtext1">
                  {item['im:name'].label.substring(0, 20)}
                </p>
                <p className="cardtext2">
                  Author: {item['im:artist'].label.substring(0, 20)}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
