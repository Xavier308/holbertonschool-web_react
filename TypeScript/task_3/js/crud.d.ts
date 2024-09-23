// task_3/js/crud.d.ts

// Import the necessary types from another TypeScript file if needed
import { RowID, RowElement } from './interface';

// Declare module to match the JavaScript file
declare module './crud' {
    // Declare the function signatures
    export function insertRow(row: RowElement): RowID;
    export function deleteRow(rowId: RowID): void;
    export function updateRow(rowId: RowID, row: RowElement): RowID;
}