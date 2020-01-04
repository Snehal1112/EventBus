export default class base {
	constructor(a) {
		this.a = a;
	}
	getConsole() {
		console.log(this.a);
		console.log('base class');
	}
}
