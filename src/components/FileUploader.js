import { useRef, useState } from "react";
import { storage } from "../firebase/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const FileUploader = ({ onFileSelect }) => {
  const fileInput = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);

  const SaveFile = (e) => {
    e.preventDefault();

    if (!selectedFile) return;

    const storageRef = ref(storage, `files/${selectedFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, selectedFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
        });
      }
    );
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];

    if (file.size > 1024) {
      console.log("Error. file exceed the size");
    } else {
      onFileSelect(file);
    }
  };

  return (
    <div className="file-uploader">
      <input type="file" onChange={handleFileInput}></input>
    </div>
  );
};

export default FileUploader;
