import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import { General } from '../assets/colors.data';
import { Primary } from '../assets/colors.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatGridListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mockup-App';
  general:any;
  primary:any;

  ngOnInit(){
    this.general = General;
    this.primary = Primary;
  }
}
