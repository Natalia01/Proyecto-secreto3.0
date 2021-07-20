
import Cookies from 'js-cookie'
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export const sessionCheck=(WrappedComponent)=>
  ()=>{
    
       const router = useRouter()
       console.log("en HOC")
       useEffect(() => {
         if (Cookies.get('sessionKey')) {
           if(router.pathname!=='/crud/issueForm'){
             console.log("en IF")          
             router.push('../crud/issueForm')
           }
         }else{
           console.log("en ELSE")
           router.push('/login/login')
         }
       },[])
           return(
               <WrappedComponent/>
           )
      }