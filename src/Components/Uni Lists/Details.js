import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from '../Landing Page/Header';
import Grid from '@mui/material/Grid';

function Details() {
  const location = useLocation();
  const selectedUniversity = location.state.selectedUniversity;
  const [selectedCampus, setSelectedCampus] = useState("");

  if (!selectedUniversity) {
    return <div>University not found</div>;
  }

  const handleCampusChange = (event) => {
    setSelectedCampus(event.target.value);
  };

  const filteredDepartments = selectedUniversity.departments.filter((dept) =>
    dept.campus.includes(selectedCampus)
  );

  return (
    <>
    <Header></Header>
      <div className="relative">
        <div className="uni-detail-banner">
          <img
            src="./images/png/bannerone.png"
            alt="University"
            className="w-full"
          />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white">
          <h2 className="text-4xl font-bold">{selectedUniversity.name}</h2>
          {/* Display other details like location here */}
          {/* Example: <p className="text-lg">{uni.location}</p> */}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-medium text-gray-900">
            University Details
          </h2>
          {/* Additional description if needed */}
        </div>

        {/* Campus filter dropdown */}
        <div className="mt-4">
          <label htmlFor="campus" className="font-semibold mr-2">
            Filter by Campus:
          </label>
          <select
            id="campus"
            value={selectedCampus}
            onChange={handleCampusChange}
            className="border rounded-md border-gray-400 p-2"
          >
            <option value="">All Campuses</option>
            {selectedUniversity.departments
              .flatMap((dept) => dept.campus.split(","))
              .filter((campus, index, self) => self.indexOf(campus) === index)
              .map((campus) => (
                <option key={campus} value={campus}>
                  {campus}
                </option>
              ))}
          </select>
        </div>

        <Grid container justifyContent="center">
          <Grid item md={4}>
            {/* Fees */}
            <div className="bg-white overflow-hidden shadow rounded-lg mt-5">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Fees</h3>
                <ul className="mt-2 list-disc pl-5">
                  {selectedUniversity.fees.map((fee, index) => (
                    <li key={index} className="text-sm text-gray-500 text-left list-none text-center ">
                      <span className="font-semibold">
                        {" "}
                        Total Fee:{" "}
                      </span>{" "}
                      {fee.admissionFee}
                      <br></br>
                      <span className="font-semibold">
                        {" "}
                        PerCredit Hour Fee:{" "}
                      </span>{" "}
                      {fee.perCreditHourFee}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Academic Calendar
              </h3>
              <ul className="mt-2 list-disc pl-5">
                {selectedUniversity.calendar.map((cal, index) => (
                  <li key={index} className="text-sm text-gray-500 text-left">
                    <p className="font-bold">{cal.eventTitle}</p>
                    <br></br>
                    <span className="font-semibold"> Details: </span>
                    {cal.eventDetails}
                    <br></br>
                    <span className="font-semibold"> Deadline: </span>{" "}
                    {cal.eventDeadline}
                    <br></br>
                    <span className="font-semibold"> Notification: </span>{" "}
                    {cal.eventNotification}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Departments */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Departments</h3>
              {/* <ul className="mt-2 list-disc pl-5">
                {selectedUniversity.departments.map((dept, index) => (
                  <li key={index} className="text-sm text-gray-500 text-left">
                    {dept.departmentName}
                  </li>
                ))}
              </ul> */}

              <ul className="mt-2 list-disc pl-5">
                {filteredDepartments.map((dept, index) => (
                  <li key={index} className="text-sm text-gray-500 text-left">
                    {dept.departmentName}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Documents */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Documents</h3>
              <ul className="mt-2 list-disc pl-5">
                {selectedUniversity.document.map((doc, index) => (
                  <li key={index} className="text-sm text-gray-500 text-left">
                    {doc.documentRequirement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
