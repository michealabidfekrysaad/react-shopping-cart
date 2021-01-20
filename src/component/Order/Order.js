import { useFormik } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import Input from "../Input/Input";
import "./Order.scss";
import { emptyCart } from "../../store/actions/Cart";

const initialValues = {
  address: "",
  phoneNumber: "",
  email: "",
};

const validationSchema = Yup.object({
  address: Yup.string().required("Required"),
  phoneNumber: Yup.string()
    .required("Required")
    .test("len", "Must be exactly 10 characters", (val) =>
      val ? val.length === 10 : null
    ),
  email: Yup.string().email("Must be valid E-mail").required("Required"),
});

const Order = (props) => {
  const { emptyCart } = props;
  const onSubmit = (values, onSubmitProps) => {
    alert("action submitted");
    onSubmitProps.resetForm();
    emptyCart();
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-25">
            <label htmlFor="address">Address</label>
          </div>
          <div className="col-75">
            <Input
              inputInfo={{
                type: "text",
                id: "address",
                name: "address",
                onBlur: formik.handleBlur,
                onChange: formik.handleChange,
                value: formik.values.address,
              }}
            />
            {formik.errors.address && formik.touched.address ? (
              <div className="err-message">{formik.errors.address}</div>
            ) : null}
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="phoneNumber">Phone Number</label>
          </div>
          <div className="col-75">
            <Input
              inputInfo={{
                type: "number",
                id: "phoneNumber",
                name: "phoneNumber",
                onBlur: formik.handleBlur,
                onChange: formik.handleChange,
                value: formik.values.phoneNumber,
              }}
            />
            {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
              <div className="err-message">{formik.errors.phoneNumber}</div>
            ) : null}
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="col-75">
            <Input
              inputInfo={{
                type: "email",
                id: "email",
                name: "email",
                onBlur: formik.handleBlur,
                onChange: formik.handleChange,
                value: formik.values.email,
              }}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="err-message">{formik.errors.email}</div>
            ) : null}
          </div>
        </div>
        <div className="row">
          <button type="submit" disabled={!formik.dirty}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { emptyCart })(Order);
