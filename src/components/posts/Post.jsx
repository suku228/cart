export const Post = ({ post }) => {
  return (
    <div className="card">
      <div className="card-header">
        <b>{post.title}</b>
      </div>
      <div className="card-body">{post.body}</div>
    </div>
  );
};
