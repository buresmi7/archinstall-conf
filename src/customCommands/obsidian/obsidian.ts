import {CustomCommadsModuleOutput} from "../../CustomCommadsModuleOutput.ts";
import {convertFileLinesToArrayOfEchos} from "../../convertFileLinesToArrayOfEchos.ts";

const currentDir = 'src/customCommands/obsidian'

export const obsidian = async (): CustomCommadsModuleOutput => {
    const json = await convertFileLinesToArrayOfEchos(`${currentDir}/obsidian.json`, '/home/michal/.config/obsidian/obsidian.json');
    const preferences = await convertFileLinesToArrayOfEchos(`${currentDir}/Preferences`, '/home/michal/.config/obsidian/Preferences');
    return [
        "mkdir -p '/home/michal/.config/obsidian'",
        ...json,
        ...preferences
    ];
}