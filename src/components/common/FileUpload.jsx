import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import classes from "./FileUpload.module.css";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadDocument } from "../../utils/http";
import {  NavLink, useNavigate, useSearchParams } from "react-router-dom";

export default function FileUpload() {
    const [searchParams] = useSearchParams();
    const [navigationUrl,setNavigationUrl] = useState("")
    const courseId = searchParams.get("courseId");
    const {mutate, isPending, isError, error} = useMutation({
        mutationFn: (file)=>uploadDocument(file, courseId),
      })
    const { 
      getRootProps, 
      getInputProps, 
      isDragActive, 
      acceptedFiles, 
      fileRejections 
    } = useDropzone({
      accept: { "application/pdf": [] },
      multiple: false,
      onDrop: (files) => {
         mutate(files[0], {
              onSuccess: (data) => {
                console.log(data.extra_data.course_id, data.extra_data.first_section_id, data)
                setNavigationUrl(`/dashboard/courses/${data.extra_data.course_id}/${data.extra_data.first_section_id}/`);
              },
              onError: async (err) => {
                console.log(err)
              },
            });
      }
    });
  
    return (
      <>
      <div
        {...getRootProps({
          className: `${classes.uploadWidget} ${
            isDragActive ? classes.uploadWidgetActive : ""
          }`,
        })}
      >
        <FaCloudUploadAlt className={classes.cloudIcon} />
  
        {isDragActive ? (
          <p>Drop the file here…</p>
        ) : acceptedFiles.length > 0 && isPending? (
          <p>Processing file ...: {acceptedFiles[0].name}</p>
        ) : acceptedFiles.length > 0 && ! isPending? (
          <p>✅ Uploaded: {acceptedFiles[0].name} </p>
        ): fileRejections.length > 0 ? (
          <p className={classes.rejected}>❌ Only PDF files are allowed</p>
        ) : (
          <p>Drag and drop a PDF here, or click to upload</p>
        )}
  
        <input {...getInputProps()} id="document-input" hidden />
      </div>
      {navigationUrl && <p className={classes.dropdownMessage}>to see the course please navigate <NavLink to={navigationUrl}>here</NavLink></p>}
      </>
    );
  }