import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Veiculo } from '../models/Veiculo';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CadastrarPage implements OnInit {


  id: string='';
  placa: string = "";
  modelo: string = "";
  ano: string = "";
  marca: string = "";
  veiculo: Veiculo = new Veiculo;/////////////


  constructor(private storage: Storage) {

    this.storage.create();


  }
////// ---------- > possible
  i: number=0;

  async cadastrar() {
    this.id = String(this.i+=this.i)+this.placa;
    this.veiculo.id = this.id;
    this.veiculo.placa = this.placa;
    this.veiculo.modelo = this.modelo;
    this.veiculo.ano = this.ano;
    this.veiculo.marca = this.marca;


    this.storage.set(this.veiculo.placa, this.veiculo);

this.limpar();

    alert("Dado Cadastrado!!!")

  }
  async limpar() {
    this.placa = '';
    this.modelo = '';
    this.ano = '';
    this.marca = '';



  }


  ngOnInit() {
  }

}
