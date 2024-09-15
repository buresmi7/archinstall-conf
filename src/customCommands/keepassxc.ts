import {CustomCommadsModuleOutput} from "../CustomCommadsModuleOutput.ts";
import {convertFileLinesToArrayOfEchos} from "../convertFileLinesToArrayOfEchos.ts";

export const keepassxc = async (): Promise<CustomCommadsModuleOutput> => {
    return [
        'mkdir -p /home/michal/.cache/keepassxc',
        ...await convertFileLinesToArrayOfEchos('src/customCommands/keepassxc.ini', '/home/michal/.cache/keepassxc/keepassxc.ini')
    ];
}