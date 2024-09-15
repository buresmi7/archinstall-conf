import {CustomCommadsModuleOutput} from "../../CustomCommadsModuleOutput.ts";
import {convertFileLinesToArrayOfEchos} from "../../convertFileLinesToArrayOfEchos.ts";

const currentDir = 'src/customCommands/onedrive'

export const onedrive = async (): CustomCommadsModuleOutput => {
    const syncList = await convertFileLinesToArrayOfEchos(`${currentDir}/sync_list`, '/home/michal/.config/onedrive/accounts/mbures@outlook.cz/sync_list');
    const refreshToken = await convertFileLinesToArrayOfEchos(`${currentDir}/refresh_token`, '/home/michal/.config/onedrive/accounts/mbures@outlook.cz/refresh_token');
    const config = await convertFileLinesToArrayOfEchos(`${currentDir}/config`, '/home/michal/.config/onedrive/accounts/mbures@outlook.cz/config');
    const guiProfiles = await convertFileLinesToArrayOfEchos(`${currentDir}/profiles`, '/home/michal/.config/onedrive-gui/profiles');
    const guiSettings = await convertFileLinesToArrayOfEchos(`${currentDir}/gui_settings`, '/home/michal/.config/onedrive-gui/gui_settings');
    const autostart = await convertFileLinesToArrayOfEchos(`${currentDir}/autostart`, '/home/michal/.config/autostart/onedrivegui.desktop');
    return [
        "mkdir -p '/home/michal/.config/onedrive/accounts/mbures@outlook.cz'",
        "mkdir -p /home/michal/.config/onedrive-gui",
        "mkdir -p /home/michal/.config/autostart",
        ...syncList,
        ...refreshToken,
        ...config,
        ...guiProfiles,
        ...guiSettings,
        ...autostart
    ];
}