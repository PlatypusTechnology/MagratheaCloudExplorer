import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
	standalone: true,
})
export class AppComponent { }
