<script>
	import marked from 'marked';
	import typografix from '../../utils/typografix';

	export let sections;
	export let index;
</script>

<div class='toc'>
	<ul>
		{#each sections as section, i}
			<li class:selected={index === i} on:click={() => index = i}>
				{section.title}
			</li>
		{/each}
	</ul>
</div>

<style lang='scss'>
	.toc {
		background: #66339940;
		position: relative;
		margin: 1rem 0;
		padding: 0.25rem 1rem;
		border-left: 0.5rem solid rebeccapurple;
		border-radius: 0 0.25rem 0.25rem 0;
		width: 36rem;
		max-width: 90%;

		ul {
			margin: 0;
			padding: 0;
			list-style-type: none;
			font-family: 'Assistant', sans-serif;

			li {
				cursor: pointer;
				margin: 0.5rem;

				&::before {
					content: '#';
					font-weight: bold;
					margin-right: 0.5rem;
					color: rebeccapurple;
				}

				&.selected {
					color: rebeccapurple;
				}
			}
		}
	}
</style>
