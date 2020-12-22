<script>
	import { Arrow, Button } from '../ui';
	import { scrollTo } from '../../utils/scroll';

	export let sections;
	export let index;

	const prev = () => {
		index--;
		scrollTo('h2');
	}

	const next = () => {
		index++;
		scrollTo('h2');
	}
</script>

<div class='navigation'>
	{#if index > 0}
		<Button on:click={prev}>
			<Arrow direction='left' />
			{sections[index - 1].title}
		</Button>
	{/if}
	{#if index < sections.length - 1}
		<Button on:click={next}>
			{index < 0 ? 'Commencer' : sections[index + 1].title}
			<Arrow />
		</Button>
	{/if}
</div>

<style>
	.navigation {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: 2rem;
	}
</style>
