import { useSelector } from 'react-redux';

const Information = () => {
    const details = useSelector((state) => state.seasons)

    return(
        <div>
                    {details.map((day) => (
                        <div key={day.date}>
                            <h2>{day.name}</h2>
                            <p>{day.localName}</p>
                        </div>
                    ))}
        </div>
    )
}