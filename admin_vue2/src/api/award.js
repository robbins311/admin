import http from './http';

/**
 * 
 * award API REQUEST 
 * 
 */

//award List
export async function getAwardList(data){
    try{
        console.log('get /Api/adminawardManager/getawardList');
        return http.get('/Api/adminAwardManager/getAwardList', data);
    }catch(err){
        return err;
    }
}
//award detail
export async function getAwardDetail(seq, data){
    try{
        console.log('detail /Api/adminawardManager/getawardDetail')
        return http.get(`/Api/adminAwardManager/getAwardDetail?seq=${seq}`, data);
    }catch(err){
        return err;
    }
}


//award Insert
export async function addAwardForm(data){
    try{
        console.log('insert /Api/adminawardManager/addawardForm');
        console.log(data)
        return http.post('/Api/adminAwardManager/addAwardForm', data,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        },);
    }catch(err){
        return err;
    }
}

//award update
export async function updateAwardForm(seq, data){
    try{
        console.log('update /Api/adminawardManager/updateawardForm')
        console.log(seq, data)
        return http.post(`/Api/adminAwardManager/updateAwardForm?seq=${seq}`, data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        },);
    }catch(err){
        return err;
    }
}

//award delete
export async function deleteAwardForm(seq){
    try{
        console.log('delete /Api/adminawardManager/deleteawardForm')
        console.log(seq)
        return http.get(`/Api/adminAwardManager/deleteAwardForm?seq=${seq}`);
    }catch(err){
        return err;
    }
}

