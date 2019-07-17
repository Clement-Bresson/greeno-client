import React from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import ErrorMessage from './ErrorMessage';

export const GET_USERS = gql`
  query getUsers {
    users {
      _id
      email
      name
      age
    }
  }
`;

export default function UsersList() {
  return (
    <Query query={GET_USERS}>
      {({ loading, error, data: { users } }) => {
        if (error) return <ErrorMessage message="Error loading posts." />;
        if (loading) return <div>Loading</div>;

        return (
          <section>
            <ul>
              {users.map(user => (
                <li key={user.id}>
                  <div>
                    <span>{user.email}</span>
                  </div>
                </li>
              ))}
            </ul>
            <style jsx>{`
              section {
                padding-bottom: 20px;
              }
              li {
                display: block;
                margin-bottom: 10px;
              }
              div {
                align-items: center;
                display: flex;
              }
              a {
                font-size: 14px;
                margin-right: 10px;
                text-decoration: none;
                padding-bottom: 0;
                border: 0;
              }
              span {
                font-size: 14px;
                margin-right: 5px;
              }
              ul {
                margin: 0;
                padding: 0;
              }
              button:before {
                align-self: center;
                border-style: solid;
                border-width: 6px 4px 0 4px;
                border-color: #ffffff transparent transparent transparent;
                content: '';
                height: 0;
                margin-right: 5px;
                width: 0;
              }
            `}</style>
          </section>
        );
      }}
    </Query>
  );
}
