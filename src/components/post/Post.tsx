import React from 'react';
import './Post.scss';

export interface PostProps {
  title?: string
  post: React.ReactNode
}

function Post(props: PostProps) {
  const { title = 'title', post } = props;
  return (
    <div className="post">
      {title ? <h2>{title}</h2> : null}
      <div className=".bp4-running-text">
        {post}
      </div>
    </div>
  );
}

export default Post;
