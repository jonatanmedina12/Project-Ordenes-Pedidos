import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosAppComponent } from './pedidos/pedidos-app/pedidos-app.component';

const routes: Routes = [
  {
    path:'',component:PedidosAppComponent,pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
