<template>
	<h1>{{ title }}</h1>
	<form action="" method="POST">
		<input type="text" placeholder="username"/>
		<input type="text" placeholder="********"/>
		<button type="submit">Login</button>
	</form>
</template>

<script>
	export default {
		name: 'LoginComponent',
		data: function(){
			return {
				title: 'Login',
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