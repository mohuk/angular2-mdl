import { Renderer, ElementRef, OnChanges, DoCheck } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class MdlTextFieldComponent implements ControlValueAccessor, OnChanges, DoCheck {
    private renderer;
    private elmRef;
    private value_;
    private el;
    private inputEl;
    value: any;
    type: any;
    label: any;
    pattern: any;
    errorMessage: any;
    disabled: boolean;
    required: boolean;
    isFloatingLabel: boolean;
    placeholder: string;
    rows: number;
    maxrows: number;
    icon: string;
    constructor(renderer: Renderer, elmRef: ElementRef);
    writeValue(value: any): void;
    private onTouchedCallback;
    private onChangeCallback;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnChanges(): void;
    ngDoCheck(): void;
    protected setFocus(): void;
    protected onFocus(): void;
    protected onBlur(): void;
    private checkDisabled();
    private checkValidity();
    private checkDirty();
    keydownTextarea($event: KeyboardEvent): void;
}
/** @deprecated */
export declare const MDL_TEXT_FIELD_DIRECTIVES: typeof MdlTextFieldComponent[];
export declare class MdlTextFieldModule {
}