import { useNavigate, useParams } from "react-router-dom";
import { createNewRegistration, getCourse, getCourses, getData, getDocument, getDocuments, getMessages, getSection, getSections, getSubjects, getSubjectTags, sendLoginRequest, setUserInfo, setUserMessage } from "./http";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { setAuthToken } from "./authentication";


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

export function usegetUserMessages(){
  const {sectionId} = useParams();
  const {data, isLoading, error} = useQuery({
    queryKey: ["messages", sectionId],
    queryFn: () => getMessages(sectionId),
    enabled: !!sectionId,
    keepPreviousData: true,
  })

    return {
      data,
      isLoading,
      error
    }
}

export function useSetUserMessage(){
  const {sectionId} = useParams();
  const queryClient = useQueryClient();
  const {mutate, isPending, isError, error} = useMutation({
    mutationFn: (data) => setUserMessage(data, sectionId),
          // 1. Optimistic update
    onMutate: async (newMessage) => {
            await queryClient.cancelQueries(["messages", sectionId]);
      
            const previousMessages = queryClient.getQueryData(["messages", sectionId]);
      

            const optimisticMessage = {
              id: Date.now(),             
              sender: "user",             
              content: newMessage.message 
            };
      
            queryClient.setQueryData(["messages", sectionId], (old = []) => [
              ...old,
              optimisticMessage,
            ]);
      
            return { previousMessages };
      },
      
         
      onError: (err, newMessage, context) => {
            if (context?.previousMessages) {
              queryClient.setQueryData(["messages", sectionId], context.previousMessages);
            }
      },
      
       
      onSettled: () => {
              queryClient.invalidateQueries(["messages", sectionId]);
      },
  })

  function handleSubmit(values, { setSubmitting, setErrors, setStatus, resetForm }){
      mutate(values, {
        onSuccess: (data) => {
          setSubmitting(false);
          resetForm();
        },
        onError: (err) => {
          if (err?.code === 400 && err?.info) {
            const fieldErrors = Object.fromEntries(
              Object.entries(err.info).map(([key, value]) => [key, value[0]])
            );
            setErrors(fieldErrors);
          } else {
            setStatus(err.message);
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

export function useGetCourse(){
  const {courseId} = useParams();
  const {data, isLoading, error} = useQuery({
    queryKey:  ["course", courseId],
    queryFn: () => getCourse(courseId),
    refetchOnMount: "always", 

  })

    return {
      data,
      isLoading,
      error
    }
}
export function useGetSections(){
  const {courseId} = useParams();
  const {data, isLoading, error} = useQuery({
    queryKey: ["sections", courseId],
    queryFn: () => getSections(courseId),
  })

    return {
      data,
      isLoading,
      error
    }
}

export function useGetSection(){
  const {sectionId} = useParams();
  const {data, isLoading, error} = useQuery({
    queryKey: ["section", sectionId],
    queryFn: () => getSection(sectionId),
  })

    return {
      data,
      isLoading,
      error
    }
}

export function useGetCourses(){
  const {data, isLoading, error} = useQuery({
    queryKey: "courses",
    queryFn: () => getCourses(),
    refetchOnMount: "always",
    staleTime: 0,
  })

    return {
      data,
      isLoading,
      error
    }
}

export function useGetSubjects(filters){
  const {data, isLoading, error} = useQuery({
    queryKey: ["subjects",filters],
    queryFn: () => getSubjects(filters),
    refetchOnMount: "always",
    staleTime: 0,
  })

    return {
      data,
      isLoading,
      error
    }
}

export function useGetDocuments(){
  const {data, isLoading, error} = useQuery({
    queryKey: "documents",
    queryFn: () => getDocuments(),
    refetchOnMount: "always",
    staleTime: 0,
  })

    return {
      data,
      isLoading,
      error
    }
}

export function useGetDocument(documetId){
  const {data, isLoading, error} = useQuery({
    queryKey: ["document", documetId],
    queryFn: () => getDocument(documetId),
    enabled: !!documetId,
  })

    return {
      data,
      isLoading,
      error
    }
}

export function useGetSubjectTags(){
  const {data, isLoading, error} = useQuery({
    queryKey: "tags",
    queryFn: () => getSubjectTags(),
    refetchOnMount: "always",
    staleTime: 0,
  })

    return {
      data,
      isLoading,
      error
    }
}