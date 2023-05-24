import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Currencies = () => {
    const navigation = useNavigate()
    const { currencies } = useSelector((store) => store.currencies)
    const [search, setSearch] = useState('')

    const filtered = currencies.filter((currency) => currency.symbol
    .toLowerCase()
    .includes(search.toLowerCase()))

    

    const switchPage = (currency) => {
        navigation(`information/${currency.name}`, {state : {currency}})
    }

    return(
        <div>
            <h2>Currency Tracker</h2>
            <div>
            <input
                type="text"
                placeholder="Search coin..."
                className="search-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                role="button"
                tabIndex={0}
        />
            </div>
            <div>
                    {filtered.map((currency) => (
                        <div
                        key={currency.id}
                        onClick={() =>{switchPage(currency)}}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              switchPage(currency);
                            }
                        }}
                        >
                            <h2>{currency.symbol}</h2>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Currencies