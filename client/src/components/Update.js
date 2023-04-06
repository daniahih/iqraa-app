import React from "react";
import { useDropzone } from "react-dropzone";
import { BsFillCloudUploadFill } from "react-icons/bs";

function Update() {
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    maxSize: 100000,
    onDrop: (acceptedFiles) => {
      alert(acceptedFiles[0].name);
    },
  });
  return (
    <div className="w-full text-center">
      <div
        {...getRootProps()}
        className="px-6 pt-5 border-2 border-border border-dashed bg-main "
      >
        <input {...getInputProps()} />
        <span className="mx-auto flex-colo text-star  text-3xl">
          <BsFillCloudUploadFill />
        </span>
        <p className="text-sm mt-2">Drag your image here</p>
      </div>
    </div>
  );
}

export default Update;
