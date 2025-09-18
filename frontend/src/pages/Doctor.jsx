import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctor = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(
        doctors.filter(
          (doc) =>
            doc.speciality.toLowerCase().trim() ===
            speciality.toLowerCase().trim()
        )
      );
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="p-6">
      {/* Horizontal category filter */}
      <div className="flex flex-wrap justify-center gap-4">
        <p className="text-gray-600 mb-4 font-semibold w-full text-center">
          Browse by Specialty
        </p>

        {/* ✅ Filter toggle button — moved outside hidden div */}
        <button
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-blue-400 text-white' : ''
            }`}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filters
        </button>

        {/* ✅ Filter options */}
        <div
          className={`flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-4 ${showFilter ? 'flex' : 'hidden sm:flex'
            }`}
        >
          <p
            onClick={() =>
              speciality === 'All' ? navigate('/doctors') : navigate('/doctors/')
            }
            className={`w-[95vw] sm:w-auto pl-20 py-1.5 pr-24 border border-gray-300 rounded hover:text-blue-500 transition-all cursor-pointer ${speciality === 'All' ? 'bg-indigo-100 text-black' : ''
              }`}
          >
            All
          </p>
          <p
            onClick={() =>
              speciality === 'General physician'
                ? navigate('/doctors')
                : navigate('/doctors/General physician')
            }
            className={`w-[95vw] sm:w-auto pl-20 py-1.5 pr-16 border border-gray-300 rounded hover:text-blue-500 transition-all cursor-pointer ${speciality === 'General physician'
                ? 'bg-indigo-100 text-black'
                : ''
              }`}
          >
            General physician
          </p>
          <p
            onClick={() =>
              speciality === 'Gynecologist'
                ? navigate('/doctors')
                : navigate('/doctors/Gynecologist')
            }
            className={`w-[95vw] sm:w-auto pl-20 py-1.5 pr-16 border border-gray-300 rounded hover:text-blue-500 transition-all cursor-pointer ${speciality === 'Gynecologist' ? 'bg-indigo-100 text-black' : ''
              }`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              speciality === 'Dermatologist'
                ? navigate('/doctors')
                : navigate('/doctors/Dermatologist')
            }
            className={`w-[95vw] sm:w-auto pl-20 py-1.5 pr-16 border border-gray-300 rounded hover:text-blue-500 transition-all cursor-pointer ${speciality === 'Dermatologist' ? 'bg-indigo-100 text-black' : ''
              }`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === 'pediatricians'
                ? navigate('/doctors')
                : navigate('/doctors/pediatricians')
            }
            className={`w-[95vw] sm:w-auto pl-20 py-1.5 pr-16 border border-gray-300 rounded hover:text-blue-500 transition-all cursor-pointer ${speciality === 'pediatricians' ? 'bg-indigo-100 text-black' : ''
              }`}
          >
            pediatricians
          </p>
          <p
            onClick={() =>
              speciality === 'neurologist'
                ? navigate('/doctors')
                : navigate('/doctors/neurologist')
            }
            className={`w-[95vw] sm:w-auto pl-20 py-1.5 pr-24 border border-gray-300 rounded hover:text-blue-500 transition-all cursor-pointer ${speciality === 'neurologist' ? 'bg-indigo-100 text-black' : ''
              }`}
          >
            neurologist
          </p>
          <p
            onClick={() =>
              speciality === 'Gastroenterologist'
                ? navigate('/doctors')
                : navigate('/doctors/Gastroenterologist')
            }
            className={`w-[95vw] sm:w-auto pl-20 py-1.5 pr-16 border border-gray-300 rounded hover:text-blue-500 transition-all cursor-pointer ${speciality === 'Gastroenterologist'
                ? 'bg-indigo-100 text-black'
                : ''
              }`}
          >
            Gastroenterologist
          </p>
        </div>
      </div>

      {/* Doctor Cards */}
      <div className="flex-1 p-6 grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6">
        {filterDoc.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-1 transition-all duration-300"
          >
            <img className="bg-blue-50 mb-4 w-full" src={item.image} alt="" />
            <div className="p-4">
              <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'text-gray-500'} `}>
                <p className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-gray-500'}  rounded-full`}></p><p>{item.available ? 'Available' : 'Not Available'}</p>
              </div>
              <p className="text-gray-800 text-lg font-medium">{item.name}</p>
              <p className="text-gray-700 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctor;
