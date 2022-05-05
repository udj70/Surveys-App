const auth=
{
    isAuthenticated:()=>{
        
    return sessionStorage.length ? true : false ;
    },
}

export default auth;