import React, { useState } from 'react';

interface Comment {
  id: number;
  text: string;
  author: string;
  replies: Comment[];
}

const CommentComponent: React.FC<{
  comment: Comment;
  onEdit: (id: number, newText: string) => void;
  onDelete: (id: number) => void;
  onAddReply: (id: number, reply: Comment) => void;
}> = ({ comment, onEdit, onDelete, onAddReply }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.text);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleReplySubmit = () => {
    if (replyText.trim()) {
      const newReply: Comment = {
        id: Date.now(),
        text: replyText,
        author: 'Current User', // Replace with the logged-in user
        replies: [],
      };
      onAddReply(comment.id, newReply);
      setReplyText('');
      setShowReplyForm(false);
    }
  };

  const handleEditSubmit = () => {
    if (editText.trim()) {
      onEdit(comment.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <div style={{ marginLeft: '20px', marginTop: '10px', borderLeft: '1px solid #ccc', paddingLeft: '10px' }}>
      {isEditing ? (
        <div>
          <textarea
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            rows={2}
            style={{ width: '100%' }}
          />
          <button onClick={handleEditSubmit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <>
          <p>
            <strong>{comment.author}:</strong> {comment.text}
          </p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(comment.id)}>Delete</button>
          <button onClick={() => setShowReplyForm(!showReplyForm)}>Reply</button>
        </>
      )}

      {showReplyForm && (
        <div style={{ marginTop: '10px' }}>
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
            rows={2}
            style={{ width: '100%' }}
          />
          <button onClick={handleReplySubmit}>Submit</button>
        </div>
      )}

      {comment.replies.map((reply) => (
        <CommentComponent
          key={reply.id}
          comment={reply}
          onEdit={onEdit}
          onDelete={onDelete}
          onAddReply={onAddReply}
        />
      ))}
    </div>
  );
};

const CommentsSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      text: 'This is a comment',
      author: 'User1',
      replies: [],
    },
  ]);
  const [newCommentText, setNewCommentText] = useState('');

  const handleAddComment = () => {
    if (newCommentText.trim()) {
      const newComment: Comment = {
        id: Date.now(),
        text: newCommentText,
        author: 'Current User', // Replace with logged-in user
        replies: [],
      };
      setComments([...comments, newComment]);
      setNewCommentText('');
    }
  };

  const handleEdit = (id: number, newText: string) => {
    const updateComments = (comments: Comment[]): Comment[] =>
      comments.map((comment) =>
        comment.id === id
          ? { ...comment, text: newText }
          : { ...comment, replies: updateComments(comment.replies) }
      );
    setComments(updateComments(comments));
  };

  const handleDelete = (id: number) => {
    const deleteComments = (comments: Comment[]): Comment[] =>
      comments.filter((comment) => comment.id !== id).map((comment) => ({
        ...comment,
        replies: deleteComments(comment.replies),
      }));
    setComments(deleteComments(comments));
  };

  const handleAddReply = (id: number, reply: Comment) => {
    const addReplyToComments = (comments: Comment[]): Comment[] =>
      comments.map((comment) =>
        comment.id === id
          ? { ...comment, replies: [...comment.replies, reply] }
          : { ...comment, replies: addReplyToComments(comment.replies) }
      );
    setComments(addReplyToComments(comments));
  };

  return (
    <div>
      <h1>Nested Comments</h1>
      <div>
        <textarea
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          placeholder="Write a new comment..."
          rows={2}
          style={{ width: '100%' }}
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
      {comments.map((comment) => (
        <CommentComponent
          key={comment.id}
          comment={comment}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onAddReply={handleAddReply}
        />
      ))}
    </div>
  );
};

export default CommentsSection;
