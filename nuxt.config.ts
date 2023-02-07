// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	runtimeConfig: {
		public: {
			nasaApiKey: process.env.NUXT_NASA_API_KEY,
		}
	  }
})
