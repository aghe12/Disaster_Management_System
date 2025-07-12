// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Home and Authentication Pages
// import Home from "./pages/Home";
// import LoginForm from "./pages/LoginForm";
// import AdminSignup from "./pages/AdminSignup";
// import VolunteerSignup from "./pages/VolunteerSignup";
// import UserSignup from "./pages/UserSignup";

// // Admin Pages
// import AdminDashboard from "./pages/AdminDashboard";
// import PostDisaster from "./pages/admin/PostDisaster";
// import UpdateDisaster from "./pages/admin/UpdateDisaster";
// import PostShelter from "./pages/admin/PostShelter";
// import UpdateShelter from "./pages/admin/UpdateShelter";
// import ViewSources from "./pages/admin/ViewSources";
// import ViewEmergencySources from "./pages/admin/ViewEmergencySources";
// import AddBankDetails from "./pages/admin/AddBankDetails";
// import ManageBankDetails from "./pages/admin/ManageBankDetails";
// import ViewVolunteers from "./pages/admin/ViewVolunteers";
// import ViewVolunteerTasks from "./pages/admin/ViewVolunteerTasks";
// import ViewUserDetails from "./pages/admin/ViewUserDetails";

// // Volunteer Pages
// import VolunteerDashboard from "./pages/VolunteerDashboard";
// import UpdateTaskStatus from "./pages/volunteer/UpdateTaskStatus";
// import VolunteerViewShelters from "./pages/volunteer/ViewShelters";  // Renamed for volunteer
// import SubmitReport from "./pages/volunteer/SubmitReport";
// import VolunteerProfile from "./pages/volunteer/VolunteerProfile";

// import ContactAdmin from "./pages/volunteer/ContactAdmin";

// // User Pages
// import UserDashboard from "./pages/UserDashboard";
// import UserViewDisasters from "./pages/user/ViewDisasters";
// import UserViewShelters from "./pages/user/ViewShelters";  // Renamed for user
// import PostSOS from "./pages/user/PostSOS";
// import ViewSOS from "./pages/user/ViewSOS";
// import PostIncident from "./pages/user/PostIncident";
// import ManageIncident from "./pages/user/ManageIncident";
// import PostResource from "./pages/user/PostResource";
// import ManageResource from "./pages/user/ManageResource";
// import UserProfile from "./pages/user/UserProfile";
// import EmergencyContactDetails from "./pages/user/EmergencyContactDetails";

// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                 {/* Home and Authentication Routes */}
//                 <Route path="/" element={<Home />} />
//                 <Route path="/login" element={<LoginForm />} />
//                 <Route path="/signup/admin" element={<AdminSignup />} />
//                 <Route path="/signup/volunteer" element={<VolunteerSignup />} />
//                 <Route path="/signup/user" element={<UserSignup />} />
                
//                 {/* Admin Routes */}
//                 <Route path="/admin/dashboard" element={<AdminDashboard />} />
//                 <Route path="/admin/post-disaster" element={<PostDisaster />} />
//                 <Route path="/admin/update-disasters" element={<UpdateDisaster />} />
//                 <Route path="/admin/post-shelters" element={<PostShelter />} />
//                 <Route path="admin/update-shelter/:shelterId" element={<UpdateShelter/>}/>
//                 <Route path="/admin/view-sources" element={<ViewSources />} />
//                 <Route path="/admin/view-emergency-sources" element={<ViewEmergencySources />} />
//                 <Route path="/admin/add-bank-details" element={<AddBankDetails />} />
//                 <Route path="/admin/manage-bank-details" element={<ManageBankDetails />} />
//                 <Route path="/edit-bank-detail/:id" element={<ManageBankDetails />}/>
//                 <Route path="/admin/view-volunteers" element={<ViewVolunteers />} />
//                 <Route path="/admin/view-volunteer-tasks" element={<ViewVolunteerTasks />} />
//                 <Route path="/admin/view-user-details" element={<ViewUserDetails />} />

//                 {/* Volunteer Routes */}
//                 <Route path="/volunteer/dashboard" element={<VolunteerDashboard />} />
//                 <Route path="/volunteer/update-task-status" element={<UpdateTaskStatus />} />
//                 <Route path="/volunteer/view-shelters" element={<VolunteerViewShelters />} />
//                 <Route path="/volunteer/submit-report" element={<SubmitReport />} />
//                 <Route path="/volunteer/profile" element={<VolunteerProfile />} />

//                 <Route path="/volunteer/contact-admin" element={<ContactAdmin />} />

//                 {/* User Routes */}
//                 <Route path="/user/dashboard" element={<UserDashboard />} />
//                 <Route path="/user/view-disasters" element={<UserViewDisasters />} />
//                 <Route path="/user/view-shelters" element={<UserViewShelters />} />
//                 <Route path="/user/post-sos" element={<PostSOS />} />
//                 <Route path="/user/view-sos" element={<ViewSOS />} />
//                 <Route path="/user/post-incident" element={<PostIncident />} />
//                 <Route path="/user/manage-incident" element={<ManageIncident />} />
//                 <Route path="/user/post-resource" element={<PostResource />} />
//                 <Route path="/user/manage-resource" element={<ManageResource />} />
//                 <Route path="/user/profile" element={<UserProfile />} />
//                 <Route path="/user/emergency-contact" element={<EmergencyContactDetails />} />
//             </Routes>
//         </Router>
//     );
// };

// export default App;




import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Home and Authentication Pages
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import AdminSignup from "./pages/AdminSignup";
import VolunteerSignup from "./pages/VolunteerSignup";
import UserSignup from "./pages/UserSignup";

// Admin Pages
import AdminDashboard from "./pages/AdminDashboard";
import PostDisaster from "./pages/admin/PostDisaster";
import PostShelter from "./pages/admin/PostShelter";
import UpdateShelter from "./pages/admin/UpdateShelter";
import ViewSources from "./pages/admin/AddSources";
import ViewEmergencySources from "./pages/admin/ViewEmergencyContacts";
import AddBankDetails from "./pages/admin/AddBankDetails";
import ManageBankDetails from "./pages/admin/ManageBankDetails";
import ViewVolunteers from "./pages/admin/ViewVolunteers";
import AddVolunteerTasks from "./pages/admin/Tasks";




// Volunteer Pages
import VolunteerDashboard from "./pages/VolunteerDashboard";
import UpdateTaskStatus from "./pages/volunteer/UpdateTaskStatus";
import VolunteerViewShelters from "./pages/volunteer/ViewShelters";  // Renamed for volunteer
import SubmitReport from "./pages/volunteer/SubmitReport";
import VolunteerProfile from "./pages/volunteer/VolunteerProfile";
import VolunteerViewDisasters from "./pages/volunteer/ViewDisaster";
import ContactAdmin from "./pages/volunteer/ContactAdmin";
import PostShelters from "./pages/admin/PostShelter";
import ViewIncidents from "./pages/volunteer/Viewincidents";
// User Pages
import UserDashboard from "./pages/UserDashboard";
import UserViewDisasters from "./pages/user/ViewDisasters";
import UserViewShelters from "./pages/user/ViewShelters";  // Renamed for user
import PostSOS from "./pages/user/ViewSources";
import ViewSOS from "./pages/user/ViewBankDetails";
import PostIncident from "./pages/user/PostIncident";
import ManageIncident from "./pages/user/ManageIncident";
import PostResource from "./pages/user/AddSources";
import ManageResource from "./pages/user/ManageResource";
import EmergencyContactDetails from "./pages/user/EmergencyContactDetails";
import Updateresources from "./pages/volunteer/Updateresources";
import ViewReports from "./pages/admin/ViewReports";
const App = () => {
    return (
        <Router>
            <Routes>
                {/* Home and Authentication Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup/admin" element={<AdminSignup />} />
                <Route path="/signup/volunteer" element={<VolunteerSignup />} />
                <Route path="/signup/user" element={<UserSignup />} />
                
                {/* Admin Routes */}
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/post-disaster" element={<PostDisaster />} />
            
                <Route path="/admin/post-shelters" element={<PostShelter />} />
                <Route path="admin/updateshelter" element={<UpdateShelter/>}/>
                <Route path="/admin/view-sources" element={<ViewSources />} />
                <Route path="/admin/view-emergency-sources" element={<ViewEmergencySources />} />
                <Route path="/admin/add-bank-details" element={<AddBankDetails />} />
                <Route path="/admin/manage-bank-details" element={<ManageBankDetails />} />
                <Route path="/edit-bank-detail/:id" element={<ManageBankDetails />}/>
                <Route path="/admin/view-volunteers" element={<ViewVolunteers />} />
                <Route path="/admin/add-volunteer-tasks" element={<AddVolunteerTasks />} />
                <Route path="/admin/viewreports" element={<ViewReports />} />
            

                {/* Volunteer Routes */}
                <Route path="/volunteer/dashboard" element={<VolunteerDashboard />} />
                <Route path="/volunteer/update-task-status" element={<UpdateTaskStatus />} />
                <Route path="/volunteer/view-shelters" element={<VolunteerViewShelters />} />
                <Route path="/volunteer/submit-report" element={<SubmitReport />} />
                <Route path="/volunteer/profile" element={<VolunteerProfile />} />
                <Route path="/volunteer/view-disasters" element={<VolunteerViewDisasters />} />
                <Route path="/volunteer/post-shelters" element={<PostShelters />} />
                <Route path="/volunteer/contact-admin" element={<ContactAdmin />} />
                <Route path="/volunteer/updateresources" element={<Updateresources />} />
                <Route path="/volunteer/viewincidents" element={<ViewIncidents/>} />
                {/* User Routes */}
                <Route path="/user/dashboard" element={<UserDashboard />} />
                <Route path="/user/view-disasters" element={<UserViewDisasters />} />
                <Route path="/user/view-shelters" element={<UserViewShelters />} />
                <Route path="/user/post-sos" element={<PostSOS />} />
                <Route path="/user/view-sos" element={<ViewSOS />} />
                <Route path="/user/post-incident" element={<PostIncident />} />
                <Route path="/user/manage-incident" element={<ManageIncident />} />
                <Route path="/user/post-resource" element={<PostResource />} />
                <Route path="/user/manage-resource" element={<ManageResource />} />
                
                <Route path="/user/emergency-contact" element={<EmergencyContactDetails />} />
            </Routes>
        </Router>
    );
};

export default App;
