import USERS from './data';

export function fetchData() {
    return Promise.resolve(USERS);
}