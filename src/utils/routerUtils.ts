import Router from 'next/router';

export type TParam = {
	[key: number]: string | string[] | boolean;
};

/**
 * Toggle whether to do a router push or replace
 * @param pathname
 * @param query
 * @param replace
 * @param shallow
 */
const navigateTo = (
	pathname?: string,
	query?: any,
	replace = false,
	shallow = true
) => {
	Router[replace ? 'replace' : 'push'](
		{
			pathname,
			query: { ...Router.query, ...query }
		},
		undefined,
		{
			shallow
		}
	);
};

const deleteParams = <T extends TParam>(
	values: T | (keyof T)[],
	navigate = true
) => {
	const keys = Array.isArray(values) ? values : Object.keys(values);

	for (const key of keys) {
		const stringKey = String(key); // We need to do this as a key could be a boolean (checkbox)
		if (stringKey in Router.query) {
			delete Router.query[stringKey];
		}
	}

	if (navigate) {
		navigateTo();
	}
};

const buildParams = <T extends TParam>(values: T) => {
	const queryParams: TParam = Object.entries(values).reduce(
		(params, [key, value]) => {
			if (value) {
				return { ...params, [key]: value };
			}
			return params;
		},
		{}
	);

	navigateTo(undefined, queryParams);
};

export { navigateTo, deleteParams, buildParams };
