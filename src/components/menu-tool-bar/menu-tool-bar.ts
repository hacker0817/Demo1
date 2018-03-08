import { Component, Input, OnChanges } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { MenuListPage } from './menu-list';

@Component({
  selector: 'menu-tool-bar',
  templateUrl: 'menu-tool-bar.html'
})
export class MenuToolBarComponent {

  @Input() buttons: any = [];
  btnMenu: any = [];
  btnMore: any = [];

  constructor(public popoverCtrl: PopoverController) {
  }

  ngOnChanges(ch) {
    for (let i = 0; i < this.buttons.length; i++) {
      if (i < 4)
        this.btnMenu.push(this.buttons[i]);
      else
        this.btnMore.push(this.buttons[i]);
    }
  }

  showMoreButton(event) {
    let popover = this.popoverCtrl.create('MenuListPage', { btnMenu: this.btnMore });

    popover.present({
      ev: event
    });
  }

}
