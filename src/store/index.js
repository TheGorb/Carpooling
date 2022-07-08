// Utils
import {createStore} from 'easy-peasy';

// Models
import userStore from './userStore';

const store = createStore ({
    user: userStore,
})

export default store;