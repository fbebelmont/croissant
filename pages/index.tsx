import Link from 'next/link'

export default function Index() {
  return (
    <>
      <div className="home__content">
        <h1 className="home__title">Croissant</h1>
        <p  className="home__paragraph">Avec Croissant,<br/>N'oubliez plus les pâtisseries pour votre ventre!</p>
        <Link href="/introduction">
          <a className="home__button button__next">Hmmm, c'est parti !</a>
        </Link>
      </div>
    </>
  )
}
