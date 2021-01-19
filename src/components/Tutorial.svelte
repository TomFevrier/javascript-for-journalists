<script>
	import { onMount, tick } from 'svelte';

	import marked from 'marked';
	import fm from 'front-matter';
	import typografix from '../utils/typografix';
	import readFile from '../utils/readFile';

	import { CodeSnippet, Info, InteractiveSnippet, Navigation, Summary, TOC } from './blocks';
	import { Arrow, Button } from './ui';

	export let src;

	let loaded = false;
	let data;
	let sections;
	let index = -1;
	let scrollY;

	console.log(
		"%cBravo, tu as trouvé la console !",
		"font-weight: bold; color: rebeccapurple; background: #66339940;",
		"\nMais un grand pouvoir implique de grandes responsabilités..."
	);

	const intersectionObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				index = +entry.target.dataset.index;
			}
		});
	}, { rootMargin: `0px 0px -${window.innerHeight / 2}px 0px` });

	onMount(async () => {
		// console.log(src)
		const text = await readFile(`${src}/index.tuto`);
		// console.log(text)
		data = fm(text);
		// console.log(data)
		sections = await Promise.all(data.attributes.sections.map(async (title, i) => {
			return {
				title,
				lines: (await readFile(`${src}/${i}.tuto`)).split('\n\n')
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
	<title>{data ? data.attributes.title : 'Tutoriel'}</title>
</svelte:head>
<svelte:window bind:scrollY />
<main>
	{#if loaded}
		<h1 class='balance-text'>{data.attributes.title}</h1>
		{@html marked(typografix(data.body))}
		<TOC
			{sections}
			bind:index />
		<TOC
			{sections}
			hidden={scrollY < window.innerHeight}
			sticky bind:index />
		<article>
			{#each sections as section, i}
				<section data-index={i}>
					{#each section.lines as line(line)}
						{#if line.startsWith('(i)')}
							<Info text={line} />
						{:else if line.startsWith('(S)')}
							<Summary text={line} />
						{:else if line.startsWith('~~~')}
							<CodeSnippet
								language={line.split('\n')[0].replace(/~~~/, '') || 'js'}
								code={line.split('\n').slice(1, -1).join('\n')
									.replace(/\n\.\.\.\n/g, '\n\n')
									.trim()} />
						{:else if line.startsWith('[[')}
							<InteractiveSnippet {line} />
						{:else if line.startsWith('!')}
							<!-- Raw HTML -->
							{@html line.slice(1).trim()}
						{:else}
							<!-- Regular MarkDown -->
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
		padding-bottom: 10rem;
	}
</style>
