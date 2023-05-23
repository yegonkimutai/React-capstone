import { useSelector } from 'react-redux';

const Seasons = () => {
    const allSeasons = useSelector((state) => state.seasons)

    return(
        <div>
            <div>
                <h2>Global Holidays</h2>
            </div>
            <div>
                    {allSeasons.map((day) => (
                        <p key={day.date}>{day.name}
                        <span>{day.date}</span>
                        </p>
                    ))}
            </div>
        </div>
    )
}

export default Seasons