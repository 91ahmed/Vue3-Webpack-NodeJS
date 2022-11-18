<template>
	<h1>Home Vue</h1>
</template>

<script>
	export default {
		name: 'Home',
		data: function(){
			return {
				title: 'Home',
			}
		},
        watch: {
            title: {
                immediate: true,
                handler() {
                    document.title = this.title;
                }
            }
        }
	}
</script>