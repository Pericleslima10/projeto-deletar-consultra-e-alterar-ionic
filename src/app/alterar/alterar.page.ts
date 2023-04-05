import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Veiculo } from '../models/Veiculo';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.page.html',
  styleUrls: ['./alterar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlterarPage implements OnInit {

  id: string = '';
  placa: string = '';
  modelo: string = '';
  ano: string = '';
  marca: string = '';

  veiculo: Veiculo = new Veiculo;


  constructor(private storage: Storage,
    private actr: ActivatedRoute,
    private nav: NavController,


  ) {
    this.storage.create();

  }

  ionViewDidEnter() {
    this.actr.queryParams.subscribe(params => {
      this.storage.get(params['id']).then((value) => {

        this.id = value.id;
        this.placa = value.placa;
        this.modelo = value.modelo;
        this.ano = value.ano;
        this.marca = value.marca;
      });
    });
  }

  async alterar() {
    this.veiculo.id = this.id;
    this.veiculo.placa = this.placa;
    this.veiculo.modelo = this.modelo;
    this.veiculo.ano = this.ano;
    this.veiculo.marca = this.marca;

    this.storage.set(this.veiculo.id, this.veiculo);
    alert('Dados alterados')
    this.nav.navigateBack('/consultar');

  }



  ngOnInit() {
  }

}
