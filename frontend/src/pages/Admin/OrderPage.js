// import { Spin, Table, message } from "antd";
// import { useEffect, useState } from "react";

// const OrderPage = () => {
//   const [dataSource, setDataSource] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const columns = [
//     {
//       title: "Müşteri Email",
//       dataIndex: "receipt_email",
//     },
//     {
//       title: "Sipariş Fiyatı",
//       dataIndex: "amount",
//     },
//   ];

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);

//       try {
//         const response = await fetch(
//           `https://api.stripe.com/v1/payment_intents`,
//           {
//             method: "GET",
//             headers: {
//               Authorization: `Bearer pk_test_51OsrjpE1J0HVRrfg3foAwvTJnByKnLnZ5fdQoDrbWCK70TDzoF1SBjM1CDZrshF65j4zH8CpJTrMRjzlqAtXOuLO00NDXtdjSf`,
//             },
//           }
//         );

//         if (response.ok) {
//           const { data } = await response.json();
//           setDataSource(data);
//         } else {
//           message.error("Veri getirme başarısız.");
//         }
//       } catch (error) {
//         console.log("Veri hatası:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   console.log(dataSource);

//   return (
//     <Spin spinning={loading}>
//       <Table
//         dataSource={dataSource}
//         columns={columns}
//         rowKey={(record) => record.id}
//         loading={loading}
//       />
//     </Spin>
//   );
// };

// export default OrderPage;
