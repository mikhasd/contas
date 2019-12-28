import App from './App.svelte';

const app = new App({
	target: document.body
});

window.addEventListener('load', async ev => {
	try {
		await navigator.serviceWorker.register('./service-worker.js', { scope: './' })
		console.info('Worker registered')
	} catch (err){
		console.info('Error while registering worker', err)
	}
})

export default app;