import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms'

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard2' },
            { path: 'dashboard2', loadChildren: './dashboard2/dashboard.module#DashboardModule' },
            { path: 'charts2', loadChildren: './charts2/charts.module#ChartsModule' },
            { path: 'tables2', loadChildren: './tables3/tables.module#TablesModule' },
            { path: 'forms2', loadChildren: './form2/form.module#FormModule' },
            { path: 'bs-element2', loadChildren: './bs-element2/bs-element.module#BsElementModule' },
            { path: 'grid2', loadChildren: './grid2/grid.module#GridModule' },
            { path: 'components2', loadChildren: './bs-component2/bs-component.module#BsComponentModule' },
            { path: 'Certificate', loadChildren: './Certificate/Certificate.module#CertificateModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
