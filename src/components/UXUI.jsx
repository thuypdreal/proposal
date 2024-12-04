import React, { useState } from 'react';
import './UXUI.css';
import { QRCodeSVG } from 'qrcode.react';

// Thêm các constant cho thông tin ngân hàng
const BANK_INFO = {
  id: 'VPBANK', // hoặc mã BIN: 970415
  accountNo: '164254577', // Số tài khoản ngân hàng
  accountName: 'PHAM DINH THUY', // Tên tài khoản
};

const UXUI = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPaymentMethods, setSelectedPaymentMethods] = useState([]);
  const [amounts, setAmounts] = useState({});

  const togglePaymentMethod = (method) => {
    setSelectedPaymentMethods((prevMethods) =>
      prevMethods.includes(method)
        ? prevMethods.filter((m) => m !== method)
        : [...prevMethods, method]
    );
  };

  const handleAmountChange = (method, value) => {
    setAmounts((prevAmounts) => ({
      ...prevAmounts,
      [method]: value,
    }));
  };

  const handleKeyPress = (method, key) => {
    setAmounts((prevAmounts) => ({
      ...prevAmounts,
      [method]: (prevAmounts[method] || '') + key,
    }));
  };

  // Hàm tạo URL VietQR
  const generateVietQRUrl = (amount) => {
    const baseUrl = 'https://img.vietqr.io/image';
    const template = 'compact2';
    const addInfo = 'Thanh toan san truot bang'; // Nội dung chuyển khoản chi tiết
    
    return `${baseUrl}/${BANK_INFO.id}-${BANK_INFO.accountNo}-${template}.png?amount=${amount}&addInfo=${encodeURIComponent(addInfo)}&accountName=${encodeURIComponent(BANK_INFO.accountName)}`;
  };

  return (
    <div className="pos-container">
      <header className="header">
        <h2>Sân Trượt Băng</h2>
        <div>
          <span>Quầy - 7,10</span>
          <button className="logout-btn">Đăng xuất</button>
        </div>
      </header>

      <div className="main-content">
        <div className="sidebar">
          <div className="sidebar-item selected">
            <i className="fas fa-home"></i>
            <div>VÉ QR</div>
          </div>
          <div className="sidebar-item">
            <i className="fas fa-qrcode"></i>
            <div>Phiếu QR</div>
          </div>
          <div className="sidebar-item">
            <i className="fas fa-credit-card"></i>
            <div>Thẻ RFID</div>
          </div>
        </div>

        <div className="products-grid">
          <div className="product-card">
            <span className="number">1</span>
            <h3>Vé vào cổng<br/>+ Thuê giày</h3>
            <p>150.000đ</p>
          </div>
          <div className="product-card">
            <span className="number">1</span>
            <h3>Vé vào cổng</h3>
            <p>100.000đ</p>
          </div>
          <div className="product-card">
            <h3>Bán giày</h3>
            <p>450.000đ</p>
          </div>
          <div className="product-card">
            <span className="number">2</span>
            <h3>Trượt băng nghệ thuật</h3>
            <p>200.000đ</p>
          </div>
          <div className="product-card">
            <span className="number">1</span>
            <h3>Trượt băng tốc độ</h3>
            <p>180.000đ</p>
          </div>
        </div>

        <div className="order-panel">
          <div className="order-header">
            <h3>ĐƠN HÀNG</h3>
          </div>
          
          <div className="order-items">
            <div className="order-item">
              <span>1 Vé vào cổng<br/>+ Thuê giày</span>
              <span>150.000đ</span>
            </div>
            <div className="order-item">
              <span>2 Trượt băng nghệ thuật</span>
              <span>400.000đ</span>
            </div>
            <div className="order-item">
              <span>1 Trượt băng tốc độ</span>
              <span>180.000đ</span>
            </div>
          </div>

          <div className="order-total">
            <h3>Tổng cộng: 730.000đ</h3>
          </div>

          <div className="payment-buttons">
            <button 
              className="payment-button"
              onClick={() => setShowPaymentModal(true)}
            >
              THANH TOÁN
            </button>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Chọn hình thức thanh toán</h3>
              <div className="total-amount">
                Tổng tiền: 730.000đ
              </div>
              <button 
                className="close-button"
                onClick={() => setShowPaymentModal(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="payment-sidebar">
                <button
                  className={`payment-option ${selectedPaymentMethods.includes('cash') ? 'selected' : ''}`}
                  onClick={() => togglePaymentMethod('cash')}
                >
                  TIỀN MẶT
                </button>
                <button
                  className={`payment-option ${selectedPaymentMethods.includes('transfer') ? 'selected' : ''}`}
                  onClick={() => togglePaymentMethod('transfer')}
                >
                  CHUYỂN KHOẢN
                </button>
                <button
                  className={`payment-option ${selectedPaymentMethods.includes('credit') ? 'selected' : ''}`}
                  onClick={() => togglePaymentMethod('credit')}
                >
                  THẺ TÍN DỤNG
                </button>
              </div>
              <div className="payment-panel">
                {selectedPaymentMethods.map((method) => (
                  <div key={method} className="payment-input">
                    <label>{method.toUpperCase()}</label>
                    <input
                      type="text"
                      value={amounts[method] || ''}
                      readOnly
                    />
                    <div className="numpad">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
                        <button
                          key={num}
                          onClick={() => handleKeyPress(method, num)}
                        >
                          {num}
                        </button>
                      ))}
                      <button onClick={() => handleAmountChange(method, '')}>
                        Clear
                      </button>
                    </div>
                  </div>
                ))}
                
                {selectedPaymentMethods.includes('transfer') && (
                  <div className="qr-code">
                    <img 
                      src={generateVietQRUrl(amounts['transfer'] || 0)} 
                      alt="VietQR Payment QR Code"
                      style={{ width: '200px', height: '200px' }}
                    />
                  </div>
                )}

                <button className="confirm-payment-button">
                  XÁC NHẬN THANH TOÁN
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UXUI;
