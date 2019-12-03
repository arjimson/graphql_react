import React from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`


const Books = (props) => {

    const dipayBooks = () => {
        let data = props.data;
        if (data.loading) {
            return (<div>Loading...</div>)
        } else {
            return data.books.map(book => <li key={book.id}>{book.name}</li>)
        }
    }
    return (
        <ul>
            {dipayBooks()}
        </ul>
    )
}


export default graphql(getBooksQuery)(Books);