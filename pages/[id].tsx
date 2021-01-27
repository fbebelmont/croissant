import { User } from "../model/User";
import sqlite from 'sqlite'
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from "next";

export type UserDetailsProps = User;

export default function UserId({name, lastname, avatar, cluster, birthday, description}: UserDetailsProps) {
  return (
    <div className="profile__content">
      <h1 className="profile__title">Croissant</h1>
      <div className="profile__view">
          <div className="profile__avatar">
            <img className="profile__avatar__img" src={`${avatar}`} alt={`${name} ${lastname}`} />
            <div className="profile__avatar__border"></div>
          </div>
          <span className="profile__name">{name} {lastname}</span>
          <span className="profile__cluster">{cluster}</span>
          <span className="profile__birthday">{birthday} ans</span>
          <p className="profile__description">"{description}"</p>
      </div>
      
      <Link href="/listusers">
        <a className="profile__button button__prev">Back</a>
      </Link>
    </div>
  )
}

export const getStaticProps: GetStaticProps<UserDetailsProps> = async ( ctx ) => {

  const id = ctx.params.id as string;
  //Open DB
  const db = await sqlite.open('./users.sqlite');
  const user = await db.get('SELECT * FROM user where id = ?', id);

  return { props: user };
};

export const getStaticPaths: GetStaticPaths<{id: string}> = async () => {

  //Open DB
  const db = await sqlite.open('./users.sqlite');
  const users = await db.all('SELECT * FROM user');

  const paths = users.map((user) => {
    return {
      params: { id: user.id.toString()}
    };
  });

  return {
    fallback: true,
    paths,
  };
};