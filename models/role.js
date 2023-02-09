import {Schema,model} from 'mongoose';

const roleSchema = Schema({
    
       role: {
          type: String,
          require: [ true , 'Este Campo es Obligatorio']
       }

});

const Role = model('Role',roleSchema);

export {
    Role
}