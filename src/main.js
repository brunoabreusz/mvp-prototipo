import './style.css'

document.querySelector('#year').textContent = new Date().getFullYear()

const menuButton = document.querySelector('.menu-button')
const nav = document.querySelector('.nav')
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true'
  menuButton.setAttribute('aria-expanded', String(!open))
  nav.classList.toggle('is-open', !open)
})

document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false')
  nav.classList.remove('is-open')
}))

const animated = document.querySelectorAll('section, .leaders article')
animated.forEach((element) => element.classList.add('reveal'))

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.12 })

animated.forEach((element) => observer.observe(element))

const motionStyle = document.createElement('style')
motionStyle.textContent = `
  .hero > div:first-child > * { animation: heroIn .75s both; }
  .hero > div:first-child > :nth-child(2) { animation-delay: .12s; }
  .hero > div:first-child > :nth-child(3) { animation-delay: .24s; }
  .hero > div:first-child > :nth-child(4) { animation-delay: .36s; }
  .result-card { animation: cardIn .9s .15s both, cardFloat 4s 1.2s ease-in-out infinite; transition: transform .2s ease; }
  .result-card::after { animation-duration: 4s; }
  .stats b { animation: statPulse 2s ease-in-out infinite; }
  .stats b:nth-child(2) { animation-delay: .25s; }.stats b:nth-child(3) { animation-delay: .5s; }
  @keyframes heroIn { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:none; } }
  @keyframes cardIn { from { opacity:0; transform:translateX(55px) rotate(3deg); } to { opacity:1; transform:none; } }
  @keyframes cardFloat { 50% { transform:translateY(-11px) rotate(-.5deg); } }
  @keyframes statPulse { 50% { color:#d9ff39; transform:translateY(-5px); } }
  @media (prefers-reduced-motion: reduce) { .hero > div:first-child > *, .result-card, .result-card::after, .stats b { animation:none !important; } }
`
document.head.append(motionStyle)

const resultCard = document.querySelector('.result-card')
resultCard?.addEventListener('pointermove', (event) => {
  const bounds = resultCard.getBoundingClientRect()
  const x = (event.clientX - bounds.left) / bounds.width - .5
  const y = (event.clientY - bounds.top) / bounds.height - .5
  resultCard.style.transform = `perspective(700px) rotateY(${x * 5}deg) rotateX(${y * -5}deg)`
})
resultCard?.addEventListener('pointerleave', () => { resultCard.style.transform = '' })
