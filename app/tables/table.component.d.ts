import { OnInit } from '@angular/core';
import { IMdlTableModelItem, MdlDefaultTableModel } from '../../components';
export interface ITableItem extends IMdlTableModelItem {
    material: string;
    quantity: number;
    unitPrice: number;
}
export declare class TableDemo implements OnInit {
    private tableData;
    protected selected: Array<ITableItem>;
    tableModel: MdlDefaultTableModel;
    ngOnInit(): void;
    protected selectionChanged($event: any): void;
}
