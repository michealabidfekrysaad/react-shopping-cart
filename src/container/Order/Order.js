import { useFormik } from "formik";
// import { connect } from "react-redux";
import { resetCart } from "../../store/actions/Cart";
import * as Yup from "yup";
import Input from "../../component/Input/Input";
import "./Order.scss";
import Btn from "../../component/Btn/Btn";
import { useDispatch  } from "react-redux";
import { useHistory } from "react-router-dom";


const Order = () => {
  const dispatch = useDispatch();
  const history = useHistory();

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
        val && val.length === 10 
      ),
    email: Yup.string().email("Must be valid E-mail").required("Required"),
  });
  const onSubmit = (values, onSubmitProps) => {
    alert("action submitted");
    onSubmitProps.resetForm();
    dispatch(resetCart())
    history.push("/");
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit} noValidate >
        <div className="row">
          <div className="col-25">
            <label htmlFor="address">Address</label>
          </div>
          <div className="col-75">
            <Input
              type="text"
              id="address"
              name="address"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.address}
            />
            {formik.errors.address && formik.touched.address && (
              <div className="err-message">{formik.errors.address}</div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="phoneNumber">Phone Number</label>
          </div>
          <div className="col-75">
            <Input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
            />
            {formik.errors.phoneNumber && formik.touched.phoneNumber && (
              <div className="err-message">{formik.errors.phoneNumber}</div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="col-75">
            <Input
              type="email"
              id="email"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email && (
              <div className="err-message">{formik.errors.email}</div>
            )}
          </div>
        </div>
        <div className="row">
          <Btn
            type="submit"
            isDisabled={!(formik.isValid && formik.dirty)}
            className={!(formik.isValid && formik.dirty) ? "disabledBtn" : ""}
            content="Submit"
          />
        </div>
      </form>
    </div>
  );
};

// export default connect(null, { resetCart })(Order);
export default Order;