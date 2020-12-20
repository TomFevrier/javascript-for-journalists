<script>
	import { onMount } from 'svelte';

	import marked from 'marked';
	import fm from 'front-matter';
	// import frontmatter from '@github-docs/frontmatter';
	import typografix from '../utils/typografix';
	import readFile from '../utils/readFile';

	import { CodeSnippet, Info, Summary, TOC } from './blocks';

	export let src;

	let loaded = false;
	let data;
	let sections;
	let index = -1;
	onMount(async () => {
		const text = await readFile(`${src}.md`);
		data = fm(text);
		sections = await Promise.all(data.attributes.sections.map(async (title, i) => {
			return {
				title,
				lines: (await readFile(`${src}-${i}.md`)).split('\n\n')
			};
		}));
		loaded = true;
	});

	$: console.log(sections && sections[index]);
</script>

<main>
	{#if loaded}
		<h1>{data.attributes.title}</h1>
		<TOC {sections} bind:index />
		{@html marked(typografix(data.body))}
		{#if index < 0}
			<button on:click={() => index++}>
				Commencer
			</button>
		{:else}
			{#each sections[index].lines as line(line)}
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
			{#if index > 0}
				<button on:click={() => index--}>
					Retour au chapitre précédent : {sections[index - 1].title}
				</button>
			{/if}
			{#if index < sections.length - 1}
				<button on:click={() => index++}>
					Passer au prochain chapitre : {sections[index + 1].title}
				</button>
			{/if}
		{/if}
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
