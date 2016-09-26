import { ComponentFactoryResolver } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractDemoComponent } from './../abstract-demo.component';
import { MdlDialogService } from '../../components/dialog/index';
import { MdlSnackbarService } from '../../components/snackbar/mdl-snackbar.service';
import { Angular2MdlAppComponent } from '../app.component';
export declare class DialogDemo extends AbstractDemoComponent {
    private dialogService;
    private snackbarService;
    private app;
    private componentFactoryResolver;
    constructor(router: Router, route: ActivatedRoute, titleService: Title, dialogService: MdlDialogService, snackbarService: MdlSnackbarService, app: Angular2MdlAppComponent, componentFactoryResolver: ComponentFactoryResolver);
    showAlert(): void;
    showConfirmMessage(): void;
    showDialogFullWidthAction(): void;
    showDialog(): void;
}
