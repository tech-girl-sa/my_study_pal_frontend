import { useNavigate } from "react-router-dom";
import { createNewRegistration, sendLoginRequest, setUserInfo } from "./http";
import { useMutation } from "@tanstack/react-query";
import { setAuthToken } from "./authentication";
import Login from "../components/pages/Login";


export function useAuthenticate(mode="register"){
  const navigate = useNavigate();
  const {mutate, isPending, isError, error} = useMutation({
    mutationFn: mode == "login" ? sendLoginRequest: createNewRegistration
  })


  function handleSubmit(values, { setSubmitting, setErrors, setStatus }){
    mutate(values, {
      onSuccess: (data) => {
        setAuthToken(data.key)
        setSubmitting(false);
        const url= mode == "login" ? "/": "/onboarding/step1"
        navigate(url)
      },
      onError: async (err) => {
        if (err?.code === 400 && err?.info) {
          const fieldErrors = Object.fromEntries(
            Object.entries(err.info).map(([key, value]) => [key, value[0]])
          );
          setErrors(fieldErrors); 
        }else{setStatus(err.message)
        }
        setSubmitting(false);
      },
    });
  }
  return [
    handleSubmit,
    isPending,
    isError,
    error,
  ]
}

export function useSetUserInfo(url){
    const navigate = useNavigate();
    const {mutate, isPending, isError, error} = useMutation({
      mutationFn: setUserInfo
    })

    function handleSubmit(values, { setSubmitting, setErrors, setStatus }){
        mutate(values, {
          onSuccess: (data) => {
            setSubmitting(false);
            navigate(url)
          },
          onError: async (err) => {
            if (err?.code === 400 && err?.info) {
              const fieldErrors = Object.fromEntries(
                Object.entries(err.info).map(([key, value]) => [key, value[0]])
              );
              setErrors(fieldErrors); 
            }else{setStatus(err.message)
            }
            setSubmitting(false);
          },
        });
      }
      return [
        handleSubmit,
        isPending,
        isError,
        error,
      ]
}