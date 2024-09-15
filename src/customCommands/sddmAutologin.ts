import {CustomCommadsModuleOutput} from "../CustomCommadsModuleOutput.ts";
import {convertFileLinesToArrayOfEchos} from "../convertFileLinesToArrayOfEchos.ts";

export const sddmAutologin = async (): Promise<CustomCommadsModuleOutput> => {
    return [
        'mkdir -p /etc/sddm.conf.d',
        ...await convertFileLinesToArrayOfEchos('src/customCommands/sddmAutologin.conf', '/etc/sddm.conf.d/autologin.conf')
    ];
}