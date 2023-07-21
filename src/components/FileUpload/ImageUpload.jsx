//import { useState } from "react";
import { useDropzone } from "react-dropzone";
import Flex from "../Common/Flex";
import cloudUpload from "../../assets/img/icons/cloud-upload.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image as Images } from "react-bootstrap";
import { getSize } from "../../helpers/utils";

const ImageUpload = ({ files, setFiles }) => {
    //const [files, setFiles] = useState([]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            "image/*": [".jpeg", ".png", ".jpg"]
        },
        onDrop: acceptedFiles => {
            setFiles(
                acceptedFiles.map(file =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file)
                    })
                )
            );
        }
    });

    const handleRemove = path => {
        setFiles(files.filter(file => file.path !== path));
    };

    return (
        <div>
            <div {...getRootProps({ className: "dropzone-area py-6" })}>
                <input {...getInputProps()} />
                <Flex justifyContent="center">
                    <img src={cloudUpload} alt="" width={25} className="me-2" />
                    <p className="fs-0 mb-0 text-700">Déposez vos images ici</p>
                </Flex>
            </div>

            <div className="mt-3">
                {files.map(file => (
                    <Flex
                        alignItems="center"
                        className="py-3 border-bottom btn-reveal-trigger"
                        key={file.path}
                    >
                        <Images
                            rounded
                            width={40}
                            height={40}
                            src={file.preview}
                            alt={file.path}
                        />
                        <Flex
                            justifyContent="between"
                            alignItems="center"
                            className="ms-3 flex-1"
                        >
                            <div>
                                <h6>{file.path}</h6>
                                <Flex
                                    className="position-relative"
                                    alignItems="center"
                                >
                                    <p className="mb-0 fs--1 text-400 line-height-1">
                                        <strong>{getSize(file.size)}</strong>
                                    </p>
                                </Flex>
                            </div>
                        </Flex>
                        <div className="py-2" placeholder="Effacer">
                            <FontAwesomeIcon
                                icon="trash-can"
                                className="fs--2 text-danger"
                                onClick={() => handleRemove(file.path)}
                            />
                        </div>
                    </Flex>
                ))}
            </div>
            <p className="text-center">
                L'utilisation d'images non libres de droits n'est pas autorisée
            </p>
        </div>
    );
};

export default ImageUpload;
