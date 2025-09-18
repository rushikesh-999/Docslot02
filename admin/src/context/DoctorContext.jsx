import { use, useState } from "react";
import { createContext } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

export const DoctorContext = createContext();

const DoctorContextProvider = ({ children }) => {
   
  const backendUrl = import.meta.env.VITE_BACKEND_URL 

  const [dToken, setDToken]= useState(localStorage.getItem('dToken') ? localStorage.getItem('dToken') : '')
  const [appointments, setAppointments] = useState([])
  const [profileData, setProfileData]= useState(false)

  const getAppointments = async ()=>{
    try {
      
          const {data} = await axios.get(backendUrl + '/doctor/appointments', { headers: { dtoken: dToken } }
 )
          if (data.success) {
            setAppointments(data.appointments)
            console.log(data.appointments);
          }else{
            toast.error(data.message)
          }
    } catch (error) {
       console.log(error)
       toast.error(error.message)
    }
  }

  const completeAppointment= async (appointmentId)=>{
     try {
      
      const {data}= await axios.post(backendUrl + '/doctor/complete-appointment',{appointmentId}, { headers: { dtoken: dToken } }
)
      if (data.success) {
            toast.success(data.message)
            getAppointments()
          }else{
            toast.error(data.message)
          }
     } catch (error) {
      console.log(error)
       toast.error(error.message)
     }
  }


   const cancelAppointment= async (appointmentId)=>{
     try {
      
      const {data}= await axios.post(backendUrl + '/doctor/cancel-appointment',{appointmentId}, { headers: { dtoken: dToken } }
)
      if (data.success) {
            toast.success(data.message)
            getAppointments()
          }else{
            toast.error(data.message)
          }
     } catch (error) {
      console.log(error)
       toast.error(error.message)
     }
  }

  const getProfileData = async () => {
  try {
    const { data } = await axios.get(backendUrl + '/doctor/profile', {
      headers: { dtoken: dToken }
    });

    if (data.success) {
      setProfileData(data.profileData);
      console.log(data.profileData);
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};

  const value = {
    dToken,setDToken,backendUrl,appointments,setAppointments,getAppointments,
    completeAppointment, cancelAppointment, profileData,getProfileData, setProfileData,
  };

  return (
    <DoctorContext.Provider value={value}>
      {children}
    </DoctorContext.Provider>
  );
};

export default DoctorContextProvider; // ✅ default export
