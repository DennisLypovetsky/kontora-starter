// Правит не работающую как надо формулу CSS height: 100vh
const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
document.getElementsByClassName('YOURCLASS')[0].style['min-height'] = height + 'px'
