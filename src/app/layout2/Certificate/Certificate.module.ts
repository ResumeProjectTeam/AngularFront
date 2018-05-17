import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms'
import { FormGroup, FormArray, FormBuilder,FormControl,
    Validators  } from '@angular/forms';
import { CertificateRoutingModule } from './Certificate-routing.module';
import { CertificateComponent } from './Certificate.component';
import 'rxjs/add/operator/toPromise';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, CertificateRoutingModule],
    declarations: [CertificateComponent]
})
export class CertificateModule {}
