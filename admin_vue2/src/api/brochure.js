import http from './http';

/**
 * 
 * brochure API REQUEST 
 * 
 */

//brochure List
export async function getBrochureList(data){
    try{
        console.log('get /Api/adminBrochureManager/getBrochureList');
        return http.get('/Api/adminBrochureManager/getBrochureList', data);
    }catch(err){
        return err;
    }
}
//brochure detail
export async function getBrochureDetail(seq, data){
    try{
        console.log('detail /Api/adminBrochureManager/getBrochureDetail')
        return http.get(`/Api/adminBrochureManager/getBrochureDetail?seq=${seq}`, data);
    }catch(err){
        return err;
    }
}


//brochure Insert
export async function addBrochureForm(data){
    try{
        console.log('insert /Api/adminBrochureManager/addBrochureForm');
        console.log(data)
        return http.post('/Api/adminBrochureManager/addBrochureForm', data,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        },);
    }catch(err){
        return err;
    }
}

//brochure update
export async function updateBrochureForm(seq, data){
    try{
        console.log('update /Api/adminBrochureManager/updateBrochureForm')
        console.log(seq, data)
        return http.post(`/Api/adminBrochureManager/updateBrochureForm?seq=${seq}`, data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        },);
    }catch(err){
        return err;
    }
}

//brochure delete
export async function deleteBrochureForm(seq){
    try{
        console.log('delete /Api/adminBrochureManager/deleteBrochureForm')
        console.log(seq)
        return http.get(`/Api/adminBrochureManager/deleteBrochureForm?seq=${seq}`);
    }catch(err){
        return err;
    }
}

