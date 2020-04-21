import { useEffect } from 'react';

const Paragraph = ({ children }) => {
  useEffect(() => {
    const figure = document.querySelector('.p > figure');

    if (figure) {
      figure.parentNode.classList.add('image-wrapper');
    }
  }, []);

  return (
    <p className="p">
      {children}
    </p>
  );
}
export default Paragraph;
