const popup = document.getElementById('popup')
const btnSubmit = document.getElementById('mapLocation')
const btnClose = document.getElementById('btnClose')

btnSubmit.addEventListener('mouseover',()=>{
    popup.style.visibility = 'visible'
    popup.style.left = '50%'
    popup.style.transform = 'translate(-50%,-50%) scale(1)'

})

btnClose.addEventListener('click', ()=>{
    // popup.style.lef = '50%'
    popup.style.transform = 'translate(-50%,-50%) scale(0.1)'
    popup.style.visibility = 'hidden'
})
