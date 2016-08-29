import { OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/filter';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractDemoComponent } from './../abstract-demo.component';
export declare class ReactiveFormsDemo extends AbstractDemoComponent implements OnInit {
    private fb;
    form: FormGroup;
    firstName: FormControl;
    lastName: FormControl;
    email: FormControl;
    email2: FormControl;
    constructor(router: Router, route: ActivatedRoute, titleService: Title, fb: FormBuilder);
    ngOnInit(): void;
    onSubmit(): void;
}
