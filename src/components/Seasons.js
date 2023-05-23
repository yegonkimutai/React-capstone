import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Information from './Info';

const Seasons = () => {
    const allSeasons = useSelector((state) => state.seasons)

    return(
        <div>
            <div>
                <h2>Global Holidays</h2>
            </div>
            <div>
                    {allSeasons.map((day) => (
                        <p key={day.date}>
                            <Link to='information'>
                            {day.name}
                            </Link>
                        <span>{day.date}</span>
                        </p>
                    ))}
            </div>
        </div>
    )
}

export default Seasons