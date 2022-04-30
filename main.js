const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

const dragstart = event => {
    event.target.classList.add('hold')
    setTimeout(() => {
        event.target.classList.add('hide')
    })
}

const dragend = event => {
    event.target.className = 'item'
}

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

const dragenter = event => {
    event.target.classList.add('hovered')
}

const dragover = event => {
    event.preventDefault()
}

const dragleave = event => {
    event.target.classList.remove('hovered')
}

const dragdrop = event => {
    event.target.append(item)
}

placeholders.forEach(placeholder => {
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
})