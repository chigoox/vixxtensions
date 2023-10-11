import { Modal, Upload, message } from 'antd'
import { AiOutlinePlusSquare } from "react-icons/ai";
import { useState } from "react"
import { getStorage, ref, uploadBytesResumable, uploadString } from "firebase/storage";
import { STORAGE } from '@/Firebase';


const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

export const Uploader = () => {


    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([]);
    const [filex, setFile] = useState({})

    const onSuccess = (x) => {

    }

    const onError = (x) => {

    }

    const onProgress = (x) => {

    }


    let customRequest = ({ file, onSuccess, onError, onProgress, }) => {
        const storageRef = ref(STORAGE, 'images/' + filex.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on(
            "state_changed",
            function (snapshot) {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");

                // CONNECT ON PROGRESS
                //onProgress(progress)


            },
            function (error) {
                // Handle unsuccessful uploads

                // CONNECT ON ERROR
                // onError(error)
            },
            function () {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                uploadTask.snapshot.ref
                    .getDownloadURL()
                    .then(function (downloadURL) {
                        console.log("File available at", downloadURL);

                        // CONNECT ON SUCCESS
                        onSuccess(downloadURL)  // Pass any parameter you would like
                    });
            }
        );
    };


    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    const handleChange = ({ file, fileList }) => {
        if (file.status === 'done') {
            message.success(`${file.name} file uploaded successfully`);
        } else if (file.status === 'error') {
            message.error(`${file.name} file upload failed.`);
        }
        setFile(file)
        setFileList(fileList)
    }


    const uploadButton = (
        <div>
            <AiOutlinePlusSquare color='white' size={24} />
            <div className='mt-8 text-white'>
                Upload
            </div>
        </div>
    );




    return (
        <>
            <Upload
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                accept="image/*"
                maxCount={8}
                multiple
                customRequest={() => { customRequest(filex, onSuccess, onError, onProgress) }}
            >
                {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img
                    alt="example"
                    className='w-full p-0 object-cover'
                    src={previewImage}
                />
            </Modal>
        </>
    );
};