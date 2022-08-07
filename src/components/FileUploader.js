import { useRef } from "react"

const FileUploader = ({onFileSelect}) => {
	const fileInput = useRef(null);

	const handleFileInput = (e) => {
		const file = e.target.files[0];

		if (file.size > 1024) {
			console.log('Error. file exceed the size')
		} else {
			onFileSelect(file)
		}

	}

	return (
		<div className="file-uploader">
			<input type="file" onChange={handleFileInput}></input>
		</div>
	)
}

export default FileUploader