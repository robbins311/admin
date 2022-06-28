import http from './http';

/**
 * 
 * update API REQUEST 
 * 
 */

//update List
export async function getUpdateList(data){
    try{
        console.log('get /Api/adminUpdateManager/getUpdateList');
        return http.get('/Api/adminUpdateManager/getUpdateList', data);
    }catch(err){
        return err;
    }
}
//update detail
export async function getUpdateDetail(seq, data){
    try{
        console.log('detail /Api/adminUpdateManager/getUpdateDetail')
        return http.get(`/Api/adminUpdateManager/getUpdateDetail?seq=${seq}`, data);
    }catch(err){
        return err;
    }
}


//update Insert
export async function addUpdateForm(data){
    try{
        console.log('insert /Api/adminUpdateManager/addUpdateForm');
        console.log(data)
        return http.post('/Api/adminUpdateManager/addUpdateForm', data,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        },);
    }catch(err){
        return err;
    }
}

//update update
export async function updateUpdateForm(seq, data){
    try{
        console.log('update /Api/adminUpdateManager/updateUpdateForm')
        console.log(seq, data)
        return http.post(`/Api/adminUpdateManager/updateUpdateForm?seq=${seq}`, data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        },);
    }catch(err){
        return err;
    }
}

//update delete
export async function deleteUpdateForm(seq){
    try{
        console.log('delete /Api/adminUpdateManager/deleteUpdateForm')
        console.log(seq)
        return http.get(`/Api/adminUpdateManager/deleteUpdateForm?seq=${seq}`);
    }catch(err){
        return err;
    }
}

