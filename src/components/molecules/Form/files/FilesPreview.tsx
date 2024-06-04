/////////// IMPORTS
///

import { useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import { CLightbox } from './CLightbox';
import { PdfViewer } from './PdfViewer';
import { t } from 'i18next';
import { CFile_TP, CImageFile_TP } from '../../../../types';
import { pdfOrImage } from '../../../../helpers';
import { ViewSvg } from '../../../atoms/icons/ViewSvg';
import { SvgDelete } from '../../../atoms/icons/SvgDelete';
import { Modal } from '../../Modal';

type FilesPreviewProps_TP = {
  images: CImageFile_TP[]
  pdfs: CFile_TP[]
  formikFieldName?: string
  preview?: boolean
}

export const FilesPreview = ({
  images,
  pdfs,
  formikFieldName,
  preview,
}: FilesPreviewProps_TP) => {

  const { setFieldValue, values } = useFormikContext<{
    [key: string]: any
  }>()
 
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [manyPdfsOpen, setManyPdfsOpen] = useState(false)
  const [activePdf, setActivePdf] = useState<CFile_TP | null>()
  useEffect(() => {
    if (images.length === 0) {
      setLightboxOpen(false)
    }
  }, [images.length])
  // useEffect(() => {
  //   if (pdfs.length === 0) {
  //     setManyPdfsOpen(false)
  //   }
  // }, [pdfs.length])
  // useEffect(() => {
  //   setActivePdf(pdfs[0])
  // }, [JSON.stringify(pdfs)])

  const deleteFileHandler = (id: string) => {
    if (formikFieldName) {
      const currFilesState: CFile_TP[] = values[formikFieldName]
      setFieldValue(
        formikFieldName,
        currFilesState.filter((file) => file.id !== id)
      )
    }
  }

  // Delete all images
  const deleteAllImagesHandler = () => {
    if (formikFieldName) {
      const currFilesState: CFile_TP[] = values[formikFieldName]
      setFieldValue(
        formikFieldName,
        currFilesState.filter((file) => pdfOrImage(file) === "pdf")
      )
    }
  }

  // Delete all pdfs
  const deleteAllPdfsHandler = () => {
    if (formikFieldName) {
      const currFilesState: CFile_TP[] = values[formikFieldName]
      setFieldValue(
        formikFieldName,
        currFilesState.filter((file) => pdfOrImage(file) === "image")
      )
    }
  }
  ///
  return (
    <>
      <div
        className={`flex flex-${preview ? "row" : "col"} gap-${
          preview ? "6" : "1"
        }`}
      >
        {/* images*/}
        <div className="flex items-center justify-center gap-2 m-3">
          {!!images.length && (
            <>
              <div className='flex flex-col justify-center gap-1'>
                <span className='text-[8px] text-gray-700 text-center dark:text-white'>
                  {t("Image")}
                </span>
                <div className="relative p-1 rounded-md bg-lightGray ">
                  <div
                    onClick={() => setLightboxOpen(true)}
                    className="flex items-center justify-center p-2 cursor-pointer "
                  >
                    <span className=" absolute -top-1 -right-3 bg-mainBlue px-2 py-1 text-[7px] rounded-full text-white">
                      {images.length}
                    </span>
                    <ViewSvg stroke="#292D32" />
                  </div>
                </div>
              </div>
              {!preview && (
                <div className="flex flex-col justify-center gap-1">
                  <span
                    className="text-[8px] text-gray-700 text-center"
                  >
                    حذف الكل
                  </span>
                  <div className="p-3 rounded-md bg-lightGray ">
                    <SvgDelete
                      action={deleteAllImagesHandler}
                      stroke="#ef4444"
                    />
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        {/* pdfs*/}
        <div className="flex items-center justify-center gap-2 m-3">
          {/* {!!pdfs.length && (
            <>
              <div className="flex flex-col justify-center gap-1">
                <span className="text-[8px] text-gray-700 text-center">
                  الملفات
                </span>
                <div className="relative p-1 rounded-md bg-lightGray">
                  <div
                    onClick={() => setManyPdfsOpen(true)}
                    className="flex items-center justify-center p-2 cursor-pointer "
                  >
                    <span className=" absolute -top-1 -right-3 bg-mainBlue px-2 py-1 text-[7px] rounded-full text-white">
                      {pdfs.length}
                    </span>
                  </div>
                </div>
              </div>
              {!preview && (
                <div className="flex flex-col justify-center gap-1">
                  <span
                    className="text-[8px] text-gray-700 text-center"
                  >
                    حذف الكل
                  </span>
                  <div className="p-3 rounded-md bg-lightGray ">
                    <SvgDelete
                      action={deleteAllPdfsHandler}
                      stroke="#ef4444"
                    />
                  </div>
                </div>
              )}
            </>
          )} */}
        </div>
      </div>

      {/* preview */}

      {/* images*/}
      {!!images.length && lightboxOpen && (
        <CLightbox
          preview={preview}
          deleteFileHandler={deleteFileHandler}
          open={lightboxOpen}
          closeHandler={() => setLightboxOpen(false)}
          images={images}
        />
      )}
      {/* pdfs*/}
      {/* {!!pdfs.length && manyPdfsOpen && (
        <Modal isOpen={manyPdfsOpen} onClose={setManyPdfsOpen}>
          <div className="grid w-full grid-cols-5 gap-2 mt-8">
            <div className="col-span-1 scrollbar">
              {pdfs.map((pdf) => (
                <div key={pdf.id}>
                  <div className="grid items-center justify-center grid-flow-row-dense grid-cols-2 gap-8">
                    <div className="w-full col-span-1 ">
                      <PdfViewer
                        preview={preview}
                        deleteFileHandler={() => deleteFileHandler(pdf.id)}
                        action={() => setActivePdf(pdf)}
                        file={pdf}
                        showControls={false}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-span-4 scrollbar">
              {activePdf && <PdfViewer preview file={activePdf} />}
              {!!!activePdf && (
                <span className="flex items-center justify-center w-full h-full text-center text-mainGreen">
                  إختر ملف ليتم عرضه
                </span>
              )}
            </div>
          </div>
        </Modal>
      )} */}
    </>
  )
}
