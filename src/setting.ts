import * as fs from 'fs';

export class Setting{
    #data:settingData = {};

    add(name:string, data:object){
        this.#data[name] = data;
        return true;
    }

    get(name:string, detail:string){
        return this.#data[name]?.[detail];;
    }

    getAll(name:string){
        return this.#data[name];
    }

    set(name:string, detail:string, value:string){
        if(this.#data[name]){
            this.#data[name][detail] = value;
            fs.writeFileSync(`setting/${name}.json`, JSON.stringify(this.#data[name]), 'utf-8');
            return true;
        }
        else{
            return false;
        }
    }
}

interface settingData{
    [index:string]:any;
}