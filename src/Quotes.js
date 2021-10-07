import React,{useEffect,useState} from 'react';
import './Quotes.css';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const API = "http://quotes.stormconsultancy.co.uk/popular.json";

const Quotes = () => {
    const [quote, setQuote] = useState('');
    
    useEffect(() => {
        console.log("effect")
        fetch(API)
          .then(response => response.json())
          .then(data => setQuote(data[Math.floor(Math.random() * 43)]));
      }, []);

    return(
        <div className="quotes">
            <div className="quote">
            <h3>{quote?.quote} <FormatQuoteIcon/></h3>
            <p>-{quote?.author}</p>
            </div>
        </div>
    )
}

export default Quotes;