import { ViewContainerRef } from '@angular/core';
import { MdlSnackbarService } from '../../components';
export declare class SnackbarDemo {
    private mdlSnackbarService;
    private vcRef;
    constructor(mdlSnackbarService: MdlSnackbarService, vcRef: ViewContainerRef);
    showSnackbar(): void;
}
