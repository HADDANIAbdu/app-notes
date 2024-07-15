import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NotesListComponent } from '../notes-list/notes-list.component';
import { AddNoteComponent } from '../add-note/add-note.component';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from '../sign-up/sing-up.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls : ['./app.component.css'],
  imports: [HeaderComponent, NotesListComponent, AddNoteComponent, SignUpComponent, RouterModule],
})
export class AppComponent {}
