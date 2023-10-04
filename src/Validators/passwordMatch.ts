import { AbstractControl } from "@angular/forms";

export function passwordMatch(password:string, confirmpassword: string){
    return function (form: AbstractControl){
        const passwordvalue = form.get(password)?.value
        const confirmpasswordvalue = form.get(confirmpassword)?.value
if(passwordvalue === confirmpasswordvalue){
    return null;
}
return {passwordmissmatcherror : true}
    }

}