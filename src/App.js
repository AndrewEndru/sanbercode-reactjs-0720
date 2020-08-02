import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App" >
      <div id="container">
        <h2>Form Penjualan Buah</h2>
        <table>
          <tr>
            <th>Nama</th>
            <td><input type="text" style={{ paddingRight: "60px" }}></input></td>
          </tr>
          <tr>
            <th rowSpan="5" style={{ paddingTop: "110px" }}>Daftar Item</th>
            <td>
              <input type="checkbox" id="semangka"></input>
              <label>Semangka</label>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox"></input>
              <label>Jeruk</label>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox"></input>
              <label>Nanas</label>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox"></input>
              <label>Salak</label>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox"></input>
              <label>Anggur</label>
            </td>
          </tr>
          <tr>
            <th style={{ paddingTop: "10px" }}>
              <button>Kirim</button>
            </th>
          </tr>
        </table>
      </div >
    </div>
  );
}

export default App;
