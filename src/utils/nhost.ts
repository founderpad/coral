import { createClient } from 'nhost-js-sdk';

const nhostClient = createClient({
	baseURL: process.env.NEXT_PUBLIC_NEXT_BACKEND
});

const auth = nhostClient.auth;
const storage = nhostClient.storage;

export { auth, storage };
