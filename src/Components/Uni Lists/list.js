import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../Landing Page/Header";

function List() {
  const [universitiesData, setUniversitiesData] = useState([]);
  const [selectedName, setSelectedName] = useState("");
  const [selectedFee, setSelectedFee] = useState("");
  // const [selectedDepartment, setSelectedDepartment] = useState("");
  const [searchDepartment, setSearchDepartment] = useState("");
  // const history = useHistory();
  const [selectedUniversity, setSelectedUniversity] = useState(null); // New state to store selected university

  useEffect(() => {
    const fetchData = async () => {
      const universitiesList = [
        {
          name: "Comsats University",
          apis: [
            "https://unilinkapiv1.azurewebsites.net/api/Comsats/ComsatsCalendar",
            "https://unilinkapiv1.azurewebsites.net/api/Comsats/ComsatsDepartments",
            "https://unilinkapiv1.azurewebsites.net/api/Comsats/ComsatsFees",
            "https://unilinkapiv1.azurewebsites.net/api/Comsats/ComsatsDocuments",
          ],
        },
        {
          name: "FAST University",
          apis: [
            "https://unilinkapiv1.azurewebsites.net/api/Fast/FastCalendar",
            "https://unilinkapiv1.azurewebsites.net/api/Fast/FastDepartments",
            "https://unilinkapiv1.azurewebsites.net/api/Fast/FastFees",
            "https://unilinkapiv1.azurewebsites.net/api/Fast/FastDocuments",
          ],
        },
        {
          name: "KIET University",
          apis: [
            "https://unilinkapiv1.azurewebsites.net/api/KIET/KIETCalendar",
            "https://unilinkapiv1.azurewebsites.net/api/KIET/KIETDepartments",
            "https://unilinkapiv1.azurewebsites.net/api/KIET/KIETFees",
            "https://unilinkapiv1.azurewebsites.net/api/KIET/KIETDocuments",
          ],
        },
        {
          name: "LUMS University",
          apis: [
            "https://unilinkapiv1.azurewebsites.net/api/LUMS/LUMSCalendar",
            "https://unilinkapiv1.azurewebsites.net/api/LUMS/LUMSDepartments",
            "https://unilinkapiv1.azurewebsites.net/api/LUMS/LUMSFees",
            "https://unilinkapiv1.azurewebsites.net/api/LUMS/LUMSDocuments",
          ],
        },
      ];

      const finalArray = await Promise.all(
        universitiesList.map(async (uni) => {
          const uniData = { name: uni.name, departments: [], fees: [] };
          await Promise.all(
            uni.apis.map(async (api, index) => {
              const response = await fetch(api);
              const data = await response.json();
              // Determine the type of data fetched (departments or fees)
              if (api.includes("Departments")) {
                // Store department data
                uniData.departments = data;
              } else if (api.includes("Fees")) {
                // Store fee data
                uniData.fees = data;
              } else if (api.includes("Documents")) {
                // Store fee data
                uniData.document = data;
              } else if (api.includes("Calendar")) {
                // Store fee data
                uniData.calendar = data;
              }
            })
          );
          // Return the uniData object for this university
          return uniData;
        })
      );

      // Set the final array of universities data
      setUniversitiesData(finalArray);
    };

    fetchData();
  }, []);

  // Filtered data based on selected name and fee
  const filteredData = universitiesData.filter((uni) => {
    // Filter by name
    if (selectedName && selectedName !== uni.name) return false;

    // Filter by fee
    if (
      selectedFee &&
      !uni.fees.some((fee) => fee.admissionFee === selectedFee)
    )
      return false;

    // Filter by department
    if (
      searchDepartment &&
      !uni.departments.some((dept) =>
        dept.departmentName
          .toLowerCase()
          .includes(searchDepartment.toLowerCase())
      )
    )
      return false;

    return true;
  });
  const navigate = useNavigate();
  const handleViewUniversity = (uni) => {
    setSelectedUniversity(uni); // Set selected university

    // history.push({
    //   pathname: "/uniDetails",
    //   state: { selectedUniversity: uni },
    // });

    navigate("/uniDetails", { state: { selectedUniversity: uni } });
  };

  return (
    <>
    <Header></Header>
    <div className="w-full max-w-[1920px] mx-auto">
      <div className="p-4 border rounded-lg shadow-lg m-10">
        <div className="m-2 flex flex-col">
          {/* Dropdown for selecting name */}

          <div className="flex justify-between gap-3 pb-2">
            <div className="flex gap-2">
              <label className="font-bold flex justify-center items-center">
                University Name
              </label>
              <select
                value={selectedName}
                className="border rounded-md border-gray-400"
                onChange={(e) => setSelectedName(e.target.value)}
              >
                <option value="">All Names</option>
                {universitiesData.map((uni) => (
                  <option key={uni.name} value={uni.name}>
                    {uni.name}
                  </option>
                ))}
              </select>

              {/* Dropdown for selecting fee */}
              <label className="font-bold flex justify-center items-center">
                Fee
              </label>
              <select
                value={selectedFee}
                className="border rounded-md border-gray-400 p-3"
                onChange={(e) => setSelectedFee(e.target.value)}
              >
                <option value="">All Fees</option>
                {universitiesData
                  .flatMap((uni) => uni.fees)
                  .map((fee) => (
                    <option key={fee.admissionFee} value={fee.admissionFee}>
                      {fee.admissionFee}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              {/* Department search input */}
              <input
                type="text"
                placeholder="Search Department"
                className="border rounded-md border-gray-400 p-3"
                value={searchDepartment}
                onChange={(e) => setSearchDepartment(e.target.value)}
              />
            </div>
          </div>
          {filteredData.map((uni, index) => (
            <div
              key={index}
              className="border p-4 mb-4 rounded-lg flex flex-col shadow-lg"
            >
              <h2 className="text-[#3579F8] font-medium text-xl mb-4">
                {uni.name}
              </h2>
              {/* Display fee data */}
              <div>
                <h3>Fees:</h3>
                {uni.fees.map((fee, idx) => (
                  <div key={idx}>{fee.admissionFee}</div>
                ))}
              </div>

              <div>
                <h3>Departments:</h3>
                {uni.departments
                  .filter((dept) =>
                    dept.departmentName
                      .toLowerCase()
                      .includes(searchDepartment.toLowerCase())
                  )
                  .slice(0, 3)
                  .map((dept, idx) => (
                    <div key={idx}>{dept.departmentName}</div>
                  ))}
              </div>
              <div className="flex gap-2 justify-center items-center mt-4">
                {/* <Link to={`/uniDetails/${uni.name}`}>
                  <Button variant="contained" size="large">
                    View University
                  </Button>
                </Link> */}

                {/* <Link to={`/uniDetails/${uni.name}`}>
                  <Button variant="contained" size="large">
                    View University
                  </Button>
                </Link> */}

                <Button
                  variant="contained"
                  size="large"
                  onClick={() => handleViewUniversity(uni)}
                >
                  View University
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default List;
