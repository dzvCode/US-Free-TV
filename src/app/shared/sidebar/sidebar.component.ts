import { Component } from '@angular/core';
import { GetCanalesService } from '../../canales/get-canales.service';
import { CanalComponent } from '../../canales/canal/canal.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

constructor( private getCanalesService: GetCanalesService) {}

public jsonCanales = this.getCanalesService.jsonCanales;

seleccionar(url : string, logo : string, name : string) {
  this.getCanalesService.data[0] = url;
  this.getCanalesService.data[1] = logo;
  this.getCanalesService.data[2] = name;
  console.log("sidebar"+url);
  console.log("sidebar"+logo);  
}

}
