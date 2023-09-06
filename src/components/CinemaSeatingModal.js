import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import '../assets/styles/CinemaSeatingModal.css';

const rows = ['A', 'B', 'C', 'D', 'E'];
const seatsPerRow = 10;

const CinemaSeatingModal = ({ visible, onCancel, onSelectedSeatsChange }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);
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

    useEffect(() => {
        onSelectedSeatsChange(selectedSeats);
    }, [selectedSeats, onSelectedSeatsChange]);

    return (
        <Modal
            title="Cinema Seating"
            open={visible} //change to current(?)
            onCancel={onCancel}
            footer={null}
            className='cinema-seating-modal'
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
            <p>Selected Seats: {selectedSeats.length > 0 ? selectedSeats.join(', ') : "None"}</p>
        </Modal>
    );
};

export default CinemaSeatingModal;
