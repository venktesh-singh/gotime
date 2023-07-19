import React, { lazy, useState, useEffect } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import moment from "moment";
const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));

const Dashboard = () => {
  const [dataList, setDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const ITEMS_PER_PAGE = 10;
  console.log("Last Login",dataList?.data);
  useEffect(() => {
    fetch("https://gotimeapi.onrender.com/api/user/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setDataList(data);
      })
      .catch((error) => {
        console.error("Error fetching User data:", error);
      });
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://gotimeapi.onrender.com/api/user/?page=${page}&limit=${ITEMS_PER_PAGE}`
      );
      if (!response.ok) {
        throw new Error("Error: " + response.status);
      }
      const data = await response.json();
      const newDataList = data.data;
      setDataList((prevDataList) => {
        if (Array.isArray(prevDataList)) {
          return [...prevDataList, ...newDataList];
        } else {
          return newDataList;
        }
      });
      setPage((prevPage) => prevPage + 1);
      setHasMore(newDataList.length === ITEMS_PER_PAGE);
    } catch (error) {
      // Handle error
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight ||
        document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight;

      if (
        scrollHeight - scrollTop === clientHeight &&
        hasMore &&
        !isLoading
      ) {
        fetchData();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasMore, isLoading]);

  return (
    <>
      <WidgetsDropdown />

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>User & Lives</CCardHeader>
            <CCardBody>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center">
                      <CIcon name="cil-people" />
                    </th>
                    <th>Full Name</th>
                    <th className="text-center">Email</th>
                    <th>Phone</th>
                    <th className="text-center">Date</th>
                    <th>Activity</th>
                  </tr>
                </thead>
                <tbody>
                    {dataList?.data &&
                      Array.isArray(dataList.data) &&
                      dataList.data.map((subscriber, index) => (
                      <tr key={index}>
                        <td className="text-center">
                          <div className="c-avatar">
                            {subscriber.profile_picture ? (
                              <img
                                src={subscriber.profile_picture}
                                className="c-avatar-img"
                                alt={subscriber.email}
                              />
                            ) : (
                              <img
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                className="c-avatar-img"
                                alt="Dummy Image"
                              />
                            )}
                            <span className="c-avatar-status bg-success"></span>
                          </div>
                        </td>
                        <td>
                          <div className="small text-muted">
                            {subscriber.full_name}
                          </div>
                        </td>
                        <td className="text-center">{subscriber.email}</td>
                        <td>
                          <div className="clearfix">
                            {subscriber.contact_number}
                          </div>
                        </td>
                        <td className="text-center">
                          {moment(subscriber?.createdAt).format(
                            "MMMM Do YYYY"
                          )}
                        </td>
                        <td>
                          <div className="small text-muted">Last login</div>
                          <strong>{subscriber.is_online ? 'Online' : 'Offline'}</strong>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {isLoading && <div>Loading...</div>}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Dashboard;
