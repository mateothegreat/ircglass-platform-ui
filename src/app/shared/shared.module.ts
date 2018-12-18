import { CommonModule }                                                      from '@angular/common';
import { NgModule }                                                          from '@angular/core';
import { ReactiveFormsModule }                                               from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatMenuModule } from '@angular/material';
import { ButtonComponent } from './button/button.component';

@NgModule({

    declarations: [ButtonComponent],

    imports: [

        CommonModule,

        ReactiveFormsModule,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatFormFieldModule,

    ],

    exports: [

        CommonModule,

        ReactiveFormsModule,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatFormFieldModule,

    ]

})
export class SharedModule {
}
