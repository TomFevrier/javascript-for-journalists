<script>
	import Prism from 'prismjs';
	import 'prism-svelte';
	Prism.manual = true;

	export let text;
	export let language = 'js';

	$: console.log(text)

	$: code = text.match(/~~~[^~]+~~~/)[0]
		.replace(/~/g, '')
		.replace(/\n\.\.\.\n/g, '\n\n')
		.trim();
</script>

<pre class='language-svelte line-number'>
	<code>
		{@html Prism.highlight(code, Prism.languages[language], language)}
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
