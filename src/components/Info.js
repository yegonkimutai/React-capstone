import { useLocation} from 'react-router-dom';
import { FaChevronDown, FaChevronUp, FaBitcoin } from 'react-icons/fa';
import './Info.css'

const Information = () => {
    const location = useLocation()
    const { currency } = location.state
    
    return(
        <div className='main-cont'>
            <h1>{currency.name}</h1>
            <h4>{currency.symbol}</h4>
            <div key={currency.id}>
            <h3>Coin details:</h3>
            <div className='details-cont'>
          <p>
            Market Cap: $
            {Number(currency.market_cap_usd).toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </p>
          <p>
            Volume(24h): $
            {Number(currency.volume24a).toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </p>
          <p>
            Total Supply:
            {' '}
            {Number(currency.tsupply).toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </p>
          <p>
            1h %:
            {' '}
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
          <p>
            24h %:
            {' '}
            {currency.percent_change_24h < 0 ? (
              <>
               <FaChevronDown style={{ color: 'red' }} />
                <span style={{ color: 'red' }}>
                  {Math.abs(currency.percent_change_24h)}
                  %
                </span>
              </>
            ) : (
              <>
              <FaChevronUp style={{ color: 'green' }} />
                <span style={{ color: 'green' }}>
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
               <FaChevronDown style={{ color: 'red' }} />
                <span style={{ color: 'red' }}>
                  {Math.abs(currency.percent_change_7d)}
                  %
                </span>
              </>
            ) : (
              <>
              <FaChevronUp style={{ color: 'green' }} />
                <span style={{ color: 'green' }}>
                  {currency.percent_change_7d}
                  %
                </span>
              </>
            )}
          </p>
          <p>
            Price:
            {' '}
            <FaBitcoin />
            {Number(currency.price_btc).toFixed(2)}
          </p>
          <p>
            Price: $
            {Number(currency.price_usd).toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
      </div>
        </div>
    )
}

export default Information