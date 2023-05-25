import { useLocation } from 'react-router-dom';
import { FaChevronDown, FaChevronUp, FaBitcoin } from 'react-icons/fa';
import './Info.css';

const Information = () => {
  const location = useLocation();
  const { currency } = location.state;

  return (
    <div className="main-cont">
      <h1>{currency.name}</h1>
      <h4>{currency.symbol}</h4>
      <div key={currency.id}>
        <h3>Coin details:</h3>
        <div className="details-cont">
          <p>
            Market Cap:
            <span>
              $
              {Number(currency.market_cap_usd).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </span>
          </p>
          <p>
            Volume(24h):
            <span>
              $
              {Number(currency.volume24a).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </span>
          </p>
          <p>
            Total Supply:
            {' '}
            <span>
              {Number(currency.tsupply).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </span>
          </p>
          <p>
            1h %:
            {' '}
            {currency.percent_change_1h < 0 ? (
              <>
                <span style={{ color: 'red' }}>
                  <FaChevronDown style={{ color: 'red' }} />
                  {Math.abs(currency.percent_change_1h)}
                  %
                </span>
              </>
            ) : (
              <>
                <span style={{ color: 'green' }}>
                  <FaChevronUp style={{ color: 'green' }} />
                  {currency.percent_change_1h}
                  %
                </span>
              </>
            )}
          </p>
          <p>
            24h %:
            {' '}
            {currency.percent_change_24h < 0 ? (
              <>
                <span style={{ color: 'red' }}>
                  <FaChevronDown style={{ color: 'red' }} />
                  {Math.abs(currency.percent_change_24h)}
                  %
                </span>
              </>
            ) : (
              <>
                <span style={{ color: 'green' }}>
                  <FaChevronUp style={{ color: 'green' }} />
                  {currency.percent_change_24h}
                  %
                </span>
              </>
            )}
          </p>
          <p>
            7d %:
            {' '}
            {currency.percent_change_7d < 0 ? (
              <>
                <span style={{ color: 'red' }}>
                  <FaChevronDown style={{ color: 'red' }} />
                  {Math.abs(currency.percent_change_7d)}
                  %
                </span>
              </>
            ) : (
              <>
                <span style={{ color: 'green' }}>
                  <FaChevronUp style={{ color: 'green' }} />
                  {currency.percent_change_7d}
                  %
                </span>
              </>
            )}
          </p>
          <p>
            Price:
            {' '}
            <span>
              <FaBitcoin />
              {Number(currency.price_btc).toFixed(2)}
            </span>
          </p>
          <p>
            Price:
            <span>
              $
              {Number(currency.price_usd).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
