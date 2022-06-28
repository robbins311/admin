import http from './http';

/**
 * 
 * Press API REQUEST 
 * 
 */

//Press List
export async function getPressList(data){
    try{
        console.log('get /Api/adminPressManager/getPressList');
        return http.get('/Api/adminPressManager/getPressList', data);
    }catch(err){
        return err;
    }
}
//Press detail
export async function getPressDetail(seq){
    try{
        console.log('detail /Api/adminPressManager/getPressDetail')
        console.log(seq)
        return http.get(`/Api/adminPressManager/getPressDetail?seq=${seq}`);
    }catch(err){
        return err;
    }
}


//Press Insert
export async function addPressForm(data){
    try{
        console.log('insert /Api/adminPressManager/addPressForm');
        console.log(data)
        return http.post('/Api/adminPressManager/addPressForm', data,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        },);
    }catch(err){
        return err;
    }
}

//Press update
export async function updatePressForm(seq, data){
    try{
        console.log('update /Api/adminPressManager/updatePressForm')
        console.log(seq)
        return http.post(`/Api/adminPressManager/updatePressForm?seq=${seq}`, data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        },);
    }catch(err){
        return err;
    }
}

//Press delete
export async function deletePressForm(seq){
    try{
        console.log('delete /Api/adminPressManager/deletePressForm')
        console.log(seq)
        return http.get(`/Api/adminPressManager/deletePressForm?seq=${seq}`);
    }catch(err){
        return err;
    }
}

