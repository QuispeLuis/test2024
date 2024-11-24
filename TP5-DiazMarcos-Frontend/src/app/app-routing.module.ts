import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto3Component } from './components/punto3/punto3.component';
import { FormularioPComponent } from './components/formulario-p/formulario-p.component';
import { FormularioTComponent } from './components/formulario-t/formulario-t.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'punto1', component: Punto1Component},
  { path: 'formularioP/:id', component: FormularioPComponent},
  { path: 'punto2', component: Punto2Component},
  { path: 'punto3', component: Punto3Component},
  { path: 'formularioT/:id', component: FormularioTComponent},

  { path: '**', pathMatch:'full',redirectTo:'punto1'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
