import { useLocation} from 'react-router-dom';

const Information = () => {
    const location = useLocation()
    const { currency } = location.state
    
    return(
        <div>
            <h1>{currency.name}</h1>
            <h4 className="currency-symbol">{currency.symbol}</h4>
            <div className="deets-container" key={currency.id}>
        <h3 className="deets-title">coin details:</h3>
        <div>
          <p className="market-cap deets">
            market cap: $
            {Number(currency.market_cap_usd).toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="volume deets">
            volume(24h): $
            {Number(currency.volume24a).toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="total-supply deets">
            total supply:
            {' '}
            {Number(currency.tsupply).toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="change deets">
            1h %:
            {' '}
            {currency.percent_change_1h < 0 ? (
              <>
                <span style={{ color: 'red' }}>
                  {Math.abs(currency.percent_change_1h)}
                  %
                </span>
              </>
            ) : (
              <>
                <span style={{ color: 'green' }}>
                  {currency.percent_change_1h}
                  %
                </span>
              </>
            )}
          </p>
          <p className="change deets">
            24h %:
            {' '}
            {currency.percent_change_24h < 0 ? (
              <>
                <span style={{ color: 'red' }}>
                  {Math.abs(currency.percent_change_24h)}
                  %
                </span>
              </>
            ) : (
              <>
                <span style={{ color: 'green' }}>
                  {currency.percent_change_24h}
                  %
                </span>
              </>
            )}
          </p>
          <p className="change deets">
            7d %:
            {' '}
            {currency.percent_change_7d < 0 ? (
              <>
                <span style={{ color: 'red' }}>
                  {Math.abs(currency.percent_change_7d)}
                  %
                </span>
              </>
            ) : (
              <>
                <span style={{ color: 'green' }}>
                  {currency.percent_change_7d}
                  %
                </span>
              </>
            )}
          </p>
          <p className="price-btc deets">
            price:
            {' '}
            {Number(currency.price_btc).toFixed(2)}
          </p>
          <p className="price-usd deets">
            price: $
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