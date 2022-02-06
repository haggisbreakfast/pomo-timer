new Vue({
	el: '#app', 
	data: {
		remainingTime: 60 * 25,
		timer: null,
		name: 'homo pomo'
	}, 
	methods: {
		handleStart: function() {
			this.timer = setInterval(() => this.decreaseTimer(), 1000)
		},
		decreaseTimer: function() {
			if (this.remainingTime >= 1) {
				this.remainingTime --;
			} else {
				this.remainingTime = 0;
				this.handlePause();
				alert("yas time's up go off kween werk")
			}
		},
		handlePause: function() {
			clearInterval(this.timer);
			this.timer = null;
		},
		handleReset: function(){
			this.remainingTime = 60 * 25;
			clearInterval(this.timer);
			this.timer = null;

		}
	}, 
	computed: {
		minutes: function() {
			const minutes = Math.floor(remainingTime / 60);
			if (minutes > 10) {
				return minutes;
			}  else {
				return `0${minutes}`;
			}
		}, 
		seconds: function() {
			const seconds = this.remainingTime - (minutes * 60);
			if (seconds < 10) {
				return `0${seconds}`;
			} else {
				return seconds;
			}
		
		}
	}
});