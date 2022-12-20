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
public state: boolean[] = [];

seleccionar(url : string, logo : string, name : string) {
  this.getCanalesService.data[0] = url;
  this.getCanalesService.data[1] = logo;
  this.getCanalesService.data[2] = name;
  console.log("sidebar"+url);
  console.log("sidebar"+logo);  
}

onButtonGroupClick($event:any){
  let clickedElement = $event.target || $event.srcElement;
  if( clickedElement.nodeName === "BUTTON" ) {
    let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
    // if a Button already has Class: .active
    if( isCertainButtonAlreadyActive ) {
      isCertainButtonAlreadyActive.classList.remove("active");
    }

    clickedElement.className += " active";
  }

}

}
