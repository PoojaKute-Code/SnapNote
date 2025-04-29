let notes = JSON.parse(localStorage.getItem('notes')) || [];

function saveNotes() {
  localStorage.setItem('notes', JSON.stringify(notes));
}

function renderNotes() {
  const notesContainer = document.getElementById('notes');
  notesContainer.innerHTML = '';

  notes.forEach((note, index) => {
    const noteElement = document.createElement('div');
    noteElement.className = 'note';

    noteElement.innerHTML = `
      <button class="delete-btn" onclick="deleteNote(${index})">×</button>
      <h3>${note.title}</h3>
      <p>${note.text}</p>
    `;

    notesContainer.appendChild(noteElement);
  });
}

function addNote() {
  const title = document.getElementById('note-title').value.trim();
  const text = document.getElementById('note-text').value.trim();

  if (title && text) {
    notes.push({ title, text });
    saveNotes();
    renderNotes();
    
    document.getElementById('note-title').value = '';
    document.getElementById('note-text').value = '';
  } else {
    alert('Please fill in both fields!');
  }
}

function deleteNote(index) {
  notes.splice(index, 1);
  saveNotes();
  renderNotes();
}

// Render notes when page loads
renderNotes();
