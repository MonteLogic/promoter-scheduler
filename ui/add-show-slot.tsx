import React, { useState } from 'react';

export const AddRouteShifts: React.FC = () => {
  const [shifts, setShifts] = useState<{ name: string; time: string }[]>([]);
  const [shiftName, setShiftName] = useState<string>('');
  const [shiftTime, setShiftTime] = useState<string>('');

  const addShift = () => {
    if (shiftName.trim() !== '' && shiftTime.trim() !== '') {
      setShifts([
        ...shifts,
        { name: shiftName.trim(), time: shiftTime.trim() },
      ]);
      setShiftName('');
      setShiftTime('');
    }
  };

  const handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShiftName(e.target.value);
  };

  const handleTimeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShiftTime(e.target.value);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold">Route Shifts:</h2>
      <ul className="divide-y divide-gray-300 rounded border border-gray-300">
        {shifts.map((shift, index) => (
          <li
            key={index}
            className="flex items-center justify-between px-4 py-2"
          >
            <span>
              {shift.name} - {shift.time}
            </span>
            <button className="text-blue-500">Edit</button>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <input
          type="text"
          value={shiftName}
          onChange={handleNameInputChange}
          className="mr-2 rounded border border-gray-300 px-4 py-2 text-gray-600"
          placeholder="Shift Name"
        />
        <input
          type="text"
          value={shiftTime}
          onChange={handleTimeInputChange}
          className="mr-2 rounded border border-gray-300 px-4 py-2 text-gray-600"
          placeholder="Shift Time"
        />
        <button
          onClick={addShift}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Add Shift
        </button>
      </div>
    </div>
  );
};

