<script>
	import Prism from 'prismjs';
	import 'prismjs/components/prism-json';
	import 'prism-svelte';
	Prism.manual = true;

	export let code;
	export let language
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
