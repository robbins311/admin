import http from './http';

/**
 * 
 * question API REQUEST 
 * 
 */

//question List
export async function getQuestionList(data){
    try{
        console.log('get /Api/adminQuestionManager/getQuestionList');
        return http.get('/Api/adminQuestionManager/getQuestionList', data);
    }catch(err){
        return err;
    }
}
//question detail
export async function getQuestionDetail(seq, data){
    try{
        console.log('detail /Api/adminQuestionManager/getQuestionDetail')
        return http.get(`/Api/adminQuestionManager/getQuestionDetail?seq=${seq}`, data);
    }catch(err){
        return err;
    }
}


//question Insert
export async function addQuestionForm(data){
    try{
        console.log('insert /Api/adminQuestionManager/addQuestionForm');
        console.log(data)
        return http.post('/Api/adminQuestionManager/addQuestionForm', data,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        },);
    }catch(err){
        return err;
    }
}

//question delete
export async function deleteQuestionForm(seq){
    try{
        console.log('delete /Api/adminQuestionManager/deleteQuestionForm')
        console.log(seq)
        return http.get(`/Api/adminQuestionManager/deleteQuestionForm?seq=${seq}`);
    }catch(err){
        return err;
    }
}

