import fetch from '../utils/fetch';

export function login(username, password)  {
	const data={
		username, password
	}
	return fetch({
		url: '/login/login',
		method: 'post',
		data
	})
}