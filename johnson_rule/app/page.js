"use client";
import useJohnsonsRule from '@/Hooks/useJohnsonsRule';
import { useState } from 'react';

export default function Home() {
  const { johnsonsRule } = useJohnsonsRule();

  const [tableData, setTableData] = useState([
    { job: 'A', m1: '3', m2: '12' },
    // Initial table row
  ]);

  const handleTableRow = () => {
    const newRow = { job: '', m1: '', m2: '' };
    setTableData([...tableData, newRow]);
  };

  const handleInputChange = (index, key, value) => {
    const updatedData = [...tableData];
    updatedData[index][key] = value;
    setTableData(updatedData);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const fileContent = JSON.parse(event.target.result);
          setTableData(fileContent);
        } catch (error) {
          console.error('Error reading file:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleSubmit = () => {
    const jobSequence = johnsonsRule(tableData);

  }

  return (
    <main className="flex min-h-screen flex-col items-center  py-10 px-24">
      <header className='flex justify-center items-center mb-10'>
        <img className='w-20 	' src="/logo_akshay.png" alt="logo_akshay" />
      </header>
      <div className="text-white text-2xl	 mb-20 ">Johnson rule to sequence ‘n’ jobs on 2 machines</div>
      <table className=''>
        <tbody className='mb-10'>
          <tr className=''>
            <th>Job</th>
            <th>M1</th>
            <th>M2</th>
          </tr>
          {tableData.map((rowData, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  className='text-black'
                  value={rowData.job}
                  onChange={(e) => handleInputChange(index, 'job', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className='text-black'

                  value={rowData.m1}
                  onChange={(e) => handleInputChange(index, 'm1', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className='text-black'

                  value={rowData.m2}
                  onChange={(e) => handleInputChange(index, 'm2', e.target.value)}
                />
              </td>
            </tr>
          ))}

        </tbody>
        <tr>
          <td colSpan="3">
            <input type="file" onChange={(e) => handleFileChange(e)} accept=".json" />
          </td>
        </tr>
        {/* Add extra table row */}
        <button className="bg-indigo-500 px-4 py-2 rounded-md	mt-5 mr-4" onClick={() => handleTableRow()}>Add table row</button>
        <button className="bg-indigo-500 px-4 py-2 rounded-md	mt-5" onClick={() => handleSubmit()}>Submit</button>

      </table>

      <footer className='absolute bottom-2 '>  <p>Developed by Akshay | Copyright © 2024 . All rights reserved.</p></footer>
    </main>
  )
}
