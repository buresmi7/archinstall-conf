import {CustomCommadsModuleOutput} from "../CustomCommadsModuleOutput.ts";

export const nvm = (): CustomCommadsModuleOutput => {
    return [
        "echo 'source /usr/share/nvm/init-nvm.sh' >> /home/michal/.bashrc",
        "echo 'aaaa' | sudo -S -u michal bash -c -i \"nvm install 18 && nvm alias default 18\""
    ]
}