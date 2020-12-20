<script>
	import Prism from 'prismjs';
	import 'prism-svelte';
	import 'prismjs/plugins/line-numbers/prism-line-numbers.min';
	Prism.manual = true;

	export let inputs;

	$: content = snippet.replace(`{{ ${inputs[0].key.toUpperCase()} }}`, inputs[0].value);
</script>

<pre class='language-svelte line-number'>
	<code>
		{@html Prism.highlight(content, Prism.languages.svelte, 'svelte')}
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
