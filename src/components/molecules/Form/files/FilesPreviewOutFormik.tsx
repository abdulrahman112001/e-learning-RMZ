/////////// IMPORTS
///

import { useEffect, useState } from 'react';

import { CLightbox } from './CLightbox';
import { PdfViewer } from './PdfViewer';
import { t } from 'i18next';
import { CFile_TP, CImageFile_TP } from '../../../../types';
import { ViewSvg } from '../../../atoms/icons/ViewSvg';
import { Modal } from '../../Modal';

///
/////////// Types
///
type FilesPreviewOutFormikProps_TP = {
  images?: CImageFile_TP[];
  pdfs?: CFile_TP[];
  preview?: boolean;
};
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const FilesPreviewOutFormik = ({
  images = [],
  pdfs = [],
  preview,
}: FilesPreviewOutFormikProps_TP) => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///

  ///
  /////////// STATES
  ///
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [manyPdfsOpen, setManyPdfsOpen] = useState(false);
  const [activePdf, setActivePdf] = useState<CFile_TP | null>();
  ///
  /////////// SIDE EFFECTS
  ///
  // change lightbox open state to false if images.length === 0
  useEffect(() => {
    if (images.length === 0) {
      setLightboxOpen(false);
    }
  }, [images.length]);
  // change pdfs modal open state to false if pdfs.length === 0
  useEffect(() => {
    if (pdfs.length === 0) {
      setManyPdfsOpen(false);
    }
  }, [pdfs.length]);
  // set first active pdf file
  useEffect(() => {
    setActivePdf(pdfs[0]);
  }, [JSON.stringify(pdfs)]);

  ///
  /////////// FUNCTIONS | EVENTS | IF CASES
  ///

  ///
  return (
    <>
      <div
        className={`flex flex-${preview ? 'row' : 'col'} gap-${
          preview ? '6' : '1'
        }`}
      >
        {/* images*/}
        <div className='flex items-center justify-center gap-2 m-3'>
          {!!images.length && (
            <>
              <div className='flex flex-col justify-center gap-1'>
                <span className='text-[8px] text-gray-700 text-center dark:text-white'>
                  {t("Image")}
                </span>
                <div className='relative p-1 rounded-md bg-lightGray '>
                  <div
                    onClick={() => setLightboxOpen(true)}
                    className='flex items-center justify-center p-2 cursor-pointer '
                  >
                    <span className=' absolute -top-1 -right-3 bg-mainBlue px-2 py-1 text-[7px] rounded-full text-white'>
                      {images.length}
                    </span>
                    <ViewSvg stroke='#292D32' />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        {/* pdfs*/}
        <div className='flex items-center justify-center gap-2 m-3'>
          {!!pdfs.length && (
            <>
              <div className='flex flex-col justify-center gap-1'>
                <span className='text-[8px] text-gray-700 text-center'>
                  الملفات
                </span>
                <div className='relative p-1 rounded-md bg-lightGray'>
                  <div
                    onClick={() => setManyPdfsOpen(true)}
                    className='flex items-center justify-center p-2 cursor-pointer '
                  >
                    <span className=' absolute -top-1 -right-3 bg-mainBlue px-2 py-1 text-[7px] rounded-full text-white'>
                      {pdfs.length}
                    </span>
                    {/* <PDFSvgIcon stroke='#292D32' /> */}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* preview */}

      {/* images*/}
      {!!images.length && lightboxOpen && (
        <CLightbox
          preview={preview}
          open={lightboxOpen}
          closeHandler={() => setLightboxOpen(false)}
          images={images}
        />
      )}
      {/* pdfs*/}
      {!!pdfs.length && manyPdfsOpen && (
        <Modal isOpen={manyPdfsOpen} onClose={setManyPdfsOpen}>
          <div className='grid w-full grid-cols-5 gap-2 mt-8'>
            <div className='col-span-4 scrollbar'>
              {activePdf && <PdfViewer preview file={activePdf} />}
              {!!!activePdf && (
                <span className='flex items-center justify-center w-full h-full text-center text-mainGreen'>
                  إختر ملف ليتم عرضه
                </span>
              )}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
