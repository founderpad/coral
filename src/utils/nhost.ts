import { NhostClient } from '@nhost/nhost-js';

const nhostClient = new NhostClient({
	backendUrl: process.env.NEXT_PUBLIC_BACKEND
});

const auth = nhostClient.auth;
const storage = nhostClient.storage;
const functions = nhostClient.functions;

export { nhostClient, auth, storage, functions };
