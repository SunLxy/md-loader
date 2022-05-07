import MarkdownPreview from '@uiw/react-markdown-preview';
import useMdData from './../../components/useMdData';
export function HomePage() {
  const mdData = useMdData((path) => {
    return import(`markdown-react-code-preview-loader/${path}.md`);
  }, 'markdown-react-code-preview-loader');
  return <MarkdownPreview source={mdData.source} />;
}
