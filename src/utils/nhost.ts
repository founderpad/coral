import { createClient } from 'nhost-js-sdk';

const nhostClient = createClient({
	baseURL: 'https://backend-19728797.nhost.app'
});

const auth = nhostClient.auth;
const storage = nhostClient.storage;

export { auth, storage };
