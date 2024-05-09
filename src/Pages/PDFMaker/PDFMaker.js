import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import html2pdf from "html2pdf.js";

import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer"; // Import PDF renderer components
import Breadcrums from "../../Components/Breadcrums/Breadcrums";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  text: {
    marginBottom: 10,
  },
});

const PDFGenerator = () => {
  const [editorText, setEditorText] = useState("");

  const handleChange = (content, delta, source, editor) => {
    setEditorText(content);
  };

  const generatePDF = () => {
    const htmlParser = new DOMParser();
    const parsedHtml = htmlParser.parseFromString(editorText, "text/html");

    const content = `<html>${parsedHtml.childNodes[0].innerHTML}</html>`;
    console.log({ content });
    if (content) {
      const options = {
        filename: "generated_pdf.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };

      // Generate PDF
      html2pdf().from(content).set(options).save();
    }
  };

  return (
    <>
    <Breadcrums />
    <h4 className="text-center">PDF Maker</h4>
    <div className="container d-flex align-content-center align-items-center flex-column">
      <ReactQuill
        value={editorText}
        onChange={handleChange}
        modules={{
          toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" },
            ],
            ["link", "image", "video"],
            ["clean"],
            ["align", "direction"], // Alignments and text direction
          ],
        }}
        formats={[
          "header",
          "font",
          "size",
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "list",
          "bullet",
          "indent",
          "link",
          "image",
          "video",
          "align",
          "direction",
        ]}
        placeholder="Compose an epic..."
      />
      <button className="my-3 btn btn-sm btn-primary" onClick={generatePDF}>
        Generate & Download PDF
      </button>
    </div></>
  );
};

export default PDFGenerator;
