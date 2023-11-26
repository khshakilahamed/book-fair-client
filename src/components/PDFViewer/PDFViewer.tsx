import { Worker, Viewer } from "@react-pdf-viewer/core";

const PDFViewer = () => {
  return (
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          fileUrl={
            "https://drive.google.com/file/d/1n3K_OCUPKI_m6EEOkrdTDJV9IPUoV1XW/view?usp=sharing"
          }
        />
      </Worker>
    </div>
  );
};

export default PDFViewer;
