import fetch from '../utils/fetch';

export function serviceData() {
	return fetch({
		url: '/servicedata',
		method: 'get'
	})
}