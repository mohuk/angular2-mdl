import { ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MdlLayoutComponent } from '../components';
import { AbstractDemoComponent } from './abstract-demo.component';
export declare class Home extends AbstractDemoComponent {
    constructor(router: Router, route: ActivatedRoute, titleService: Title);
}
export declare const appRoutes: Routes;
export declare class Angular2MdlAppComponent {
    vcRef: ViewContainerRef;
    title: string;
    constructor(vcRef: ViewContainerRef);
    componentSelected(mainLayout: MdlLayoutComponent): void;
}
