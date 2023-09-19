function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag video
  const avatar = document.querySelector("#profile video")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    avatar.setAttribute("src", "./assets/avatar-light.mp4")
  } else {
    // set tiver sem light mode, manter a imagem normal
    avatar.setAttribute("src", "./assets/avatar.mp4")
  }
}
