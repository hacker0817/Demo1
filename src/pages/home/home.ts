import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  btnObj: any = [];

  constructor(
    public navCtrl: NavController) {

    this.btnObj = [
      {
        name: "my-add",
        text: "新增"
      },
      {
        name: "my-edit",
        text: "编辑"
      },
      {
        name: "my-save",
        text: "保存"
      },
      {
        name: "my-cancel",
        text: "取消"
      },
      {
        name: "my-add",
        text: "新增"
      },
      {
        name: "my-edit",
        text: "编辑"
      },
      {
        name: "my-save",
        text: "保存"
      },
      {
        name: "my-cancel",
        text: "取消"
      },
      {
        name: "my-add",
        text: "新增"
      },
      {
        name: "my-edit",
        text: "编辑"
      }]
  }
}
