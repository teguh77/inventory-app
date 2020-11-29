<script>
	import ViewGridPlus from 'svelte-material-icons/ViewGridPlus.svelte'
	import Finance from 'svelte-material-icons/Finance.svelte';
	import Cart from 'svelte-material-icons/Cart.svelte'
	import {location} from 'svelte-spa-router';
</script>




<nav>
	<ul class="nav-wrapper">
		<li class:active={$location === '/'}>
			<a href="/#/">
				<i ><Cart size={"2.5rem"}/></i>
			</a>
		</li>
		<li class:active={$location === '/kelola'}>
			<a href="/#/kelola">
				<i><ViewGridPlus size={"2.5rem"}/></i>
			</a>
		</li>
		<li class:active={$location === '/statistik'}>
			<a href="/#/statistik">
				<i><Finance size={"2.5rem"}/></i>
			</a>
		</li>
	</ul>
</nav>


<style lang="scss">
	@import "../styles/theme.scss";

	nav {
		position: fixed;
		bottom: 0;
		width: 41.1rem;
		padding: 1.5rem 3rem ;
		background-color: $green-dark;
		border-radius: 25px 25px 0 0;
		z-index: 100;

		.nav-wrapper {
			display: flex;
			justify-content: space-around;
			align-items: center;

			li {

				&.active {
					margin-top: -5rem;

					a {

						i {
							padding: 1.5rem;
							display: flex;
							justify-content: center;
							align-items: center;
							background-color: white;
							border-radius: 15px;
							color: $green;
							box-shadow: 0 -5px 5px -5px #777;
						}
					}
				}

					a {

						i {
							color: $fade;

						}

				}
			}
		}
	}

	@media screen and(min-width: 768px) {
		nav {
			position: static;
			width: 6rem;
			border-radius: 0px;
			height: 100%;
			display: flex;
			justify-content: center;

			.nav-wrapper {
				position: fixed;
				flex-direction: column;
				margin-top: 20rem;


				li {
				margin: 2rem 0;

				&.active {
					margin: 2rem -5rem 2rem 0;
					box-shadow: unset;
					box-shadow: 5px 0 5px -5px #777;
					clip-path: inset(0px -15px -10px 0px round 15px);
					border-radius: 15px;

				}
			}
			}
		}
	}

	@media screen and(min-width: 1024px) {
		nav {
			width: 7rem;

			.nav-wrapper {
				margin-top: 20rem;
			}
		}
	}
</style>