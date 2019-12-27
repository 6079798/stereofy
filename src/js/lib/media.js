document.addEventListener("click", ({ target }) => {
  const player = target.closest("[data-play]")
  if (player) {
    document.querySelectorAll(".is-playing").forEach(el => {
      if (el !== player) {
        el.classList.remove("is-playing")
        const audio = el.querySelector("audio")
        if (audio) audio.pause()
      }
    })
    const audioElement = player.querySelector("audio")
    if (audioElement) {
      if (audioElement.paused) {
        audioElement
          .play()
          .then(() => player.classList.add("is-playing"))
          .catch(err => console.log(err.message))
      } else {
        audioElement.pause()
        player.classList.remove("is-playing")
      }
    }
  }
})
