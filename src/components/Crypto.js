import { FaArrowCircleRight } from 'react-icons/fa';

const Crypto = ({ name, symbol, icon }) => (
    <>
       <div className='crypto-card'>
          <FaArrowCircleRight />
          <img src={icon} alt={name} />
          <span>{name}</span>
          <span>{symbol}</span>
       </div>
    </>
);

export default Crypto;