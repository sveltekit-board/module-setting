import { Setting } from "./src/setting";
import * as fs from 'fs';

const list = fs.readdirSync('setting');
const setting = new Setting();

list.forEach((e:any) => {
    if(/(.*?)\.json/.test(e)){
        setting.add(e.replace(/(.*?)\.json/, '$1'), JSON.parse(fs.readFileSync(`setting/${e}`, 'utf-8')));
    }
    
})

export default setting;