import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./styles.scss";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


const PdfViewer = ({ pdfUrl }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
      setIsLoading(false);
    }
  
    const handleLoadComplete = () => {
      setIsLoading(false);
    };
  
    useEffect(() => {
      setIsLoading(true);
    }, [pageNumber]);
  return (
    <section className="pdf_viewer_sec">
      <div className="container">
        <div className="row">
          <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
            {/* @@@@@ Show all PDF start */}
            {/* {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} renderAnnotationLayer={false} renderTextLayer={false} />
            ))} */}
            {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            onLoadSuccess={handleLoadComplete}
            loading={isLoading}
          />
        ))}
            {/* @@@@@ Show all PDF start */}
            <p className="text-end">
              Page {pageNumber} of {numPages}
            </p>
            <div className="d-flex">
             {/*  <Page
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
              )} */}
            </div>
            <div className="d-flex">
            <button onClick={() => setPageNumber((prevPage) => Math.max(prevPage - 2, 1))} disabled={pageNumber <= 1}>
              Previous
            </button>
            <button onClick={() => setPageNumber((prevPage) => Math.min(prevPage + 2, numPages))} disabled={pageNumber + 1 >= numPages}>
              Next
            </button>
          </div>
          </Document>
        </div>
      </div>
    </section>
  );
};

export default PdfViewer;
