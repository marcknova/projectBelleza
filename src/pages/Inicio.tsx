import IMG2 from '../assets/img1.jpg';
import Navbar from '../components/navbar/Navbar'

const Inicio = () => {
  return (
    <div>
        <Navbar />
        <div className='w-full flex justify-end bg-[#e5b3fe]'>
        <div>
          <img src={IMG2} />
        </div>
        </div>
    </div>
  )
}

export default Inicio