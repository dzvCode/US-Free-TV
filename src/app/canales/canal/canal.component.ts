import { Component } from '@angular/core';
import { GetCanalesService } from '../get-canales.service';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-canal',
  templateUrl: './canal.component.html'
})
export class CanalComponent {

  constructor(private getCanalesService: GetCanalesService) { }

  public html: SafeHtml = this.getCanalesService.html;
  public link: string = "";
 
  public mostrarCanal(): void {
    this.link = this.getCanalesService.current;
    this.getCanalesService.onButtonClick(this.link);
    this.html = this.getCanalesService.safeHtml;
  }
  
}
