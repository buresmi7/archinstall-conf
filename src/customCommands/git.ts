import {CustomCommadsModuleOutput} from "../CustomCommadsModuleOutput.ts";

export const git = (): CustomCommadsModuleOutput => {
    return ['git config --global user.name \"Michal Bureš\"', 'git config --global user.email \"michal.ezop@gmail.com\"'];
}