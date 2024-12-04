import React, { useState } from 'react';
import './WareHouse.css';
import ImportStock from './ImportStock';
import ExportStock from './ExportStock';
import TransferStock from './TransferStock';
import InventoryCheck from './InventoryCheck';
import StockReport from './StockReport';

const WareHouse = () => {
  const [activeTab, setActiveTab] = useState('import');

  const getTabClass = (tabName) => {
    return `warehouse-tab ${activeTab === tabName ? 'active' : ''}`;
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'import':
        return <ImportStock />;
      case 'export':
        return <ExportStock />;
      case 'transfer':
        return <TransferStock />;
      case 'inventory':
        return <InventoryCheck />;
      case 'report':
        return <StockReport />;
      default:
        return <ImportStock />;
    }
  };

  return (
    <div className="warehouse-container">
      <h1 className="warehouse-title">Quản Lý Kho</h1>
      <div className="warehouse-nav">
        <button className={getTabClass('import')} onClick={() => setActiveTab('import')}>
          <i className="fas fa-download"></i> Nhập Kho
        </button>
        <button className={getTabClass('export')} onClick={() => setActiveTab('export')}>
          <i className="fas fa-upload"></i> Xuất Kho
        </button>
        <button className={getTabClass('transfer')} onClick={() => setActiveTab('transfer')}>
          <i className="fas fa-exchange-alt"></i> Điều Chuyển Kho
        </button>
        <button className={getTabClass('inventory')} onClick={() => setActiveTab('inventory')}>
          <i className="fas fa-clipboard-list"></i> Kiểm Kê Kho
        </button>
        <button className={getTabClass('report')} onClick={() => setActiveTab('report')}>
          <i className="fas fa-chart-bar"></i> Báo Cáo Kho
        </button>
      </div>
      <div className="warehouse-content">
        {renderActiveTab()}
      </div>
    </div>
  );
};

export default WareHouse;
