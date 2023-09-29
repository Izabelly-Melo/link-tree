function toggleMode () {
    const html = document.documentElement

    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/itadori.png')
        img.setAttribute('alt', 'itadori')
    } else {
        img.setAttribute('src', './assets/sukuna.png')
        img.setAttribute('alt', 'sukuna')
    }

}