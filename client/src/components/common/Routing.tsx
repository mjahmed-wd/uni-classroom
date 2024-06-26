import { BrowserRouter, Route, Routes } from "react-router-dom";

import PrivateRoutes from "../HOC/PrivateRoute/PrivateRoutes";
import Home from "../modules/home/Home";
import Login from "../modules/login/login";
import PageNotFound from "../modules/pageNotFound/PageNotFound";
// import AddPatient from "../modules/patient/AddPatient";
import NonLoginRoutes from "../HOC/PrivateRoute/NonLoginRoutes";

import { permissions } from "../../constants/permissions";
import RoutingList from "../../utils/RoutingList";
import UserList from "../modules/user/userList/UserList";
import AddUser from "../modules/user/addUser/AddUser";
import CourseList from "../modules/course/courseList/CourseList";
import AddCourse from "../modules/course/addCourse/AddCourse";

const Routing = () => {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route element={<NonLoginRoutes />}>
            <Route path={RoutingList.login.index} element={<Login />} />
            {/* <Route
              path={RoutingList.login.forgetPassword}
              element={<ForgetPassword />}
            /> */}

            {/* <Route
              path={RoutingList.login.updatePassword}
              element={<VerifyForgetPass />}
            />
            <Route
              path={RoutingList.verify.verifyLink}
              element={<VerifyEmail />}
            />

            <Route
              path={RoutingList.verify.changePasswordAfterVerify}
              element={<ChangePasswordAfterVerify />}
            /> */}
          </Route>

          <Route
            element={
              <PrivateRoutes allowedRoles={permissions?.[RoutingList?.index]} />
            }
          >
            <Route path={RoutingList.index} element={<Home />} />
          </Route>

          <Route
            element={
              <PrivateRoutes
                allowedRoles={permissions?.[RoutingList?.user?.index]}
              />
            }
          >
            <Route path={RoutingList.user.index} element={<UserList />} />
          </Route>

          <Route
            element={
              <PrivateRoutes
                allowedRoles={permissions?.[RoutingList?.user?.create]}
              />
            }
          >
            <Route path={RoutingList.user.create} element={<AddUser />} />
          </Route>
          <Route
            element={
              <PrivateRoutes
                allowedRoles={permissions?.[RoutingList?.user?.edit]}
              />
            }
          >
            <Route path={`${RoutingList.user.edit}/:id`} element={<AddUser />} />
          </Route>

          <Route
            element={
              <PrivateRoutes
                allowedRoles={permissions?.[RoutingList?.course?.index]}
              />
            }
          >
            <Route path={RoutingList.course.index} element={<CourseList />} />
          </Route>
          <Route
            element={
              <PrivateRoutes
                allowedRoles={permissions?.[RoutingList?.course?.create]}
              />
            }
          >
            <Route path={RoutingList.course.create} element={<AddCourse />} />
          </Route>
{/* 
          <Route
            element={
              <PrivateRoutes
                allowedRoles={
                  permissions?.[RoutingList?.patientAdmission?.index]
                }
              />
            }
          >
            <Route
              path={RoutingList.patientAdmission.index}
              element={<PatientList />}
            />
          </Route>

          <Route
            element={
              <PrivateRoutes
                allowedRoles={
                  permissions?.[RoutingList?.patientAdmission?.create]
                }
              />
            }
          >
            <Route
              path={RoutingList.patientAdmission.create}
              element={<AddPatient key={'addPatient'}/>}
            />
          </Route>

          <Route
            element={
              <PrivateRoutes
                allowedRoles={permissions?.[RoutingList.patientAdmission.edit]}
              />
            }
          >
            <Route
              path={`${RoutingList.patientAdmission.edit}/:id`}
              element={<AddPatient key={'editPatient'} />}
            />
          </Route>

          <Route
            element={
              <PrivateRoutes
                allowedRoles={permissions?.[RoutingList.user.edit]}
              />
            }
          >
            <Route path={`${RoutingList.user.edit}/:id`} element={<AddUser />} />
          </Route>

          <Route
            element={
              <PrivateRoutes
                allowedRoles={permissions?.[RoutingList.bedStatus.index]}
              />
            }
          >
            <Route path={RoutingList.bedStatus.index} element={<BedStatus />} />
          </Route>
          <Route
            element={
              <PrivateRoutes
                allowedRoles={permissions?.[RoutingList.disease.index]}
              />
            }
          >
            <Route path={RoutingList.disease.index} element={<Treatment />} />
          </Route>
          <Route
            element={
              <PrivateRoutes
                allowedRoles={permissions?.[RoutingList.department.index]}
              />
            }
          >
            <Route path={RoutingList.department.index} element={<Department />} />
          </Route>
          <Route
            element={
              <PrivateRoutes
                allowedRoles={permissions?.[RoutingList.settings.index]}
              />
            }
          >
            <Route path={RoutingList.settings.index} element={<Settings />} />
          </Route>

          <Route
            element={
              <PrivateRoutes
                allowedRoles={permissions?.[RoutingList.settings.edit]}
              />
            }
          >
            <Route path={RoutingList.settings.edit} element={<ProfileEdit />} />
          </Route>

          <Route
            element={
              <PrivateRoutes
                allowedRoles={
                  permissions?.[RoutingList.settings.change_password]
                }
              />
            }
          >
            <Route
              path={RoutingList.settings.change_password}
              element={<ChangePassword />}
            />
          </Route> */}

          <Route path={RoutingList.page_not_found} element={<PageNotFound />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default Routing;
