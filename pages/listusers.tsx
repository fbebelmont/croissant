import { GetStaticProps } from 'next'
import sqlite from 'sqlite'
import Link from 'next/link'
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
          <Link as={`${user.id}`} href="[/id]">
          <a>
            <li className="card">
              <div className="card__avatar">
                <img className="card__avatar__img" src={`${user.avatar}`} alt={`${user.name} ${user.lastname}`} />
                <div className="card__avatar__border"></div>
              </div>
              <div className="card__content">
                <div className="card__content__start">
                  <h3 className="card__content__name">{user.name} {user.lastname}</h3>
                  <div className="card__content__row">
                    <p className="card__content__paragraph">{user.birthday}</p>
                    <span className="card__content__separator">.</span>
                    <time>{user.cluster}</time>
                  </div>
                </div>
                <div className="card__content__end">
                  <span className="card__content__cluster"></span>
                </div>
              </div>
            </li>
          </a>
        </Link>
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
