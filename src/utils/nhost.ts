import { NhostClient } from '@nhost/nhost-js';
const nhost = new NhostClient({
	backendUrl: 'http://localhost:1337'
});

const auth = nhost.auth;
const storage = nhost.storage;
const functions = nhost.functions;

export { nhost, auth, storage, functions };
