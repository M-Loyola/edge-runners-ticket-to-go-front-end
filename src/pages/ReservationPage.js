import React, { useState } from "react";
import { Table, Button, Modal } from 'antd';



const data = [
    {
      key: '1',
      title: 'Bumblebee',
      description: "Lorem ipsum just john wick things",
      location: 'Manila/Cinema One',
      duration: 140,
    schedule: "2023-09-04 10:30:00",
    reservedSeats: "A1,A2",
    location: "Laguna",
    price: 240,
    cinemaName: "Sm Sta rosa Cinema 1",
      action: (
        <>
          <Button type="primary">Reserve Now!</Button>
          <Button type="primary">Pay Now!</Button>
        </>
      ),
    },
  ];
  
  const columns = [
    {
      title: 'Movie',
      dataIndex: 'movie',
      key: 'movie',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Schedule',
      dataIndex: 'schedule',
      key: 'schedule',
    },
    {
      title: 'Online Payment',
      dataIndex: 'onlinePayment',
      key: 'onlinePayment',
    },
    {
      title: 'Payment Number',
      dataIndex: 'paymentNumber',
      key: 'paymentNumber',
    },
    {
      title: 'Seat',
      dataIndex: 'seat',
      key: 'seat',
    },
    {
      title: 'Ticket Price',
      dataIndex: 'ticketPrice',
      key: 'ticketPrice',
    },
    {
      title: 'Total Price',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      key: 'action',
    },
  ];

const ReservationPage = () => {
    

      return (
        <div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          size="middle"
          scroll={{ x: 'max-content' }}
        />
        
        </div>
      );
    };

export default ReservationPage;
