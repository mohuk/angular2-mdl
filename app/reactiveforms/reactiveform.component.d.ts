import { OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/filter';
export declare class ReactiveFormsDemo implements OnInit {
    private fb;
    form: FormGroup;
    firstName: FormControl;
    lastName: FormControl;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    onSubmit(): void;
}
