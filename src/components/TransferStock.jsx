import React from 'react';

const TransferStock = () => {
  return (
    <div>
      <h2>Điều Chuyển Kho</h2>
      <form>
        <input type="text" placeholder="Tên sản phẩm" />
        <input type="number" placeholder="Số lượng" />
        <input type="text" placeholder="Kho nguồn" />
        <input type="text" placeholder="Kho đích" />
        <button type="submit">Điều chuyển</button>
      </form>
    </div>
  );
};

export default TransferStock; 