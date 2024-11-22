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
          icon: "/icons/theme-park.png",
          text: "CÔNG VIÊN CHỦ ĐỀ"
        },
        {
          icon: "/icons/water-park.png",
          text: "CÔNG VIÊN NƯỚC"
        },
        {
          icon: "/icons/mall.png",
          text: "TRUNG TÂM GIẢI TRÍ"
        },
        {
          icon: "/icons/temple.png",
          text: "DU LỊCH TÂM LINH"
        },
        {
          icon: "/icons/climbing.png",
          text: "TỔ HỢP TẮM KHOÁNG"
        }
      ],
      type: "business-types"
    },
    {
      title: "MÔ HÌNH TỔNG QUAN HỆ THỐNG",
      type: "system-overview",
      components: {
        payments: [
          { icon: "/icons/payment/vnpay.png", name: "VNPay" },
          { icon: "/icons/payment/momo.png", name: "Momo" },
          { icon: "/icons/payment/zalopay.png", name: "ZaloPay" },
          { icon: "/icons/payment/onepay.png", name: "OnePay" }
        ],
        core: {
          Payment: { icon: "/icons/payment-box.png" },
          Center: { icon: "/icons/gear.png" },
          Ticket: { icon: "/icons/ticket-box.png" }
        },
        integrations: [
          { name: "Mobile App", icon: "/icons/mobile-app.png", color: "blue" },
          { name: "B2C/B2B", icon: "/icons/b2c.png", color: "red" },
          { name: "Social", icon: "/icons/social.png", color: "yellow" },
          { name: "OTAs, eCommerce", icon: "/icons/ecommerce.png", color: "orange" },
          { name: "Ticketcounter", icon: "/icons/ticket.png", color: "green" },
          { name: "Self Kiosk", icon: "/icons/kiosk.png", color: "purple" }
        ],
        controls: [
          { name: "Access Control", icon: "/icons/access.png" },
          { name: "Display", icon: "/icons/display.png" },
          { name: "Mobile Check", icon: "/icons/mobile-check.png" },
          { name: "Smart Lock", icon: "/icons/smart-lock.png" }
        ]
      }
    },
    {
      title: "MÔ HÌNH TRIỂN KHAI",
      type: "deployment-model",
      steps: [
        {
          icon: "/icons/requirement.png",
          title: "Khảo sát & Phân tích",
          description: "Khảo sát hiện trạng, phân tích yêu cầu và đề xuất giải pháp phù hợp"
        },
        {
          icon: "/icons/design.png",
          title: "Thiết kế & Tùy biến",
          description: "Thiết kế giao diện, tùy chỉnh tính năng theo yêu cầu đặc thù"
        },
        {
          icon: "/icons/setup.png",
          title: "Triển khai & Cài đặt",
          description: "Lắp đặt thiết bị, cài đặt phần mềm và tích hợp hệ thống"
        },
        {
          icon: "/icons/training.png",
          title: "Đào tạo & Bàn giao",
          description: "Đào tạo nhân viên vận hành, bàn giao tài liệu hướng dẫn"
        }
      ],
      support: {
        title: "HỖ TRỢ SAU TRIỂN KHAI",
        items: [
          { icon: "🔧", text: "Bảo trì định kỳ" },
          { icon: "🚨", text: "Hỗ trợ 24/7" },
          { icon: "⚡", text: "Xử lý sự cố khẩn cấp" },
          { icon: "⬆️", text: "Nâng cấp hệ thống" }
        ]
      }
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
      case 'system-overview':
        return (
          <div className="system-overview-slide slide">
            <h2>{slide.title}</h2>
            <div className="system-diagram">
              {/* Payment Methods */}
              <div className="payment-box">
                <div className="payment-methods">
                  {slide.components.payments.map((payment, index) => (
                    <img key={index} src={payment.icon} alt={payment.name} />
                  ))}
                </div>
              </div>

              {/* Core System */}
              <div className="core-system">
                <div className="Payment-box">Payment</div>
                <div className="Center-box">
                  <img src={slide.components.core.Center.icon} alt="Center" />
                </div>
                <div className="Ticket-box">Ticket system</div>
              </div>

              {/* Integrations */}
              <div className="integrations">
                {slide.components.integrations.map((item, index) => (
                  <div key={index} className={`integration-item ${item.color}`}>
                    <img src={item.icon} alt={item.name} />
                    <span>{item.name}</span>
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
      case 'deployment-model':
        return (
          <div className="deployment-slide slide">
            <h2>{slide.title}</h2>
            <div className="deployment-steps">
              {slide.steps.map((step, index) => (
                <div key={index} className="deployment-step">
                  <div className="step-icon">
                    <img src={step.icon} alt={step.title} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
            <div className="support-section">
              <h3>{slide.support.title}</h3>
              <div className="support-items">
                {slide.support.items.map((item, index) => (
                  <div key={index} className="support-item">
                    <span className="support-icon">{item.icon}</span>
                    <span>{item.text}</span>
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