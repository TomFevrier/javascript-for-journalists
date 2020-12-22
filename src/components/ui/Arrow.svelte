<script>
	export let direction = 'right';
</script>

<span class='arrow {direction}'>
	➜
</span>

<style lang='scss'>
	.arrow {
		display: inline-block;

		&.right {
			margin-left: 0.5rem;
		}

		&.left {
			margin-right: 0.5rem;
			transform: scaleX(-1);
		}
	}
</style>
