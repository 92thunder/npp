const SKIP_DURATION_SEC = 10
const CHANGE_VOLUME_RATE = 0.1

// audio要素が読み込まれるまで遅延
window.setTimeout(() => {
	const audioElement = document.querySelector('audio')
	window.addEventListener('keydown', (event) => {
		if (event.key === 'ArrowRight') {
			audioElement.currentTime += SKIP_DURATION_SEC
		}
		if (event.key === 'ArrowLeft') {
			audioElement.currentTime -= SKIP_DURATION_SEC
		}
		if (event.key === 'ArrowUp') {
			audioElement.volume += CHANGE_VOLUME_RATE
			event.preventDefault()
		}
		if (event.key === 'ArrowDown') {
			audioElement.volume -= CHANGE_VOLUME_RATE
			event.preventDefault()
		}
		if (event.key === ' ') {
			if (audioElement.paused) {
				audioElement.play()
			} else {
				audioElement.pause()
			}
		}
	})
}, 500)
