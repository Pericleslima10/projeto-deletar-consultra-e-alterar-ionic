import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.page.html',
  styleUrls: ['./quem-somos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class QuemSomosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
