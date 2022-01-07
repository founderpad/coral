// import { createClient } from 'nhost-js-sdk';

// const nhostClient = createClient({
// 	baseURL: process.env.NEXT_PUBLIC_BACKEND
// });

// const auth = nhostClient.auth;
// const storage = nhostClient.storage;

// export { auth, storage };

import { NhostClient } from '@nhost/nhost-js';

const nhostClient = new NhostClient({
	backendUrl: process.env.NEXT_PUBLIC_BACKEND
});

const auth = nhostClient.auth;

export { nhostClient, auth };
