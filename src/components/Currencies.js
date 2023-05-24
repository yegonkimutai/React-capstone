import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Currencies.css';

const Currencies = () => {
  const navigation = useNavigate();
  const { currencies } = useSelector((store) => store.currencies);
  const [search, setSearch] = useState('');

  const filtered = currencies.filter((currency) => currency.symbol
    .toLowerCase()
    .includes(search.toLowerCase()));

  const switchPage = (currency) => {
    navigation(`information/${currency.name}`, { state: { currency } });
  };

  return (
    <div className="main-container">
      <h2 className="home-title">Currency Tracker</h2>
      <div>
        <input
          type="text"
          placeholder="Search currency..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          role="button"
          tabIndex={0}
        />
      </div>
      <div className="currency-list">
        {filtered.map((currency) => (
          <button
            type="button"
            key={currency.id}
            onClick={() => { switchPage(currency); }}
            onKeyDown={(e) => {
              if (e.target === 'Enter') {
                switchPage(currency);
              }
            }}
            className="currency-card"
          >
            <h2>{currency.symbol}</h2>
            <p className="change">
              {currency.percent_change_1h < 0 ? (
                <>
                  <FaChevronDown style={{ color: 'red' }} />
                  <span style={{ color: 'red' }}>
                    {Math.abs(currency.percent_change_1h)}
                    %
                  </span>
                </>
              ) : (
                <>
                  <FaChevronUp style={{ color: 'green' }} />
                  <span style={{ color: 'green' }}>
                    {currency.percent_change_1h}
                    %
                  </span>
                </>
              )}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Currencies;
