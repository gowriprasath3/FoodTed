import { AbstractControl } from "@angular/forms";

export function nameValidator(control:AbstractControl){

    if(control && (control.value!=null || control.value!=undefined)){
        const regEx= new RegExp('([A-Za-z0-9\. -]+)');

        if(!regEx.test(control.value)){
            return{
                isError: true
            };
        }
    }
    return null;

}