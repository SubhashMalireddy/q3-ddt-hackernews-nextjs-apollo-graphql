import classNames from 'classnames';
import React, { useState } from 'react';
import styles from '../styles/CreateLink.module.css'
import { useMutation, gql, ApolloError } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
    const router = useRouter()

    const [createLink] = useMutation(CREATE_LINK_MUTATION, {
        variables: {
            description: formState.description,
            url: formState.url
        },
        onCompleted: (data: any) => {
            alert(`Link with description: ${data.post.description}is successfully created along with its Unique id: ${data.post.id}`)
            formState.description = ''
            formState.url = ''
            router.push('/')
        },
        onError: (error: ApolloError) => {
            alert(`Following errors occoured \n ${error}.`)
        }
    });

    return (
        <div className={'hundredVH'}>
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    await createLink()
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
                {/* <Link href={'/'}><a className="link">Back to Home</a></Link> */}
            </form>
        </div>
    );
};

export default CreateLink;