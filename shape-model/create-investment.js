const Investment = require("../model/investment");
const Transaction = require("../model/transaction");

const select_investment_end_time = (req) => {

  switch (req.body.return_time) {
    case "2_weeks_return":
      let date = new Date();
      date.setDate(date.getDate() + 14);
      let end_date = date.getTime();
      return end_date;
      break;

      case "one_month_return":
        let date2 = new Date();
      date2.setDate(date2.getDate() + 30);
      let end_date2 = date2.getTime();
      return end_date2;
      break;

      case "two_months_return" :
         let date3 = new Date();
    date3.setDate(date3.getDate() + 60);
    let end_date3 = date3.getTime();
    return end_date3;


    case "three_months_return" :
      let date4 = new Date();
 date4.setDate(date4.getDate() + 90);
 let end_date4 = date4.getTime();
 return end_date4;

 case "six_months_return" :
  let date5 = new Date();
date5.setDate(date5.getDate() + 180);
let end_date5 = date5.getTime();
return end_date5;



    default:
      let def_date = new Date();
      def_date.setDate(date.getDate() + 14);
      let def_end_date = date.getTime();
      return def_end_date;
      break;
  }

  // if (req.body.return_time == "daily_return") {
  //   // let currentdate = new Date();
  //   // currentdate.setDate(currentdate.getDate() + 1);
  //   // let datetime = `${currentdate.getFullYear()}-${
  //   //   currentdate.getMonth() + 1
  //   // }-${currentdate.getDate()} -  ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;
  //   // return datetime;
  //   let date = new Date();
  //   date.setDate(date.getDate() + 1);
  //   let end_date = date.getTime();
  //   return end_date;
  // } else {
  //   // let currentdate = new Date();
  //   // currentdate.setDate(currentdate.getDate() + 7);
  //   // let datetime = `${currentdate.getFullYear()}-${
  //   //   currentdate.getMonth() + 1
  //   // }-${currentdate.getDate()} -  ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;
  //   // return datetime;

  //   let date = new Date();
  //   date.setDate(date.getDate() + 7);
  //   let end_date = date.getTime();
  //   return end_date;
  // }
};

const create_investment = async (req) => {
  let currentdate = new Date();
  let datetime = `${currentdate.getFullYear()}-${
    currentdate.getMonth() + 1
  }-${currentdate.getDate()} -  ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;
  let ref = Math.floor(Math.random() * 1000);
  console.log("end time", select_investment_end_time(req));

  const investment = await new Investment({
    user: req.body.user,
    transaction_date: datetime,
    refrence_number: `Ref#${++ref} `,
    amount: req.body.investment_amount,
    currency: req.body.currency,

    return_time: req.body.return_time,
    pending_profit: req.body.profit,
    investment_end_date: select_investment_end_time(req),
  });


  const transaction = await new Transaction({
    user: req.body.user,
    refrence_number: `#Create Trade`,
    transaction_date: datetime,
    debit: `-$${req.body.investment_amount
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
    status: "success",
  });


  Promise.all([transaction.save(),investment.save()])

  return investment;
};
module.exports = create_investment;
