import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Veiculo } from '../models/Veiculo';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.page.html',
  styleUrls: ['./consultar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class ConsultarPage implements OnInit {

  constructor(private storage: Storage, private nav: NavController) {
    this.storage.create();
  }

  public getAll() {
    const lista: any[] = [];
    this.storage.forEach((value, key, index) => {
      lista.push(value);
    });
    return lista;
  }

  async buscarVeiculo() {
    this.listaVeiculo = this.getAll();
  }

  ionViewDidEnter() {
    this.buscarVeiculo();


  }



  listaVeiculo: Veiculo[] = [];


  veiculo: Veiculo = new Veiculo

  async alterar(id: string) {
    const idVei = {id};
    this.nav.navigateForward('/alterar',{queryParams: idVei})
    alert("alterando");
  }
  async deletar(id: string, placa: string) {
    this.storage.remove(id);
    const idDel = document.querySelector('#placa'+placa);
    idDel?.remove();
    alert("deletando");
  }
  ngOnInit() {
  }

}
