import http from './http';

/**
 * 
 * recruit API REQUEST 
 * 
 */

//recruit List
export async function getRecruitList(data){
    try{
        console.log('get /Api/adminRecruitManager/getRecruitList');
        return http.get('/Api/adminRecruitManager/getRecruitList', data);
    }catch(err){
        return err;
    }
}
//recruit detail
export async function getRecruitDetail(seq, data){
    try{
        console.log('detail /Api/adminRecruitManager/getRecruitDetail')
        return http.get(`/Api/adminRecruitManager/getRecruitDetail?seq=${seq}`, data);
    }catch(err){
        return err;
    }
}


//recruit Insert
export async function addRecruitForm(data){
    try{
        console.log('insert /Api/adminRecruitManager/addRecruitForm');
        console.log(data)
        return http.post('/Api/adminRecruitManager/addRecruitForm', data,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        },);
    }catch(err){
        return err;
    }
}

//recruit update
export async function updateRecruitForm(seq, data){
    try{
        console.log('update /Api/adminRecruitManager/updateRecruitForm')
        console.log(seq, data)
        return http.post(`/Api/adminRecruitManager/updateRecruitForm?seq=${seq}`, data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        },);
    }catch(err){
        return err;
    }
}

//recruit delete
export async function deleteRecruitForm(seq){
    try{
        console.log('delete /Api/adminRecruitManager/deleteRecruitForm')
        console.log(seq)
        return http.get(`/Api/adminRecruitManager/deleteRecruitForm?seq=${seq}`);
    }catch(err){
        return err;
    }
}

