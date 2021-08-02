import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

interface RichTextProps {}

export const RichText: React.FC<RichTextProps> = ({}) => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      console.log(process.env.NEXT_PUBLIC_TINY_API_KEY);
    }
  };
  return (
    <>
      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 200,
          menubar: false,
          z_index:0,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </>
  );
};

// export async function getServerSideProps() {
//   console.log(process.env.TINY_API_KEY);
//   return {
//     props: {
//       hello: "world",
//     },
//   };
// }
