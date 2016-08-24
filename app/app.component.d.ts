import { RouterConfig, ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MdlLayoutComponent } from '../components';
import { AbstractDemoComponent } from './abstract-demo.component';
export declare class Home extends AbstractDemoComponent {
    constructor(router: Router, route: ActivatedRoute, titleService: Title);
}
export declare const appRoutes: RouterConfig;
export declare class Angular2MdlAppComponent {
    title: string;
    componentSelected(mainLayout: MdlLayoutComponent): void;
}
