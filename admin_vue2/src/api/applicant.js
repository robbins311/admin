import http from './http';

/**
 * 
 * applicant API REQUEST 
 * 
 */

//applicant List
export async function getApplicantList(data){
    try{
        console.log('get /Api/adminApplicantManager/getApplicantList');
        return http.get('/Api/adminApplicantManager/getApplicantList', data);
    }catch(err){
        return err;
    }
}
//applicant detail
export async function getApplicantDetail(seq, data){
    try{
        console.log('detail /Api/adminApplicantManager/getApplicantDetail')
        return http.get(`/Api/adminApplicantManager/getApplicantDetail?seq=${seq}`, data);
    }catch(err){
        return err;
    }
}


//applicant Insert
export async function addApplicantForm(seq, data){
    try{
        console.log('insert /Api/adminApplicantManager/addApplicantForm');
        console.log(data)
        return http.post(`/Api/adminApplicantManager/addApplicantForm?seq=${seq}`, data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        },);
    }catch(err){
        return err;
    }
}

//applicant delete
export async function deleteApplicantForm(seq){
    try{
        console.log('delete /Api/adminApplicantManager/deleteApplicantForm')
        console.log(seq)
        return http.get(`/Api/adminApplicantManager/deleteApplicantForm?seq=${seq}`);
    }catch(err){
        return err;
    }
}

