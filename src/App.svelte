<script>
	import Tutorial from './components/Tutorial.svelte';
	import CodeSnippet from './CodeSnippet.svelte';

	let value = 50;
</script>

<Tutorial src='posts/js-basics' />
	<!-- <input type='range' min={0} max={100} bind:value />
	<CodeSnippet inputs={[{ key: 'width', value: value }]} /> -->

<style lang='scss'>
	@import './global.scss';

	main {
		text-align: center;
		padding: 1em;
		width: 75%;
		margin: 0 auto;

		h1 {
			text-transform: uppercase;
			font-size: 4em;
			font-weight: 400;
		}

		h3 {
			font-size: 1.4rem;
			font-weight: 400;
			color: #c69;
		}

		img {
			margin: 0 auto;
		}

		.logo-large {
			display: inline-block;
			vertical-align: -1.5rem;
			width: 8rem;
		}

		.logo-small {
			display: none;
		}

		@include md {
			width: 100%;

			h3 {
				font-size: 1.2rem;
			}

			.logo-small {
				display: inline-block;
				vertical-align: middle;
				width: 3rem;
				padding: 0.2rem;
			}

			.logo-large {
				display: none;
			}
		}
	}
</style>
