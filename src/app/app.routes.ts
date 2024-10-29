import { Routes } from '@angular/router';
import { InicioComponent } from './inicio-c/inicio-c.component';
import { PrepararComponent } from './preparar/preparar.component';
import { PreparandoComponent } from './preparando/preparando.component';
import { FinalizadosComponent } from './finalizados/finalizados.component';
import { NotificandoMotoComponent } from './notificando-moto/notificando-moto.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'preparar', component: PrepararComponent },
    { path: 'preparando', component: PreparandoComponent},
    { path: 'finalizados', component: FinalizadosComponent},
    { path: 'notificando-moto', component: NotificandoMotoComponent},
  ];
  
