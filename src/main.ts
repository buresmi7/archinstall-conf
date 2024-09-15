import {prepare} from "./customCommands/prepare.ts";
import {sddmAutologin} from "./customCommands/sddmAutologin.ts";
import {clearing} from "./customCommands/clearing.ts";
import {aur} from "./customCommands/aur.ts";
import {onedrive} from "./customCommands/onedrive/onedrive.ts";
import {plasmaKde} from "./customCommands/plasmaKde/plasmaKde.ts";
import {git} from "./customCommands/git.ts";
import {keepassxc} from "./customCommands/keepassxc.ts";
import {nvm} from "./customCommands/nvm.ts";
import {obsidian} from "./customCommands/obsidian/obsidian.ts";
import {kopia} from "./customCommands/kopia/kopia.ts";

console.info('Starting compile ArchInstall configuration file');

const baseConf = await Deno.readTextFile('src/baseArchInstallConf.json', 'utf-8');

const customCommands = [
    ...prepare(),
    ...git(),
    ...await keepassxc(),
    ...await sddmAutologin(),
    ...aur(),
    ...await onedrive(),
    ...await plasmaKde(),
    ...nvm(),
    ...await obsidian(),
    ...await kopia(),
    ...clearing()
]

const conf = JSON.parse(baseConf);
conf['custom-commands'] = customCommands;

await Deno.writeTextFile('build/conf.json', JSON.stringify(conf, null, 4));

console.info('Configuration file compiled successfully');
