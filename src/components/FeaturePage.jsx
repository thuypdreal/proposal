import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './FeaturePage.css';

const FeaturePage = () => {
  const slides = [
    {
      title: "GIẢI PHÁP QUẢN LÝ KHU VUI CHƠI THÔNG MINH",
      subtitle: "CtrlPark",
      website: "Website: invade.vn",
      hotline: "Hotline 24/7: 0899 023 368",
      type: "hero"
    },
    {
      title: "Phù hợp hầu hết với tất cả các loại hình vui chơi",
      items: [
        {
          icon: "/icons/theme-park.png", // Icon công viên chủ đề
          text: "CÔNG VIÊN CHỦ ĐỀ"
        },
        {
          icon: "/icons/water-park.png", // Icon công viên nước
          text: "CÔNG VIÊN NƯỚC"
        },
        {
          icon: "/icons/mall.png", // Icon trung tâm giải trí
          text: "TRUNG TÂM GIẢI TRÍ"
        },
        {
          icon: "/icons/temple.png", // Icon du lịch tâm linh
          text: "DU LỊCH TÂM LINH"
        },
        {
          icon: "/icons/climbing.png", // Icon tổ hợp tắm khoáng
          text: "TỔ HỢP TẮM KHOÁNG"
        }
      ],
      type: "business-types"
    },
    {
      title: "MÔ HÌNH TỔNG QUAN HỆ THỐNG",
      type: "system-overview",
      legend: [
        { text: "Kênh bán", color: "red" },
        { text: "Sử dụng, kiểm soát", color: "blue" },
        { text: "Thanh toán", color: "green" }
      ],
      components: {
        payments: [
          "ViettelPay", "VNPay", "ZaloPay", "PayPal"
        ],
        integrations: [
          {
            name: "Mobile App",
            icon: "/icons/mobile-app.png",
            color: "red"
          },
          {
            name: "B2C/B2B",
            icon: "/icons/b2c-b2b.png",
            color: "red"
          },
          {
            name: "OTA & eCommerce",
            icon: "/icons/ota.png",
            color: "yellow"
          },
          {
            name: "Ticket Counter",
            icon: "/icons/ticket-counter.png",
            color: "purple"
          },
          {
            name: "SmartPOS",
            icon: "/icons/smart-pos.png",
            color: "purple"
          },
          {
            name: "Kiosk",
            icon: "/icons/kiosk.png",
            color: "blue"
          }
        ],
        controls: [
          {
            name: "Access Control",
            icon: "/icons/access-control.png"
          },
          {
            name: "Digital",
            icon: "/icons/digital.png"
          },
          {
            name: "Mobile Check",
            icon: "/icons/mobile-check.png"
          },
          {
            name: "Smart Lock",
            icon: "/icons/smart-lock.png"
          }
        ]
      }
    },
    {
      id: 1,
      icon: "🎫",
      title: "Quản lý vé và đặt chỗ",
      description: "Hệ thống bán vé thông minh, đặt chỗ trực tuyến, quét mã QR. Theo dõi lượt vào ra và thống kê doanh thu chi tiết.",
      type: "feature"
    },
    {
      id: 2, 
      icon: "👥",
      title: "Quản lý khách hàng",
      description: "Lưu trữ thông tin khách hàng, lịch sử sử dụng dịch vụ. Chương trình thành viên và tích điểm thưởng tự động.",
      type: "feature"
    },
    {
      id: 3,
      icon: "🎮",
      title: "Quản lý thiết bị và trò chơi",
      description: "Theo dõi tình trạng thiết bị, lịch bảo trì, đảm bảo an toàn. Phân bổ nhân viên vận hành hiệu quả.",
      type: "feature"
    },
    {
      id: 4,
      icon: "📊",
      title: "Báo cáo và phân tích",
      description: "Thống kê doanh thu, lượt khách, đánh giá hiệu suất từng khu vực. Báo cáo chi tiết theo thời gian thực.",
      type: "feature"
    },
    {
      id: 5,
      icon: "🏪",
      title: "Quản lý cửa hàng và dịch vụ",
      description: "Quản lý bán hàng, kho hàng, dịch vụ ăn uống. Tích hợp thanh toán đa kênh, hóa đơn điện tử.",
      type: "feature"
    },
    {
      id: 6,
      icon: "📱",
      title: "Ứng dụng di động",
      description: "App di động cho khách hàng đặt vé, xem thông tin, tích điểm. App quản lý cho nhân viên vận hành.",
      type: "feature"
    },
    {
      title: "Bắt đầu số hóa khu vui chơi của bạn",
      description: "Liên hệ ngay để được tư vấn giải pháp phù hợp nhất",
      type: "cta"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    autoplay: false,
    pauseOnHover: true
  };

  const renderSlide = (slide) => {
    switch(slide.type) {
      case 'hero':
        return (
          <div className="hero-section slide hero-background">
            <div className="hero-content">
              <h1>{slide.title}</h1>
              <div className="logo-container">
                <img src="/logo192.png" alt="logo" className="logo" />
              </div>
              <h2>{slide.subtitle}</h2>
            </div>
            <div className="contact-info">
              <p>{slide.website}</p>
              <p>{slide.hotline}</p>
            </div>
          </div>
        );
      case 'business-types':
        return (
          <div className="business-types-slide slide">
            <h2>{slide.title}</h2>
            <div className="business-types-grid">
              {slide.items.map((item, index) => (
                <div key={index} className="business-type-item">
                  <div className="business-type-icon">
                    <img src={item.icon} alt={item.text} />
                  </div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'feature':
        return (
          <div className="feature-slide slide">
            <div className="feature-card">
              <div className="feature-icon">{slide.icon}</div>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </div>
        );
      case 'cta':
        return (
          <div className="cta-section slide">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
            <button className="cta-button">Liên hệ tư vấn</button>
          </div>
        );
      case 'system-overview':
        return (
          <div className="system-overview-slide slide">
            <h2>{slide.title}</h2>
            
            {/* Legend */}
            <div className="system-legend">
              {slide.legend.map((item, index) => (
                <div key={index} className="legend-item">
                  <span className="legend-dot" style={{backgroundColor: item.color}}></span>
                  <span className="legend-text">{item.text}</span>
                </div>
              ))}
            </div>

            {/* System Diagram */}
            <div className="system-diagram">
              {/* Payment Methods */}
              <div className="payment-methods">
                {slide.components.payments.map((payment, index) => (
                  <div key={index} className="payment-item">
                    <img src={`/icons/payment/${payment.toLowerCase()}.png`} alt={payment} />
                  </div>
                ))}
              </div>

              {/* Core System */}
              <div className="core-system">
                <div className="Pa-box">Payment</div>
                <div className="C-box"></div>
                <div className="Ticket-box">CtrlPark System</div>
              </div>

              {/* Integrations */}
              <div className="integrations">
                {slide.components.integrations.map((integration, index) => (
                  <div key={index} className={`integration-item ${integration.color}`}>
                    <img src={integration.icon} alt={integration.name} />
                    <span>{integration.name}</span>
                  </div>
                ))}
              </div>

              {/* Control Systems */}
              <div className="control-systems">
                {slide.components.controls.map((control, index) => (
                  <div key={index} className="control-item">
                    <img src={control.icon} alt={control.name} />
                    <span>{control.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="feature-page">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            {renderSlide(slide)}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturePage; 