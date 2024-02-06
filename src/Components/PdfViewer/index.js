import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";


import "./styles.scss";
import BrouchurePopup from "../BoruchurePopup";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


const PdfViewer = ({ pdfUrl }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [btnDisabled, setButtonDisabled] = useState();

    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
      setShowModal(false);
    };
  
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

    const goBack = () => {
      setPageNumber((prevPage) => Math.max(prevPage - 2, 1))
      if(pageNumber <= 1){
        setButtonDisabled(true)
      }
    }

    const goForwd = () => {
      setPageNumber((prevPage) => Math.min(prevPage + 2, 5));
      if(pageNumber + 1 >= numPages){
      setButtonDisabled(true);
     
      }
       if(pageNumber === 5){
        setShowModal(true)
       }
    }
 
  return (
    <section className="pdf_viewer_sec">
      <div className="container">
        <div className="row">
          <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
            {/* @@@@@ Show all PDF start */}
            {/* {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} renderAnnotationLayer={false} renderTextLayer={false} />
            ))} */}
            {/* @@@@@ Show all PDF start */}
            <p className="pdf_page_no">
              Page {pageNumber} of {numPages}
            </p>
            <div className="d-flex pdf_pages" >
              <Page
                pageNumber={pageNumber}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
              {pageNumber + 1 <= numPages && (
                <Page
                  pageNumber={pageNumber + 1}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
              )}
            </div>
             
            <div className="pdf_prev_btn" onClick={goBack} disabled={btnDisabled}>
            <IoIosArrowBack />
            </div>
            <div className="pdf_next_btn" onClick={goForwd} disabled={btnDisabled}>
              <IoIosArrowForward  />
            </div>
           
          </Document>
        </div>
      </div>
      <BrouchurePopup show={showModal} onHide={handleCloseModal} />
    </section>
  );
};

export default PdfViewer;
