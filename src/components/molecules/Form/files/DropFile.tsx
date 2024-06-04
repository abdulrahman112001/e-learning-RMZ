import { useFormikContext } from "formik";
import { t } from "i18next";
import { useEffect, useState } from "react";
import Dropzone from "react-dropzone";

import { FilesPreview } from "./FilesPreview";
import { Button } from "../../../atoms/buttons/Button";
import { UploadSvg } from "../../../atoms/icons/UploadSvg";
import { CFile_TP, CImageFile_TP } from "../../../../types";
import { pdfOrImage } from "../../../../helpers";

type DropFileProps_TP = {
  name: string;
  isMulti?: boolean;
};

export const DropFile = ({ name, isMulti }: DropFileProps_TP) => {
  const { setFieldValue, values, errors } = useFormikContext<{
    [key: string]: any;
  }>();

  const [images, setImages] = useState<CImageFile_TP[]>([]);
  const [pdfs, setPdfs] = useState<CFile_TP[]>([]);

  useEffect(() => {
    const imageFiles: CImageFile_TP[] = isMulti ? values[name] : [values[name]];
    const images = imageFiles?.filter((file) => pdfOrImage(file) === "image");
    setImages(images);
    // const pdfFiles: CFile_TP[] = values[name];
    // const pdfs = pdfFiles?.filter((file) => pdfOrImage(file) === "pdf");
    // setPdfs(pdfs);
  }, [values[name]]);

  const handleUpload = (acceptedFiles: any) => {
    const files = acceptedFiles.map((file: any) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        id: crypto.randomUUID(),
      })
    );

    if (isMulti) {
      setFieldValue(name, [...values[name], ...files]);
      setImages([...images, ...files]);
    } else {
      setFieldValue(name, files[0]);
      setImages(files);
    }
  };

  const handleRemove = (id: string) => {
    const updatedImages = images?.filter((file) => file?.id !== id);
    setImages(updatedImages);

    if (isMulti) {
      const updatedValues = values[name]?.filter((file: any) => file?.id !== id);
      setFieldValue(name, updatedValues);
    } else {
      setFieldValue(name, null);
    }
  };

  return (
    <div className="grid w-full grid-cols-4 gap-8 px-1 py-3 bg-white rounded-md">
      <div className="col-span-4">
        <Dropzone
          accept={{
            "image/png": [".png"],
            "image/jpeg": [".jpeg", ".jpg"],
            "image/gif": [".gif"],
            "image/svg": [".svg"],
            "application/pdf": [".pdf"],
          }}
          onDrop={(acceptedFiles) => handleUpload(acceptedFiles)}
        >
          {({ getRootProps, getInputProps }) => (
            <div className="flex items-center justify-center gap-8">
              <div
                className={`${
                  errors[name] ? " border !border-red-500" : ""
                } flex flex-col justify-center items-center rounded-lg w-full cursor-pointer p-4 gap-2 shadows  dark:border-none dark:!shadow-none dark:!text-white bg-gray-100`}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                <UploadSvg stroke={"#A0A0A0"} />
                <p className="text-gray-500 ">
                  {t("click to upload")}
                </p>
                <Button type="button">{t("upload file")}</Button>
                {/* <FormikError name={name} /> */}
              </div>
              {( !!images?.length) && (
                <FilesPreview
                  formikFieldName={name}
                  pdfs={pdfs}
                  images={images}
                />
              )}
         
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
};
