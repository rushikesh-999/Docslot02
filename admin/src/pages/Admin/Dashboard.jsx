import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../../context/AdminContext';
import { AppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';
import icon from "../../assets/DOCTOR-ICON2.png";

const Dashboard = () => {
  const { aToken, getDashData, cancelAppointment, dashData } = useContext(AdminContext);
  const { slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getDashData();
    }
  }, [aToken]);

  return dashData && (
    <div className="flex-1 p-8 space-y-10">



      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded shadow p-6 text-center">
          <img src={icon} alt="Doctors" className="mx-auto w-12 h-12 mb-2" />
          <p className="text-2xl font-bold text-gray-800">{dashData.doctors}</p>
          <p className="text-gray-500">Doctors</p>
        </div>

        <div className="bg-white rounded shadow p-6 text-center">
          <img src={assets.appointments_icon} alt="Appointments" className="mx-auto w-12 h-12 mb-2" />
          <p className="text-2xl font-bold text-gray-800">{dashData.appointments}</p>
          <p className="text-gray-500">Appointments</p>
        </div>

        <div className="bg-white rounded shadow p-6 text-center">
          <img src={assets.patients_icon} alt="Patients" className="mx-auto w-12 h-12 mb-2" />
          <p className="text-2xl font-bold text-gray-800">{dashData.patients}</p>
          <p className="text-gray-500">Patients</p>
        </div>
      </div>

      {/* Latest Appointments */}
      <div className="bg-white rounded shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Latest Appointments</h2>
        <div className="space-y-4">
          {dashData.latestAppointments.map((item, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-50 p-4 rounded hover:bg-gray-100 transition">
              <div className="flex items-center gap-4">
                <img src={item.docData.image} alt="Doctor" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-medium text-gray-800">{item.docData.name}</p>
                  <p className="text-sm text-gray-500">{slotDateFormat(item.slotDate)}</p>
                </div>
              </div>
              {
                item.cancelled
                  ? <p className='text-red-400 text-xs font-medium'>Cancelled</p>
                  : item.isCompleted
                    ? <p className='text-green-400 text-xs font-medium'>Completed</p>
                    : <img onClick={() => cancelAppointment(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="" />
              }
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
