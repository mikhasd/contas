import './backend'
import App from './App.svelte';
import './components'

const app = new App({
	target: document.body
});

async function installServiceWorker() {
	if (!window.location.host.includes('localhost')) {
		try {
			await navigator.serviceWorker.register('./service-worker.js', { scope: './' })
			console.info('Worker registered')
		} catch (err) {
			console.info('Error while registering worker', err)
		}
	}
}

window.addEventListener('load', installServiceWorker)

export default app;