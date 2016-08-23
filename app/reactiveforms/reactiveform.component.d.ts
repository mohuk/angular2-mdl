import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
export declare class ReactiveFormsDemo {
    private fb;
    form: FormGroup;
    firstName: FormControl;
    lastName: FormControl;
    constructor(fb: FormBuilder);
    onSubmit(): void;
}
