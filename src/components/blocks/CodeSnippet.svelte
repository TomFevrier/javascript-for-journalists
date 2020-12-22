<script>
	import Prism from 'prismjs';
	import 'prismjs/components/prism-json';
	import 'prism-svelte';
	Prism.manual = true;

	export let text;

	$: language = text.split('\n')[0].replace(/~~~/, '') || 'js';

	$: code = text.split('\n').slice(1, -1).join('\n')
		.replace(/\n\.\.\.\n/g, '\n\n')
		.trim();
</script>

<pre class='language-svelte line-number'>
	<code>
		{#if language === 'txt'}
			{code}
		{:else}
			{@html Prism.highlight(code, Prism.languages[language], language)}
		{/if}
	</code>
</pre>

<style lang='scss'>
	pre {
		font-size: 0.9rem;

		&::selection {
			background: white !important;
		}

		&::-moz-selection {
			background: white !important;
		}
	}
</style>
