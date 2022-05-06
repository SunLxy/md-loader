import React from 'react';
import CodeSandbox, { CodeSandboxProps } from '@uiw/react-codesandbox';

export default (props: CodeSandboxProps) => {
  return (
    <div className="preview-button-ccs">
      <CodeSandbox {...props}>
        <svg
          className="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4088"
          width="18"
          height="18"
        >
          <path
            d="M85.333333 256l446.08-256L977.493333 256 981.333333 765.866667 531.413333 1024 85.333333 768V256z m89.088 105.856v202.965333l142.72 79.36v150.016l169.472 97.962667v-352.938667L174.421333 361.856z m714.197334 0l-312.192 177.365333v352.938667l169.472-97.962667V644.266667l142.72-79.402667V361.813333zM219.050667 281.642667l311.594666 176.810666 312.32-178.346666-165.162666-93.738667-145.493334 82.986667-146.346666-83.968L219.008 281.6z"
            p-id="4089"
          ></path>
        </svg>
      </CodeSandbox>
    </div>
  );
};
