"use client"

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import type { Editor, EditorConfig } from '@ckeditor/ckeditor5-core';

export function CustomCkEditor(props: {data: string, onChange: (content: string)=>void}) {
  let editor;
  const editorConfiguration:EditorConfig = {
    toolbar: [
      'heading', //类型
      'undo', //撤销
      'redo'//重做
    ],
    heading:{
      options: [
        { model: 'paragraph', title: 'T Text', class: 'ck-heading_paragraph' },
        { model: 'heading1', view: 'h2', title: 'Heading 1', class: 'ck-heading_heading1' },
        { model: 'heading2', view: 'h3', title: 'Heading 2', class: 'ck-heading_heading2' },
        { model: 'heading3', view: 'h4', title: 'Heading 3', class: 'ck-heading_heading3' }
      ]
    }
  };

  return (
    <CKEditor
        config={ editorConfiguration }
        editor={ ClassicEditor }
        data={ props.data }
        onReady={ editor => {
            // You can store the "editor" and use when it is needed.
            console.log( 'Editor is ready to use!', editor );
        } }
        onChange={ ( event, editor ) => {
            const data = editor.getData();
            props.onChange(data)
            console.log( { event, editor, data } );
        } }
        onBlur={ ( event, editor ) => {
            console.log( 'Blur.', editor );
        } }
        onFocus={ ( event, editor ) => {
            console.log( 'Focus.', editor );
        } }
      />
  )
}
