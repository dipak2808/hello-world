setImmediate(() => {
	console.log('setImmediate');
});

setTimeout(() => {
	console.log('setTimeout');
}, 0);


(async () => {
	console.log('async');
})();


(() => {
	console.log('sync');
})();

process.nextTick(() => {
	console.log('proces.nextTick');
});
console.log('log');