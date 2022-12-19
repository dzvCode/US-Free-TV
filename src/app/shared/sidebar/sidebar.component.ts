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

seleccionar(url : string) {
  this.getCanalesService.current = url;
  console.log(url);
}

}
