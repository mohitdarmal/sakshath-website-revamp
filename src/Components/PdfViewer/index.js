import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { MdArrowCircleRight, MdArrowCircleLeft } from "react-icons/md";

import "./styles.scss";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


const PdfViewer = ({ pdfUrl }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
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
             
            <div className="pdf_prev_btn" onClick={() => setPageNumber((prevPage) => Math.max(prevPage - 2, 1))} disabled={pageNumber <= 1}>
            <MdArrowCircleLeft />
            </div>
            <div className="pdf_next_btn" onClick={() => setPageNumber((prevPage) => Math.min(prevPage + 2, 5))} disabled={pageNumber + 1 >= numPages}>
              <MdArrowCircleRight />
            </div>
           
          </Document>
        </div>
      </div>
    </section>
  );
};

export default PdfViewer;
