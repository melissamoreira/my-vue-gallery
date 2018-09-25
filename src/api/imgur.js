import qs from 'qs';
import keys from '../../keys';

const CLIENT_ID = keys.imgurAPI;
const ROOT_URL = 'https://api.imgur.com';

export default {
    login: () => {

        const queryString = {
            client_id: CLIENT_ID,
            response_type: 'token'
        };

        window.location = `${ROUTE_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
    }
};

/* 
 API URL: 
 https://api.imgur.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=token&state=APPLICATION_STATE 
*/