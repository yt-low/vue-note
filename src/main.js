// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.filter('formatTimeStamp', function(timestamp) {
	return new Date(timestamp).toUTCString();
});

Vue.filter('formatTitle', function(body) {
	var maxLength = 20;
	if (body.length > maxLength) {
		return body.substring(0, maxLength - 3) + '...';
	} else if (body.length == 0) {
		return 'New note';
	} else {
		return body;
	}
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
