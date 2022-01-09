import { NhostClient } from '@nhost/nhost-js';

const nhost = new NhostClient({
	backendUrl: process.env.NEXT_PUBLIC_BACKEND
});

const auth = nhost.auth;
const storage = nhost.storage;
const functions = nhost.functions;

export { nhost, auth, storage, functions };
