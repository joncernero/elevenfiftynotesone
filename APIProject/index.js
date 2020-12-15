const baseURL = 'https://api.spacexdata.com/v4/launches/latest'

const section = document.querySelector('.spaceX')
const banner = document.querySelector('.banner')
const launchDate = document.createElement('p')

launchDate.className = 'launchDate'

fetch(baseURL)
  .then(res => res.json())
  .then(json => displaySpaceX(json))

function displaySpaceX(text) {
  console.log(text)
  banner.style.backgroundImage = `url('${text.links.flickr.original[0]}')`

  let heading = document.createElement('heading')

  heading.innerText = text.details
  launchDate.innerText = text.date_local

  section.appendChild(heading)
  banner.appendChild(launchDate)
}
