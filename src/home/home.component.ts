import { Component } from '@angular/core';
import { AddNoteComponent } from 'src/add-note/add-note.component';
import { NotesListComponent } from 'src/notes-list/notes-list.component';

@Component({
    selector: 'home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [AddNoteComponent, NotesListComponent],
})
export class HomeComponent {}