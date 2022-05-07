import React from 'react';
import { Button } from 'uiw';
import PreView from 'code-layout';
import MarkdownPreview from '@uiw/react-markdown-preview';

const language = {
  en: {
    label: '英文',
    value: '',
  },
  zh: {
    label: '中文',
    value: '-zh',
  },
};

export default function App() {
  const [lang, setLang] = React.useState('');
  const [mdData, setMdData] = React.useState({ source: '', BaseCodeData: {}, codeBlockValue: {} });
  React.useEffect(() => {
    const getMd = async () => {
      const result = await import(`@uiw/react-layout/README${lang}.md`);
      if (result.default) {
        setMdData(result.default);
      }
    };
    getMd();
  }, [lang]);
  console.log('mdData', mdData);
  return (
    <div>
      {Object.entries(language).map(([_, item]) => {
        return (
          <Button type={lang === item.value ? 'primary' : 'light'} key={_} onClick={() => setLang(`${item.value}`)}>
            {item.label}
          </Button>
        );
      })}

      <MarkdownPreview
        style={{ padding: '15px 15px' }}
        source={mdData.source}
        components={{
          /**
           * bgWhite 设置代码预览背景白色，否则为格子背景。
           * noCode 不显示代码编辑器。
           * noPreview 不显示代码预览效果。
           * noScroll 预览区域不显示滚动条。
           * codePen 显示 Codepen 按钮，要特别注意 包导入的问题，实例中的 import 主要用于 Codepen 使用。
           */
          code: ({ inline, node, ...props }) => {
            const { noPreview, noScroll, bgWhite, noCode, codePen, codeSandboxOption, codeSandbox, ...rest } =
              props as any;

            if (inline) {
              return <code {...props} />;
            }
            const config = {
              noPreview,
              noScroll,
              bgWhite,
              noCode,
              codePen,
              codeSandboxOption,
            } as any;
            if (Object.keys(config).filter((name) => config[name] !== undefined).length === 0) {
              return <code {...props} />;
            }
            const line = node.position?.start.line;
            // @ts-ignore
            const Child = mdData.BaseCodeData[line];
            if (typeof line === 'number' && typeof Child === 'function') {
              // @ts-ignore
              const copyNodes = mdData.codeBlockValue[line] || '';
              return (
                <PreView code={<code {...rest} />} copyNodes={copyNodes}>
                  <Child />
                </PreView>
              );
            }
            return <React.Fragment />;
          },
        }}
      />
    </div>
  );
}
