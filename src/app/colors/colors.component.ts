import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-colors',
  standalone: true,
  imports: [MatGridListModule, CommonModule, RouterOutlet],
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.css'
})
export class ColorsComponent {
  @Input() colorProfile:any;

  ngOnInit(){

  }
}
