import React from 'react';
import Input from 'components/Input/input';
import Button from 'components/Button/button';

const Subscribe = () => (
  <section className="subscribe">
    <div className="grid">
      <div className="subscribe-group">
        <div className="subscribe__input with-dashes">
          <Input placeholder="name@example.com" type="email" />
        </div>
        <Button className="subscribe__button with-dashes">Subscribe</Button>
      </div>
    </div>
  </section>
);

export default Subscribe;
