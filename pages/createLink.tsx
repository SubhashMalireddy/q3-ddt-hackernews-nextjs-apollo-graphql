import classNames from 'classnames';
import React, { useState } from 'react';
import styles from '../styles/CreateLink.module.css'
import { useMutation, gql } from '@apollo/client';
import Link from 'next/link';

const CREATE_LINK_MUTATION = gql`
  mutation PostMutation(
    $description: String!
    $url: String!
  ) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;
const CreateLink = () => {
    const [formState, setFormState] = useState({
        description: '',
        url: ''
    });

    const [createLink] = useMutation(CREATE_LINK_MUTATION, {
        variables: {
            description: formState.description,
            url: formState.url
        }
    });

    return (
        <div className={'hundredVH'}>
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    try {
                        const { data, errors } = await createLink()
                        if (!errors) {
                            alert(`Link with description: ${data.post.desription}is successfully created along with its Unique id: ${data.post.id}`)
                            formState.description = ''
                            formState.url = ''
                        } else {
                            alert(`Following errors occoured ${errors}`)
                        }
                    } catch (e) {
                        alert('Something went wrong! Please try again.')
                    }
                }}
                className={styles.centerForm}
            >
                <div className="flex flex-column mt3">
                    <input
                        className="mb2"
                        value={formState.description}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                description: e.target.value
                            })
                        }
                        type="text"
                        placeholder="A description for the link"
                    />
                    <input
                        className="mb2"
                        value={formState.url}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                url: e.target.value
                            })
                        }
                        type="text"
                        placeholder="The URL for the link"
                    />
                </div>
                <button type="submit">Submit</button>
                <Link href={'/'}><a className="link">Back to Home</a></Link>
            </form>
        </div>
    );
};

export default CreateLink;