import React, { useState } from 'react';
import './BookingOnline.css';

const BookingOnline = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectedSort, setSelectedSort] = useState('');

  return (
    <div className="booking-container">
      <div className="booking-header">
        <div className="progress-steps">
          <div className="step active">
            <div className="step-icon">🎫</div>
            <div className="step-text">Chọn dịch vụ</div>
          </div>
          <div className="step">
            <div className="step-icon">💳</div>
            <div className="step-text">Thanh toán</div>
          </div>
          <div className="step">
            <div className="step-icon">✓</div>
            <div className="step-text">Hoàn tất</div>
          </div>
        </div>
      </div>

      <div className="booking-content">
        <div className="sidebar">
          <h3><span className="location-icon">📍</span> Công viên SUN WORLD</h3>
          <div className="location-list">
            <label className="location-item">
              <input type="checkbox" /> Sun World Bà Nà Hills
            </label>
            <label className="location-item active">
              <input type="checkbox" checked /> Sun World Bà Đèn
            </label>
            <label className="location-item">
              <input type="checkbox" /> Sun World Hòn Thơm
            </label>
            <label className="location-item">
              <input type="checkbox" /> Bus Phú Quốc
            </label>
          </div>
        </div>

        <div className="main-content">
          <div className="filters">
            <div className="date-picker">
              <input type="text" value="Thứ 3 (03/12/2024) - Thứ 5 (02/01/2025)" readOnly />
            </div>
            <div className="filter-dropdown">
              <input type="text" placeholder="Bộ lọc" />
            </div>
            <div className="sort-dropdown">
              <input type="text" placeholder="Giảm giá nhiều nhất" />
            </div>
          </div>

          <div className="ticket-categories">
            <button className="category-btn active">Tất cả</button>
            <button className="category-btn">Vé cáp treo/Công viên</button>
            <button className="category-btn">Vé Combo</button>
            <button className="category-btn">Show Diễn</button>
            <button className="category-btn">Vé Bus 2 tầng</button>
            <button className="category-btn">Ẩm thực</button>
          </div>

          <div className="ticket-cards">
            <div className="ticket-card">
              <img src="/path-to-buffet-image.jpg" alt="Buffet" />
              <div className="ticket-info">
                <h3>VÉ BUFFET VÂN SƠN_NGƯỜI LỚN</h3>
                <div className="location-time">
                  <span>📍 Sun World Bà Đèn</span>
                  <span>🕒 10h30 - 15h00</span>
                </div>
                <div className="booking-actions">
                  <div className="date-select">
                    <span>03/12/2024</span>
                  </div>
                  <div className="price">
                    <span>Giá chỉ từ</span>
                    <span className="amount">270,000đ</span>
                  </div>
                  <div className="action-buttons">
                    <button className="cart-btn">🛒 Thêm giỏ hàng</button>
                    <button className="buy-btn">Mua ngay</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Similar card structure for VÉ BUFFET VÂN SƠN_TRẺ EM */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingOnline;
