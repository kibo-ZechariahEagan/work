const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
},{
    title: 'Habits',
    body: 'Exercise eat better'
},{
    title: 'Office',
    body: 'Get new seat'
}]

const filters = {
    searchText: ''
}

const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function(note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e){
    e.target.textContent = 'We clicked it'
})

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#name-form').addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
    e.target.elements.firstName.value = ''
})