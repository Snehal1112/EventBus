class EventBus {
	static handlers = {};
	static on(eventName, handler, scope) {
		if (!EventBus.handlers[eventName]) {
			EventBus.handlers[eventName] = [];
		}

		EventBus.handlers[eventName].push({
			subscription: handler,
			scope
		});
	}

	static fireEvent(eventName, ...args) {
		if (!EventBus.handlers[eventName]) {
			console.warn('Event is not registed.');
			return;
		}
		const handlers = EventBus.handlers[eventName];
		for (let { subscription, scope } of handlers) {
			scope = scope !== undefined ? scope : this;
			subscription = subscription.bind(scope, args);
			subscription();
		}
	}
}

class sub1 {
	handlers = {};

	constructor(eventBus) {
		eventBus.on(
			'add',
			function([ a, b ]) {
				console.log(this);
				console.log('args:-', a, b);
				console.log(this.handlers);
			},
			this
		);
	}
}

const sub = new sub1(EventBus);
sub.handlers = { name: 'sub1' };

class Sub2 {
	handlers = {};
	constructor(eventBus) {
		eventBus.on(
			'add',
			function([ a, b ]) {
				console.log(this);
				console.log('args:-', a, b);
				console.log(this.handlers);
			},
			this
		);
	}
}

const sub2 = new Sub2(EventBus);
sub2.handlers = { name: 'sub2' };

EventBus.fireEvent('add', 'a', 'b');
