import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  municipios: Array<string> = ['Água Branca','Anadia','Arapiraca','Atalaia','Barra de Santo Antônio','Barra de São Miguel','Batalha','Belém','Belo Monte'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.procurarMunicipios();
  }
  
  procurarMunicipios() {
    this.municipios;
  }

  getMunicipios(ev) {
    // Reset items back to all of the items
    this.procurarMunicipios();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.municipios = this.municipios.filter((municipios) => {
        return (municipios.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  itemTapped(event, municipios) {
    this.navCtrl.push(ItemDetailsPage, {
      municipios: municipios
    });
  }
}
