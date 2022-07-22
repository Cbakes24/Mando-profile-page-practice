document.addEventListener('DOMContentLoaded', () => {
  const h1 = document.createElement('h1')
  h1.innerText = 'Mando'
  document.body.appendChild(h1)
  h1.id = 'mando'

  const uL = document.createElement('ul')


  const details = [
  "I'm a Mandolorian. ",
  "I am a bounty hunter",
  "My best friend is Grogu. Some call him Baby Yoda.",
  "I never ever take off my helmet. Except for that one time...",
  "This is the way."
  ]

  document.body.appendChild(uL)
  for (let i = 0; i < details.length; i++) {
    const li = document.createElement('li')
    li.innerText = details[i]
    uL.appendChild(li)
  }


})
