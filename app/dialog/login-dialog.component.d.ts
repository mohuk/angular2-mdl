import { ViewContainerRef } from '@angular/core';
import { MdlDialogReference, IMdlCustomDialog } from '../../components/dialog/index';
import 'rxjs/add/operator/scan';
export declare class LoginDialogComponent implements IMdlCustomDialog {
    private vcRef;
    private dialog;
    private inputElement;
    constructor(vcRef: ViewContainerRef, dialog: MdlDialogReference);
    viewContainerRef: ViewContainerRef;
    ngAfterViewInit(): void;
    login(): void;
    onEsc(): void;
}
