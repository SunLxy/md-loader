import MarkdownPreview from '@uiw/react-markdown-preview';
import { getMetaId, isMeta } from 'markdown-react-code-preview-loader';
import { Loader } from 'uiw';
import PreView from '../../components/CodeLayout';
import useMdData from './../../components/useMdData';
import styles from './../index.module.less';

export function ExamplePage() {
  const { mdData, loading } = useMdData((path) => import(`./App${path}.md`));
  return (
    <Loader style={{ width: '100%' }} loading={loading} tip="loading...">
      <div>
        <MarkdownPreview
          source={mdData.source}
          disableCopy
          className={styles.markdown}
          components={{
            code: ({ inline, node, ...props }) => {
              const { 'data-meta': meta, ...rest } = props as any;
              if (inline || !isMeta(meta)) {
                return <code {...props} />;
              }
              const line = node.position?.start.line;
              const metaId = getMetaId(meta) || String(line);
              const Child = mdData.components[`${metaId}`];
              if (metaId && typeof Child === 'function') {
                const copyNodes = mdData.data[metaId].value || '';
                return (
                  <PreView code={<code {...rest} />} copyNodes={copyNodes}>
                    <Child />
                  </PreView>
                );
              }
              return <code {...rest} />;
            },
          }}
        />
      </div>
    </Loader>
  );
}
