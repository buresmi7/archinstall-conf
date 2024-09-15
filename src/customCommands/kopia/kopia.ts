import {encodeBase64} from "jsr:@std/encoding";

import {CustomCommadsModuleOutput} from "../../CustomCommadsModuleOutput.ts";
import {convertFileLinesToArrayOfEchos} from "../../convertFileLinesToArrayOfEchos.ts";

export const kopia = async (): Promise<CustomCommadsModuleOutput> => {
    return [
        "mkdir -p /home/michal/.config/autostart",
        ...await convertFileLinesToArrayOfEchos('src/customCommands/kopia/autostart', '/home/michal/.config/autostart/kopia-ui.desktop')
    ];
}