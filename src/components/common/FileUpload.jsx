import React from "react";
import { useDropzone } from "react-dropzone";
import classes from "./FileUpload.module.css";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { uploadDocument } from "../../utils/http";

export default function FileUpload() {
    const {mutate, isPending, isError, error} = useMutation({
        mutationFn: uploadDocument,
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
                console.log(data)
              },
              onError: async (err) => {
                console.log(err)
              },
            });
      }
    });
  
    return (
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
        ) : acceptedFiles.length > 0 ? (
          <p>✅ Uploaded: {acceptedFiles[0].name}</p>
        ) : fileRejections.length > 0 ? (
          <p className={classes.rejected}>❌ Only PDF files are allowed</p>
        ) : (
          <p>Drag and drop a PDF here, or click to upload</p>
        )}
  
        <input {...getInputProps()} id="document-input" hidden />
      </div>
    );
  }