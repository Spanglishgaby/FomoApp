import Header from './Header'

const Home = ({user, updateUser}) => {
  return (
    <>
        <Header user={user} updateUser={updateUser} />
    </>
  )
}

export default Home