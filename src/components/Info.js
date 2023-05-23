import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSeasons } from '../redux/seasons/seasonSlice';
import { useLocation } from 'react-router-dom';

const Information = () => {
    const details = useSelector((state) => state.seasons)
    const location = useLocation()
    const holiday = location.state
    const dispatch = useDispatch() 

    useEffect(() => {
        dispatch(getSeasons(holiday))
    }, [])

    return(
        <div>
                    {details.map((day) => (
                        <div key={day.date}>
                            <h2>{day.name}</h2>
                            <p>{day.local_name}</p>
                            <p>{day.type}</p>
                            <p>{day.status}</p>
                            <p>{day.position}</p>
                        </div>
                    ))}
        </div>
    )
}

export default Information