const RoutingList = {
  index: "/",
  course: {
    index: "/course",
    create: "/course/add",
    edit: "/course/edit",
  },
  patientAdmission: {
    index: "/patient",
    create: "/patient/admission",
    edit: "/patient/admission/edit",
  },
  login: {
    index: "/login",
    forgetPassword: "/forget-password",
    verify_email: "/login/verify-email",
    updatePassword: "/update-password",
  },
  bedStatus: {
    index: "/bed-status",
  },
  disease: {
    index: "/treatment",
  },
  district: {
    index: "/district",
  },
  department: {
    index: "/department",
  },
  user: {
    index: "/user",
    create: "/user/add",
    edit: "/user/edit",
  },
  settings: {
    index: "/settings",
    edit: "/settings/edit",
    change_password: "/settings/change-password",
  },
  verify: {
    verifyLink: "/verify-link",
    changePasswordAfterVerify: "/verify/change-password",
  },
  page_not_found: "/*",
};

export default RoutingList;
