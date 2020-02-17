import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/input';
import Button from 'components/Button/button';
import TextArea from 'components/TextArea/textarea';
import Label from 'components/Label/label';

const PostComment = ({ onSubmit, loading }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = e => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleMessageChange = e => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ name, message });
    setName('');
    setMessage('');
  };

  return (
    <form className="post-comment" onSubmit={handleSubmit}>
      <h3 className="post-comment__title">Post a comment</h3>
      <Label className="post-comment__name" label="Name" id="name">
        <Input type="text" id="name" onChange={handleNameChange} value={name} />
      </Label>
      <Label className="post-comment__message" label="Message" id="message">
        <TextArea id="message" onChange={handleMessageChange} value={message} />
      </Label>
      <Button disabled={loading} type="submit">Post</Button>
    </form>
  );
};

PostComment.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default PostComment;
