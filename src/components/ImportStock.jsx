import React from 'react';

const ImportStock = () => {
  return (
    <div>
      <h2>Nhập Kho</h2>
      <form>
        <input type="text" placeholder="Tên sản phẩm" />
        <input type="number" placeholder="Số lượng" />
        <input type="number" placeholder="Giá" />
        <button type="submit">Nhập kho</button>
      </form>
    </div>
  );
};

export default ImportStock; 