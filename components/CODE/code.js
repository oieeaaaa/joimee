import Highlight, { defaultProps } from 'prism-react-renderer';

const CODE = ({ children, className }) => {
  let language = 'javascript';

  if (className) {
    language = className.replace(/language-/, '');
  }

  return (
    <Highlight code={children} language={language} {...defaultProps}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={{...style, padding: '20px'}}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

export default CODE;
