import {CustomCommadsModuleOutput} from "../CustomCommadsModuleOutput.ts";

export const prepare = (): CustomCommadsModuleOutput => {
    return ['passwd -d builder']
}