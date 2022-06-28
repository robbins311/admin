import http from './http';


/**
 * 
 * Login API REQUEST 
 * 
 */

//login check

export async function checkLogin(data){
    try{
        console.log('post /Api/adminUserManager/checkUser');
        console.log(data)
        return http.post('/Api/adminUserManager/checkUser', data);
    }catch(err){
        return err;
    }
}

