import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Currencies = () => {
    const navigation = useNavigate()
    const { currencies } = useSelector((store) => store.currencies)
    const filtered = currencies.filter((currency) => currency.symbol)

    const switchPage = (currency) => {
        navigation(`information/${currency.name}`, {state : {currency}})
    }

    return(
        <div>
            <div>
                <h2>Currency Tracker</h2>
            </div>
            <div>
                    {filtered.map((currency) => (
                        <div
                        key={currency.id}
                        onClick={() =>{switchPage(currency)}}
                        >
                            <h2>{currency.symbol}</h2>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Currencies