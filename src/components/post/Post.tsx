import React from 'react';
import './Post.scss';

function Post() {
  return (
    <div className="post">
      <h2>{uniqueId('kan')}</h2>
      <div className=".bp4-running-text">
        <p>
          We build products that make people better at their most important
          work — the kind of work you read about on the front page of the
          newspaper, not just the technology section.
        </p>
        <ul>
          <li>
            Item the
            {' '}
            <code>first</code>
            .
          </li>
          <li>
            Item the
            {' '}
            <strong>second</strong>
            .
          </li>
          <li>
            Item the
            {' '}
            <a href="#core/typography.running-text">third</a>
            .
          </li>
        </ul>
        <h3>Scale, Speed, Agility</h3>
        <p>
          A successful data transformation requires the whole organization — users, the IT shop, and
          leadership — to operate in lockstep. With Foundry, the enterprise comes together to
          transform the organization and turn data into a competitive advantage.
        </p>
      </div>
    </div>
  );
}

export default Post;
