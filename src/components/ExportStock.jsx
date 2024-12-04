import React from 'react';

const ExportStock = () => {
  return (
    <div>
      <h2>Xuất Kho</h2>
      <form>
        <input type="text" placeholder="Tên sản phẩm" />
        <input type="number" placeholder="Số lượng" />
        <button type="submit">Xuất kho</button>
      </form>
    </div>
  );
};

export default ExportStock; 