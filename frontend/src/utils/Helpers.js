import moment from "moment";

export const ToDateTime = (dateTimeValue) => {
  return moment(dateTimeValue).format("DD-MM-YYYY");
};

export const ThaiBahtAmountFormat = (price) => {
  return new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(price)
};
