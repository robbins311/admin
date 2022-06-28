import http from './http';

/**
 * 
 * manual API REQUEST 
 * 
 */

//manual List
export async function getManualList(data){
    try{
        console.log('get /Api/adminManualManager/getManualList');
        return http.get('/Api/adminManualManager/getManualList', data);
    }catch(err){
        return err;
    }
}
//manual detail
export async function getManualDetail(seq, data){
    try{
        console.log('detail /Api/adminManualManager/getManualDetail')
        return http.get(`/Api/adminManualManager/getManualDetail?seq=${seq}`, data);
    }catch(err){
        return err;
    }
}


//manual Insert
export async function addManualForm(data){
    try{
        console.log('insert /Api/adminManualManager/addManualForm');
        console.log(data)
        return http.post('/Api/adminManualManager/addManualForm', data,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        },);
    }catch(err){
        return err;
    }
}

//manual update
export async function updateManualForm(seq, data){
    try{
        console.log('update /Api/adminManualManager/updateManualForm')
        console.log(seq, data)
        return http.post(`/Api/adminManualManager/updateManualForm?seq=${seq}`, data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        },);
    }catch(err){
        return err;
    }
}

//manual delete
export async function deleteManualForm(seq){
    try{
        console.log('delete /Api/adminManualManager/deleteManualForm')
        console.log(seq)
        return http.get(`/Api/adminManualManager/deleteManualForm?seq=${seq}`);
    }catch(err){
        return err;
    }
}

