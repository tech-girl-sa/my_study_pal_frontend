import { useNavigate, useParams } from "react-router-dom";
import { createNewRegistration, deleteDocumentApi, getCourse, getCourses,
   getCourseTags, getDocument, getDocumentFiltersChoices, 
   getDocuments, getMessages, getSection, getSections, 
   getSubject, getSubjectChoices, getSubjects, getSubjectTags, 
   sendLoginRequest, setCourse, setSection, setSubject, setUserInfo, setUserMessage } from "./http";
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

export function useGetCourses(filters=[]){
  const {data, isLoading, error} = useQuery({
    queryKey: ["courses",filters],
    queryFn: () => getCourses(filters),
    refetchOnMount: "always",
    staleTime: 0,
  })

    return {
      data,
      isLoading,
      error
    }
}

export function useGetSubjects(filters=[]){
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

export function useGetDocuments(filters){
  const {data, isLoading, error} = useQuery({
    queryKey: ["documents",filters],
    queryFn: () => getDocuments(filters),
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
    queryKey: ["tags", "subjects"],
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

export function useSetSubject(url, method="POST"){
  const {subjectId} =  useParams();
  const navigate = useNavigate();
  const {mutate, isPending, isError, error} = useMutation({
    mutationFn: (subjectData)=> setSubject(subjectData, method, subjectId)
  })

  function handleSubmit(values, { setSubmitting, setErrors, setStatus }){
      //transform tags to list
      const transformedValues = {
        ...values,
        tags: values.tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
      };

      mutate(transformedValues, {
        onSuccess: (data) => {
          setSubmitting(false);
          navigate(url+`/${data.id}/`)
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
    return {
      handleSubmit,
      isPending,
      isError,
      error,
    }
}

export function useSetCourse(url, method="POST"){
  const {courseId} =  useParams();
  const navigate = useNavigate();
  const {mutate, isPending, isError, error} = useMutation({
    mutationFn: (courseData)=> setCourse(courseData, method, courseId)
  })

  function handleSubmit(values, { setSubmitting, setErrors, setStatus }){
      //transform tags to list
      const transformedValues = {
        ...values,
        tags: values.tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
      };

      mutate(transformedValues, {
        onSuccess: (data) => {
          setSubmitting(false);
          navigate(url+`/${data.id}/${data.first_section_id}/`)
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
    return {
      handleSubmit,
      isPending,
      isError,
      error,
    }
}

export function useGetSubject(){
  const {subjectId} = useParams();
  const {data, isLoading, error} = useQuery({
    queryKey:  ["subject", subjectId],
    queryFn: () => getSubject(subjectId),
    refetchOnMount: "always", 

  })

    return {
      data,
      isLoading,
      error
    }
}

export function useGetCoursesTags(subjectId){
  let key= ["tags", "courses"]
  if (subjectId){
    key=[...key, subjectId]
  }
  const {data, isLoading, error} = useQuery({
    queryKey: key,
    queryFn: () => getCourseTags(subjectId),
    refetchOnMount: "always",
    staleTime: 0,
  })

    return {
      data,
      isLoading,
      error
    }
}


export function useGetSubjectChoices(){
  const {data, isLoading, error} = useQuery({
    queryKey: "subject_choices",
    queryFn: () => getSubjectChoices(),
    refetchOnMount: "always",
    staleTime: 0,
  })

    return {
      data,
      isLoading,
      error
    }
}


export function useGetDocumentFiltersChoices(){
  const {data, isLoading, error} = useQuery({
    queryKey: "documentFilters",
    queryFn: () => getDocumentFiltersChoices(),
    refetchOnMount: "always",
    staleTime: 0,
  })

    return {
      data,
      isLoading,
      error
    }
}


export function useSetSection(url, method="POST"){
  const {sectionId, courseId} =  useParams();
  const navigate = useNavigate();
  const {mutate, isPending, isError, error} = useMutation({
    mutationFn: (sectionData)=> {
      if (method==="POST"){sectionData.course = courseId}
      return setSection(sectionData, method, sectionId)
    }
  })

  function handleSubmit(values, { setSubmitting, setErrors, setStatus }){
 
      mutate(values, {
        onSuccess: (data) => {
          setSubmitting(false);
          console.log(data)
          navigate(url+`/${courseId}/${data.id}/`)
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
    return {
      handleSubmit,
      isPending,
      isError,
      error,
    }
}


export function useDeleteDocument(url, id, closeModal) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: () => deleteDocumentApi(id), // your actual API call
    onSuccess: () => {
      queryClient.invalidateQueries(["documents"]);
      closeModal();
      navigate(url);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return {
    mutate,
    isPending,
    isError,
    error,
  };
}
