import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';
import { toast } from 'react-toastify';
import axios from 'axios';



const Appointment = () => {
  const { docId } = useParams();
  const { doctors, backendUrl, token,getDoctorsData } = useContext(AppContext);
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const navigate = useNavigate()
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const getAvailableSlots = async () => {
    setDocSlots([]);

    // getting current date
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      // getting the date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // setting end time of the date with index 
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      //setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate <= endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
         
        let day = currentDate.getDate()
        let month = currentDate.getMonth()+1
        let year = currentDate.getFullYear()

        const slotDate = day + "_" + month + "_" + year
        const slotTime = formattedTime

        
      const isSlotAvailable =
        !docInfo?.slots_booked?.[slotDate] ||
        !docInfo.slots_booked[slotDate].includes(slotTime);

         if (isSlotAvailable) {
          
        // add slot to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        })
      }

        // Increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
    }

setDocSlots(prev => [...prev, timeSlots]);
   
}

  };

  const bookAppointment = async ()=>{
    if (!token) {
      toast.warn('login to book appointment')
      return navigate('/login')
    }
    try {
      const date = docSlots[slotIndex][0].datetime

      let day = date.getDate()
      let month = date.getMonth()+1
      let year = date.getFullYear()
      
      const slotDate = day + "_" + month + "_" + year

      const {data} = await axios.post(backendUrl + '/api/user/book-appointment', {docId, slotDate, slotTime}, {headers:{token}})
      if (data.success) {
        toast.success(data.message)
        getDoctorsData()
        navigate('/my-appointments')
      }else {
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }



  useEffect(() => {
    if (doctors?.length > 0) {
      const foundDoc = doctors.find(doc => doc._id === docId);
      setDocInfo(foundDoc || null);
    }
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots()
  }, [docInfo]);

  useEffect(() => {
    console.log( docSlots);  
    },[docSlots])


  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col sm:flex-row gap-8 items-start">
        {/* Doctor Image */}
        <img
          src={docInfo?.image}
          alt={docInfo?.name || 'Doctor'}
          className="w-[220px] h-auto rounded-md object-cover shadow"
        />

        {/* Doctor Details */}
        <div className="flex-1 border border-gray-300 p-2 rounded-md shadow-sm sm:mx-0">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            {docInfo?.name}
            {docInfo?.name && (
              <img src={assets.verified_icon} alt="Verified" className="w-5 h-5" />
            )}
          </h2>
          <p className="text-sm text-gray-700 mt-1">
            {docInfo?.degree} - {docInfo?.speciality}
          </p>

          <button className="mt-2 bg-blue-500 text-white px-3 py-1 text-sm rounded">
            {docInfo?.experience}
          </button>

          {/* About Section */}
          <div className="mt-6">
            <p className="font-semibold flex items-center gap-2 mb-1">
              About
              <img src={assets.info_icon} alt="Info" className="w-4 h-4" />
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {docInfo?.about}
            </p>
          </div>
          <p className='mt-2 text-sm text-gray-900'>
            Appointment fee: <span className="text-gray-900 font-light">{docInfo?.appointmentFee} Rs.200</span>
          </p>
        </div>
      </div>

      {/* Booking Slots */}
      <div className='flex sm:justify-center sm:ml-2 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking slots</p>
      </div>
      <div className='flex sm:justify-center gap-3 w-full overflow-x-scroll mt-4'>
        {Array.isArray(docSlots) && docSlots.length > 0 && docSlots.map((item, index) => (
          <div onClick={()=> setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer  ${slotIndex === index ? 'bg-blue-500 text-white' : 'border border-gray-200'}`} key={index}>
            <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
            <p>{item[0] && item[0].datetime.getDate()}</p>
          </div>
        ))}
      </div>

      <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
        {Array.isArray(docSlots) && docSlots[slotIndex] && docSlots[slotIndex].map((item, index) => (
          <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-t-none cursor-pointer hover:scale-110 transition-all duration-300 ${item.time === slotTime ? 'bg-blue-500 text-white' : 'text-gray-500 border border-gray-300'}`} key={index}>
             {item.time.toLowerCase()}
          </p>
        ))}
      </div>
      <div className="flex justify-center">
  <button onClick={bookAppointment} className='bg-blue-500 text-white text-sm font-light px-14 py-3 rounded-full my-6 hover:scale-105 transition-all duration-300'>
    Book an Appointment
  </button>
</div>

      
      {/* Listing Related Doctors */}
    <RelatedDoctors docId={docId} speciality={docInfo?.speciality} />
    </div>
    
  );
}

export default Appointment;
