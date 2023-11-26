// Home.js

import React from 'react';

const Home = () => {
  return (
    <div>
      <h2>Employee Details</h2>
      <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>B. SRIKANTH</td>
                  <td>srikanth@gmail.com</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>G. Naveen Chand</td>
                  <td>naveenchand@gmail.com</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>N.JYOTHI</td>
                  <td>Jyothi@gmail.com</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>P. Nikhil</td>
                  <td>nikhil@gmail.com</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>k. Surya</td>
                  <td>Surya@gmail.com</td>
                </tr>
              </tbody>
        </table>
          
    </div>
  );
};

export default Home;
