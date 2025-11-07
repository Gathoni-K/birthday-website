import Letter from "../components/BirthdayLetter/Letter";


const BirthdayLetter = () => {
  return (
    <div className=""
    style={{
        backgroundImage: 'url(/backgroundLetter.jpeg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',

      }}>

      {/* component with actual letter goes here */}
      <div className="pt-1">
        <Letter />
      </div>
      
    </div>
  )
}

export default BirthdayLetter