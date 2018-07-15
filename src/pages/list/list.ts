import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  municipios: Array<string>;
  toggled: boolean = false;
  title: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.toggled = false;
  }

  toggle(): void {
    this.toggled = this.toggled ? false : true;
    this.title = true;
  }

  cancelSearch($event){
    this.toggle();
  }

  ngOnInit() {
    this.setMunicipios();
  }

  setMunicipios() {
    this.municipios = ['Água Branca','Anadia','Arapiraca','Atalaia','Barra de Santo Antônio','Barra de São Miguel','Batalha','Belém','Belo Monte'];
  }

  filterMunicipios(ev: any) {
    // Reset items back to all of the items
    this.setMunicipios();
    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.municipios = this.municipios.filter(function(municipios) {
        return municipios.toLowerCase().includes(val.toLowerCase());
      })
    }
  }

  itemTapped(event, municipios) {
    this.navCtrl.push(ItemDetailsPage, {
      municipios: municipios
    });
  }
}
