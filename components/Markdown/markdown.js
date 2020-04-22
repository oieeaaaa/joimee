import { useEffect } from 'react';

export default ({ children }) => {
  useEffect(() => {
    const paragraphs = document.querySelectorAll('.markdown-content > p');
    const figures = document.querySelectorAll('.p > figure');
    if (!figures.length) return;

    // fix for more flexible image-wrapper
    figures.forEach(figure => {
      figure.parentNode.classList.add('image-wrapper')
    });

    // fix for some paragraph that had a missing p class
    paragraphs.forEach(p => {
      if (!p.classList.contains('p')) {
        p.classList.add('p');
      }
    });
  }, []);

  return <div className="markdown">{children}</div>;
}
