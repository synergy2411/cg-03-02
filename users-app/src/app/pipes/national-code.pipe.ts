import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "nationalcode"
})
export class NationalCodePipe implements PipeTransform {
    transform(value: any, code: string) {
        switch (code) {
            case "US":
                return "+1 " + value;
            case "EUR":
                return "+4 " + value;
            case "IND":
                return "+91 " + value;
            default:
                return "+91 " + value;
        }

    }
}