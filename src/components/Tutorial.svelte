<script>
	import { onMount, tick } from 'svelte';

	import marked from 'marked';
	import fm from 'front-matter';
	import typografix from '../utils/typografix';
	import readFile from '../utils/readFile';

	import { CodeSnippet, Info, Navigation, Summary, TOC } from './blocks';
	import { Arrow, Button } from './ui';

	export let src;

	let loaded = false;
	let data;
	let sections;
	let article;
	let index = -1;
	let scrollY;

	const intersectionObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				index = +entry.target.dataset.index;
			}
		});
	}, { rootMargin: `0px 0px -${window.innerHeight / 2}px 0px` });

	onMount(async () => {
		const text = await readFile(`${src}/index.md`);
		data = fm(text);
		sections = await Promise.all(data.attributes.sections.map(async (title, i) => {
			return {
				title,
				lines: (await readFile(`${src}/${i}.md`)).split('\n\n')
			};
		}));
		loaded = true;
		await tick();
		document.querySelectorAll('section').forEach(e => intersectionObserver.observe(e));
		balanceText();
	});

	$: {
		index = scrollY < window.innerHeight * 0.1 ? -1 : index;
	}
</script>

<svelte:head>
	<title>{data && data.attributes.title}</title>
</svelte:head>
<svelte:window bind:scrollY />
<main>
	{#if loaded}
		<h1>{data.attributes.title}</h1>
		{@html marked(typografix(data.body))}
		<TOC
			{sections}
			bind:index />
		<TOC
			{sections}
			hidden={scrollY < window.innerHeight}
			sticky bind:index />
		<article bind:this={article}>
			{#each sections as section, i}
				<section data-index={i}>
					{#each section.lines as line(line)}
						{#if line.startsWith('(i)')}
							<Info text={line} />
						{:else if line.startsWith('(S)')}
							<Summary text={line} />
						{:else if line.startsWith('~~~')}
							<CodeSnippet text={line} />
						{:else}
							{@html marked(typografix(line))}
						{/if}
					{/each}
				</section>
			{/each}
		</article>
	{/if}
</main>

<style lang='scss'>
	@import '../global.scss';

	main {
		width: 90%;
		max-width: 48rem;
		margin: 0 auto;
	}
</style>
