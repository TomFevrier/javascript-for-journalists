<script>
	import { fade } from 'svelte/transition';

	import marked from 'marked';
	import typografix from '../../utils/typografix';
	import { scrollTo } from '../../utils/scroll';

	export let sections;
	export let index;
	export let hidden = false;
	export let sticky = false;

	const handleClick = (i) => {
		index = i;
		scrollTo(document.querySelectorAll('section')[i], { offset: 16 })
	}
</script>

<div class='toc' class:hidden class:sticky>
	<ul>
		{#each sections as section, i}
			<li
				class='balance-text'
				class:selected={index === i}
				on:click={() => handleClick(i)}
			>
				{section.title}
			</li>
		{/each}
	</ul>
</div>

<style lang='scss'>
	@import '../../global.scss';

	.toc {
		background: $semi-opaque;
		position: relative;
		margin: 1rem 0;
		padding: 0.25rem 1rem;
		border-left: 0.5rem solid $main;
		border-radius: 0 0.25rem 0.25rem 0;
		width: 36rem;
		max-width: 90%;
		transition: all 0.3s ease-out;

		ul {
			margin: 0;
			padding: 0;
			list-style-type: none;
			font-family: 'Assistant', sans-serif;

			li {
				display: table;
				cursor: pointer;
				margin: 0.5rem;
				padding-left: 1rem;
				transition: all 0.3s ease-out;
				position: relative;

				&::before {
					content: '#';
					top: 0;
					left: 0;
					position: absolute;
					font-weight: bold;
					color: $main;
				}

				&.selected {
					color: $main;
					font-size: 1.3rem;
				}
			}
		}

		&.sticky {
			position: fixed;
			left: 0;
			top: 0;
			z-index: 42;
			display: table;
			background: none;
			margin: 0;
			width: 20rem;

			@include xl {
				display: none;
			}
		}

		&.hidden {
			opacity: 0;
			pointer-events: none;
		}
	}
</style>
