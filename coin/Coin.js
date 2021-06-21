const fs = require('fs');
class Coin_info {
    constructor() {
        const data = fs.readFileSync('./coin/data.json');
        this.data = JSON.parse(data);
    }

    List() {
        if (this.data) {
            return this.data;
        }
    }
    Detail(id) {
        return new Promise((resolve, reject) => {
            for (var object of this.data) {
                if (object.id == id) {
                    resolve(object);
                    return;
                }
            }
            reject({ msg: _id + ' not found', code: 404 });
        });
    }

    add(data) {
        return new Promise((resolve, reject) => {
            const idx = this.data[this.data.length - 1].id + 1;
            const newInfo = {
                id:idx,
                name:data.name,
                simbol:data.simbol
            }
            this.data.push(newInfo);
            resolve(newInfo);
        });
    }

    update(data){
        return new Promise((resolve, reject) => {
            for (var object of this.data) {
                if (object.id == data.id) {
                    object.name = data.name;
                    object.simbol = data.simbol;
                    console.log(object);
                    resolve(object);
                    return;
                }
            }
            reject({ msg: data.name + 'Fail', code: 404 });
        });
    }

    Delete(id){
        return new Promise((resolve, reject) => {
            for (var object of this.data) {
                if (object.id == id) {
                    this.data.splice(object.id,1);
                    resolve(object.id," Deleted");
                    return;
                }
            }
            reject({ msg: id + 'Fail', code: 404 });
        });
    }

}
module.exports = new Info();