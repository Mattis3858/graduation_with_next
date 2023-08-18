import Profile from './Profile';

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Profile
          name="Jason Kou"
          birthDate={'2000/00/00'}
          age="200"
          gender="男"
          email="jasonkou@ggmail.com"
          phoneNumber={'0800000123'}
        />
      </div>
    </main>
  );
}
