const BASE_URL = 'https://api.coinstats.app/public/v1/coins';
const FETCH_COINS = 'FETCH_COINS';
const initialState = [];

const CryptoReducer = (state = initialState, action) => ({
   switch (action.type) {
    case FETCH_COINS:
        return action.payload;
        default:
            return state;
   }
});

export default CryptoReducer;