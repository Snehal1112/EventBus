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
			subscription.apply(scope, args);
		}
	}
}
export default EventBus;
