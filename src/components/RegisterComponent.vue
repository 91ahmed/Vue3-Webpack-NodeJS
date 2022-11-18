<template>
	<h1>{{ title }}</h1>
	<form action="" method="POST">
		<input type="text" placeholder="username"/>
		<input type="email" placeholder="email"/>
		<input type="text" placeholder="password"/>
		<button type="submit">Register</button>
	</form>
</template>

<script>
	export default {
		name: 'RegisterComponent',
		data: function(){
			return {
				title: 'Register',
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