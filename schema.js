import {makeExecutableSchema,addMockFunctionsToSchema} from 'graphql-tools'
import {resolvers} from './resolvers'
import {gql} from 'apollo-server-express'

const typeDefs = gql`type Author{
    id : String,
    age : Int,
    name : String,
    books : [String]
    }
    type Query{
        authors : [Author],
        author(id:String) : Author
    }
    type Mutation{
        addAuthor(age : Int,name: String,books: [String]) : Author
    }
`

const schema = makeExecutableSchema({typeDefs,resolvers})
// addMockFunctionsToSchema({schema})

export default schema