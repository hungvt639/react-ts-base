declare module "@ckeditor/ckeditor5-react" {
    import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
    import Event from "@ckeditor/ckeditor5-utils/src/eventinfo";
    import { EditorConfig } from "@ckeditor/ckeditor5-core/src/editor/editorconfig";
    // import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
    import * as React from "react";
    // const ClassicEditor: any;

    const CKEditor: React.FunctionComponent<{
        disabled?: boolean;
        editor: typeof ClassicEditor;
        data?: string;
        id?: string;
        config?: EditorConfig;
        onReady?: (editor: ClassicEditor) => void;
        onChange?: (event: Event, editor: ClassicEditor) => void;
        onBlur?: (event: Event, editor: ClassicEditor) => void;
        onFocus?: (event: Event, editor: ClassicEditor) => void;
        onError?: (event: Event, editor: ClassicEditor) => void;
    }>;
    export { CKEditor, ClassicEditor };
}
declare module "@ckeditor/ckeditor5-build-classic" {
    const ClassicEditorBuild: any;
    export = ClassicEditorBuild;
}
// declare module "@ckeditor/ckeditor5-easy-image/src/easyimage" {
//     const ClassicEditor: any;
//     export = ClassicEditor;
// }
// declare module "@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter" {
//     const SimpleUploadAdapter: any;
//     export = SimpleUploadAdapter;
// }
// declare module "@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter" {
//     const Base64UploadAdapter: any;
//     export = Base64UploadAdapter;
// }
