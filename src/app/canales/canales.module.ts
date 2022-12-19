import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanalComponent } from './canal/canal.component';



@NgModule({
  declarations: [
    CanalComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    CanalComponent
  ]
})
export class CanalesModule { }
