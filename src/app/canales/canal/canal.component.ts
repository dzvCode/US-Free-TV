import { Component } from '@angular/core';
import { GetCanalesService } from '../get-canales.service';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-canal',
  templateUrl: './canal.component.html'
})
export class CanalComponent {

  constructor(private getCanalesService: GetCanalesService) { 
    console.log("canal"+this.logo);
  }

  public html: SafeHtml = this.getCanalesService.html;
  public link: string = "";
  public logo: string = "";
  public name: string = "";

  public mostrarCanal(): void {
    this.link = this.getCanalesService.data[0];
    this.logo = this.getCanalesService.data[1];
    this.name = this.getCanalesService.data[2];
    this.getCanalesService.onButtonClick(this.link);
    this.html = this.getCanalesService.safeHtml;
  }
 
}
