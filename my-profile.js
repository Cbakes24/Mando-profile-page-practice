document.addEventListener('DOMContentLoaded', () => {
  const h1 = document.createElement('h1')
  h1.innerText = 'Mando'
  document.body.appendChild(h1)
  h1.id = 'mando'
  h1.setAttribute('class', 'name')



  const img = document.createElement('img')
  img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ea196117-0b64-49b7-b13f-79f43cf77e53/ddjidrq-967891d0-44fd-422e-a701-6218df1f0f37.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VhMTk2MTE3LTBiNjQtNDliNy1iMTNmLTc5ZjQzY2Y3N2U1M1wvZGRqaWRycS05Njc4OTFkMC00NGZkLTQyMmUtYTcwMS02MjE4ZGYxZjBmMzcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VxikeAkuVdPHKKxH5CNZwr6oG_HVtyGF3XCvi-dXeuE"
  document.body.appendChild(img)

  const uL = document.createElement('ul')
  uL.setAttribute('class', 'my-details')




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
    li.setAttribute('class', 'detail')
    li.innerText = details[i]
    uL.appendChild(li)
  }



  const div = document.createElement('div')

  const time = () => {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    div.innerHTML = hours + ":" + minutes + ":" + seconds;
  };
  setInterval(time, 1000);

  div.innerText = time
  document.body.appendChild(div)

})
