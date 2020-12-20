<script>
	import marked from 'marked';
	import typografix from '../../utils/typografix';

	export let text;

	$: content = marked(typografix(text.slice(3).trim().replace(/\n/g, '\n\n')));
</script>

<div class='info'>
	{@html content}
</div>

<style lang='scss'>
	.info {
		background: rgba(250, 250, 210, 0.5);
		position: relative;
		margin: 1rem 0;
		padding: 0.25rem 1rem;
		border-left: 5px solid goldenrod;
		border-radius: 0 0.25rem 0.25rem 0;
	}
</style>
