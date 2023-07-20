import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})


export class BodyComponent {
  noteTitle: string = '';
  noteContent: string = '';
  notes: { title: string, content: string, isEditing: boolean }[] = [];

  addNote() {
    if (!this.noteTitle || !this.noteContent) {
      alert('Please fill in both the title and content fields before adding the note.');
      return;
    }

    const newNote = { title: this.noteTitle, content: this.noteContent, isEditing: false };
    this.notes.push(newNote);

    this.noteTitle = '';
    this.noteContent = '';
  }

  startEditing(note: { title: string, content: string, isEditing: boolean }) {
    note.isEditing = !note.isEditing;
  }

  deleteNote(note: { title: string, content: string, isEditing: boolean }) {
    const index = this.notes.indexOf(note);
    this.notes.splice(index, 1);
  }
}
