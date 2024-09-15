import {CustomCommadsModuleOutput} from "../CustomCommadsModuleOutput.ts";

export const clearing = (): CustomCommadsModuleOutput => {
    return ['chown -R michal:michal /home/michal']
}