export default class AccessToken {
	constructor() {
		this.token = null;
	}

	setToken(token) {
		this.token = token;
	}

	getToken() {
		return this.token;
	}
}
