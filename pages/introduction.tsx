import Link from 'next/link'

export default function Introduction() {
  return (
    <div className="introduction__content">
      <h1 className="introduction__title">Croissant</h1>
      <p className="introduction__paragraph">Ne manquez plus jamais l'opportunité de le rappeler à vos collègues !<br/><br/>Cette application est une preuve de concept NextJS.</p>
      <Link href="/listusers">
        <a className="list__button button__next">A qui le tour ?</a>
      </Link>
      <Link href="/">
        <a className="list__button button__prev">Retour</a>
      </Link>
    </div>
  )
}