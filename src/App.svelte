<script>
	import Router from 'svelte-spa-router';
	import Rekam from './Pages/Rekam.svelte';
	import Kelola from './Pages/Kelola.svelte';
	import Statistik from './Pages/Statistik.svelte';
	import MainInfo from './components/MainInfo.svelte';
	import Nav from './components/Nav.svelte';

</script>

<main id="layout">
	<MainInfo/>
	<Nav/>
	<Router routes={{
		'/': Rekam,
		'/kelola': Kelola,
		'/statistik': Statistik
	}}/>
</main>


<style lang="scss" global>
	@import "../styles/global.scss";

	#layout {
		width: 41.1rem;
		min-height: 100vh;
		background-color: $fade;
		margin: 0 auto;
		position: relative;
		user-select: none;

	}

	@media screen and (min-width: 768px) {
		#layout {
			width: 100%;
			background-color: $green-dark;
			display: grid;
			grid-template-columns: 6rem calc(100% - 6rem);
			margin: 0;
			height: 100%;
		}
	}

	@media screen and (min-width: 1024px) {
		#layout {
			grid-template-columns: 7rem calc(100% - 7rem);
		}
	}

</style>
