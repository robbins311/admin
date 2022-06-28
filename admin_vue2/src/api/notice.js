import http from './http';

/**
 * 
 * NOTICE API REQUEST 
 * 
 */

//Notice List
export async function getNoticeList(data){
    try{
        console.log('get /Api/adminNoticeManager/getNoticeList');
        console.log(data);
        return http.get('/Api/adminNoticeManager/getNoticeList?searchString&searchField=all&start=0&limit=50', data);
        
    }catch(err){
        return err;
    }
}

//Notice Insert
export async function addNoticeForm(data){
    try{
        console.log('insert /Api/adminNoticeManager/addNoticeForm');
        console.log(data)
        return http.post('/Api/adminNoticeManager/addNoticeForm', data,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        },
        );
    }catch(err){
        return err;
    }
}


//notice detail
export async function NoticeListDetail(seq){
    try{
        console.log('detail /Api/adminNoticeManager/getNoticeDetail')
        console.log(seq)
        return http.get(`/Api/adminNoticeManager/getNoticeDetail?SEQ=${seq}`);
    }catch(err){
        return err;
    }
}

//notice update
export async function updateNoticeForm(seq, data){
    try{
        console.log('update /Api/adminNoticeManager/updateNoticeForm')
        console.log(data)
        return http.post(`/Api/adminNoticeManager/updateNoticeForm?SEQ=${seq}`, data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        },);
    }catch(err){
        return err;
    }
}

//notice delete
export async function deleteNoticeForm(seq){
    try{
        console.log('delete /Api/adminNoticeManager/deleteNoticeForm')
        console.log(seq)
        return http.get(`/Api/adminNoticeManager/deleteNoticeForm?SEQ=${seq}`);
    }catch(err){
        return err;
    }
}


