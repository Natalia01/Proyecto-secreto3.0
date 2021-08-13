
import Cookies from 'js-cookie'
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export const sessionCheck = (WrappedComponent) =>
  () => {
    const router = useRouter()
    useEffect(() => {
      if (Cookies.get('sessionKey')) {
        if (router.pathname !== '/crud/issueForm') {
          router.push('../crud/issueForm')
        }
      } else {
        router.push('/login/login')
      }
    }, [])
    return (
      <WrappedComponent />
    )
  }