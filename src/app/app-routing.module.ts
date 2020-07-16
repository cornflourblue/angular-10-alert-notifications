import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { MultiAlertsComponent } from './multi-alerts';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'multi-alerts', component: MultiAlertsComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
