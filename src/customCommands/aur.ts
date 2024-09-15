import {CustomCommadsModuleOutput} from "../CustomCommadsModuleOutput.ts";

const aurHelper = (packageName: string): string => {
    return `sudo -u builder bash -c \"cd /home/builder && git clone https://aur.archlinux.org/${packageName}.git && cd ${packageName} && makepkg -s --noconfirm && sudo pacman -U --noconfirm *pkg.tar.*\"`
}

const packages = [
    'yay',
    'onedrive-abraunegg',
    'onedrivegui',
    'nvm',
    '1password',
    'kdeplasma-arch-update-notifier-git',
    'phpstorm',
    'postman-bin',
    'kopia-bin',
    'kopia-ui-bin',
    'slack-desktop-wayland',
    'google-chrome',
    'timeshift',
]

export const aur = (): CustomCommadsModuleOutput => {
    return [
        'sudo -u builder bash -c \"sudo curl -sS https://downloads.1password.com/linux/keys/1password.asc | gpg --import\"', // for 1password
        'sudo -u builder bash -c \"sudo curl -sS https://github.com/bouteillerAlan.gpg | gpg --import\"', // for kdeplasma-arch-update-notifier-git
        ...packages.map(aurHelper)
    ];
}
