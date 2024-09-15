import {CustomCommadsModuleOutput} from "../../CustomCommadsModuleOutput.ts";
import {convertFileLinesToArrayOfEchos} from "../../convertFileLinesToArrayOfEchos.ts";

const currentDir = 'src/customCommands/plasmaKde'

export const plasmaKde = async (): Promise<CustomCommadsModuleOutput> => {
    const doplhin = await convertFileLinesToArrayOfEchos(`${currentDir}/dolphinrc`, '/home/michal/.config/dolphinrc');
    const dolphinDirectory = await convertFileLinesToArrayOfEchos(`${currentDir}/dolphinDirectory`, '/home/michal/.local/share/dolphin/view_properties/global/.directory');
    const baloofilerc = await convertFileLinesToArrayOfEchos(`${currentDir}/baloofilerc`, '/home/michal/.config/baloofilerc');
    const plasmashellrc = await convertFileLinesToArrayOfEchos(`${currentDir}/plasmashellrc`, '/home/michal/.config/plasmashellrc');
    const plasmaAppletsrc = await convertFileLinesToArrayOfEchos(`${currentDir}/plasma-org.kde.plasma.desktop-appletsrc`, '/home/michal/.config/plasma-org.kde.plasma.desktop-appletsrc');
    const doplhinstaterc = await convertFileLinesToArrayOfEchos(`${currentDir}/dolphinstaterc`, '/home/michal/.local/state/dolphinstaterc');
    const konsolesshconfig = await convertFileLinesToArrayOfEchos(`${currentDir}/konsolesshconfig`, '/home/michal/.config/konsolesshconfig');

    return [
        'mkdir -p /home/michal/.config',
        'mkdir -p /home/michal/.local/share/dolphin/view_properties/global',
        'mkdir -p /home/michal/.local/state',
        ...doplhin,
        ...dolphinDirectory,
        ...doplhinstaterc,
        ...baloofilerc,
        ...plasmashellrc,
        ...plasmaAppletsrc,
        ...konsolesshconfig
    ];
}