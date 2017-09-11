export function validator(ext,value,errMessage,callback){
    if(!ext.test(value)){
        callback( new Error(errMessage))
    }else{
        callback();
    }
}