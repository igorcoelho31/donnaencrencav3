import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SobrenosPageRoutingModule } from './sobrenos-routing.module';

import { SobrenosPage } from './sobrenos.page';
import { HeaderModule } from '../componentes/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SobrenosPageRoutingModule,
    HeaderModule
  ],
  declarations: [SobrenosPage]
})
export class SobrenosPageModule {}
