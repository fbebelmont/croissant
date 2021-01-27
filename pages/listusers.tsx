import { GetStaticProps } from 'next'
import sqlite from 'sqlite'
import Link from 'next/link'
import UserListElement from './components/elements/userListElement'
import { User } from "../model/User";


export interface ListUserProps {
  users: User[]
}

// birthdays will be populated at build time by getStaticProps()
function List({users}: ListUserProps) {
  return (
    <div className="list__content">
      <h1 className="list__title">Croissant</h1>
      <p className="list__paragraph">Never miss the opportunity to eat pastries again !</p>
      <ul>
        {users.map((user) => (
          <UserListElement key={user.id} user={user}/>
        ))}
      </ul>
      <Link href="/introduction">
        <a className="list__button button__prev">Retour</a>
      </Link>
    </div>
  )
}
export const getStaticProps: GetStaticProps = async context => {
  const db = await sqlite.open('./users.sqlite');
  const users = await db.all('SELECT * FROM user');

  return {
    props: {
      users
    }
  }
}

export default List
