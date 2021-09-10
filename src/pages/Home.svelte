<script>
	import { onMount } from 'svelte';

	import slugify from 'slugify';

	import typografix from '../utils/typografix';

	import tutorials from './tutorials';

	onMount(() => balanceText());
</script>

<svelte:head>
	<title>JavaScript pour les journalistes</title>
</svelte:head>
<main>
	<h1 class='balance-text'>
		JavaScript pour les journalistes
	</h1>
	<ul>
		{#each tutorials as tutorial}
			<li>
				<div class='item'>
					<img src='img/{tutorial.image}' />
					<div class='wrapper'>
						<a href={slugify(tutorial.title, { lower: true, strict: true })} target='_self'>
							<h2 class='balance-text'>{@html typografix(tutorial.title)}</h2>
						</a>
						<p>{@html typografix(tutorial.description)}</p>
					</div>
				</div>
				<hr />
			</li>
		{/each}
	</ul>
</main>

<style lang='scss'>
	@import '../global.scss';

	main {
		width: 90%;
		max-width: 48rem;
		margin: 0 auto;
		padding-bottom: 10rem;

		h1 {
			margin-bottom: 4rem;
		}

		ul {
			margin: 0;
			padding: 0;
			list-style-type: none;

			li {

				a {
					color: #333;
					text-decoration: none;
				}

				.item {
					display: flex;

					img {
						width: 33.33%;
						margin-right: 1rem;
						border-radius: 0.25rem;
					}

					.wrapper {
						h2 {
							margin: 0.5rem auto 1rem;
						}

						p {
							margin: 0;
						}
					}
				}

				&:nth-child(2n) {
					.item {
						flex-direction: row-reverse;
						text-align: right;

						img {
							margin-right: 0;
							margin-left: 1rem;
						}
					}
				}

				@include lg {
					.item {
						flex-direction: column !important;
						text-align: left !important;

						h2 {
							margin-top: 1rem !important;
						}

						img {
							width: 100% !important;
							margin: 0 !important;
						}
					}
				}
			}
		}
	}
</style>
