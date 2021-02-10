import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { material } from '../material/material';
import { CharacterComponent } from './character/character.component';

const COMPONENTS = [HeaderComponent, FooterComponent, CharacterComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    material
  ]
})
export class ComponentsModule { }
