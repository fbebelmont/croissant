import Link from 'next/link';

function UserListElement({user}) {

  const {id, cluster, avatar, name, lastname, birthday } = user;

  return (
    <Link as={`${id}`} href="[/id]">
      <a>
        <li className="card">
          <div className="card__avatar">
            <img className="card__avatar__img" src={`${avatar}`} alt={`${name} ${lastname}`} />
            <div className="card__avatar__border"></div>
          </div>
          <div className="card__content">
            <div className="card__content__start">
              <h3 className="card__content__name">{name} {lastname}</h3>
              <div className="card__content__row">
                <p className="card__content__paragraph">{birthday}</p>
                <span className="card__content__separator">.</span>
                <time>{cluster}</time>
              </div>
            </div>
            <div className="card__content__end">
              <span className="card__content__cluster"></span>
            </div>
          </div>
        </li>
      </a>
    </Link>
  )
}

export default UserListElement
