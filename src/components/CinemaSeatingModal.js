import React, { useState } from 'react';
import { Modal } from 'antd';
import '../assets/styles/CinemaSeatingModal.css';

const rows = ['A', 'B', 'C', 'D', 'E'];
const seatsPerRow = 10;

const CinemaSeatingModal = ({ visible, onCancel }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    console.log(selectedSeats);
    const handleSeatClick = (row, seatNumber) => {
        const seat = `${row}${seatNumber}`;
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter((s) => s !== seat));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };

    const isSeatSelected = (row, seatNumber) => {
        return selectedSeats.includes(`${row}${seatNumber}`);
    };

    return (
        <Modal
            title="Cinema Seating"
            visible={visible}
            onCancel={onCancel}
            footer={null}
        >
            <div className="cinema-seating-container">
                {rows.map((row) => (
                    <div key={row} className="row">
                        {Array(seatsPerRow)
                            .fill()
                            .map((_, seatNumber) => (
                                <div
                                    key={seatNumber}
                                    className={`seat ${isSeatSelected(row, seatNumber + 1) ? 'selected' : ''
                                        }`}
                                    onClick={() => handleSeatClick(row, seatNumber + 1)}
                                >
                                    {row}
                                    {seatNumber + 1}
                                </div>
                            ))}
                    </div>
                ))}
            </div>
            {selectedSeats.length > 0 && (
                <p>You have selected: {selectedSeats.join(', ')}</p>
            )}
        </Modal>
    );
};

export default CinemaSeatingModal;
