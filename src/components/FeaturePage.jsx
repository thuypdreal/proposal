import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './FeaturePage.css';

const FeaturePage = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    swipe: true,
    touchThreshold: 1000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          swipe: true,
          touchThreshold: 1000,
          adaptiveHeight: true
        }
      }
    ]
  };

  const [touchStart, setTouchStart] = React.useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    
    const touchEnd = e.touches[0].clientY;
    const diff = touchStart - touchEnd;
    
    // Lấy slide hiện tại
    const currentSlide = document.querySelector('.slick-current > div');
    
    // Kiểm tra xem đã scroll đến cuối hoặc đầu chưa
    const isAtTop = currentSlide.scrollTop === 0;
    const isAtBottom = currentSlide.scrollHeight - currentSlide.scrollTop === currentSlide.clientHeight;

    // Chỉ cho phép chuyển slide khi đã scroll hết nội dung
    if (Math.abs(diff) > 50) {
      if (diff > 0 && isAtBottom) {
        sliderRef.current.slickNext();
      } else if (diff < 0 && isAtTop) {
        sliderRef.current.slickPrev();
      }
      setTouchStart(null);
    }
  };

  const slides = [
    {
      title: "GIẢI PHÁP QUẢN LÝ KHU VUI CHƠI THÔNG MINH",
      subtitle: "THink Ticket",
      website: "Website: invade.vn",
      hotline: "Hotline 24/7: 0899 023 368",
      type: "hero"
    },
    {
      title: "Phù hợp hầu hết với tất cả các loại hình vui chơi",
      subtitle: "THink Ticket là một giải pháp công nghệ tiên tiến được thiết kế để tối ưu hóa hoạt động quản lý tại các khu vui chơi giải trí, công viên, trung tâm thương mại, và các điểm du lịch. Đây là một nền tảng giúp đơn giản hóa quy trình vận hành, nâng cao trải nghiệm khách hàng, và đảm bảo hiệu quả kinh doanh vượt trội...",
      items: [
        {
          icon: "/public/icons/theme-park.png",
          text: "CÔNG VIÊN CHỦ ĐỀ"
        },
        {
          icon: "/public/icons/water-park.png",
          text: "CÔNG VIÊN NƯỚC"
        },
        {
          icon: "/public/icons/mall.png",
          text: "TRUNG TÂM GIẢI TRÍ"
        },
        {
          icon: "/public/icons/temple.png",
          text: "DU LỊCH TÂM LINH"
        },
        {
          icon: "/public/icons/climbing.png",
          text: "TỔ HỢP TẮM KHOÁNG"
        }
      ],
      type: "business-types"
    },
    {
      title: "Mô hình tổng quan hệ thống",
      type: "system-overview",
      components: {
        payments: [
          { icon: "/public/icons/payment/vnpay.png", name: "VNPay" },
          { icon: "/public/icons/payment/momo.png", name: "Momo" },
          { icon: "/public/icons/payment/zalopay.png", name: "ZaloPay" },
          { icon: "/public/icons/payment/onepay.png", name: "OnePay" }
        ],
        core: {
          Payment: { icon: "/public/icons/payment-box.png" },
          Center: { icon: "/public/icons/gear.png" },
          Ticket: { icon: "/public/icons/ticket-box.png" }
        },
        integrations: [
          { name: "Mobile App", icon: "/public/icons/mobile-app.png", color: "blue" },
          { name: "B2C/B2B", icon: "/public/icons/b2c.png", color: "red" },
          { name: "Social", icon: "/public/icons/social.png", color: "yellow" },
          { name: "OTAs, eCommerce", icon: "/public/icons/ecommerce.png", color: "orange" },
          { name: "Ticketcounter", icon: "/public/icons/ticket.png", color: "green" },
          { name: "Self Kiosk", icon: "/public/icons/kiosk.png", color: "purple" }
        ],
        controls: [
          { name: "Access Control", icon: "/public/icons/access.png" },
          { name: "Display", icon: "/public/icons/display.png" },
          { name: "Mobile Check", icon: "/public/icons/mobile-check.png" },
          { name: "Smart Lock", icon: "/public/icons/smart-lock.png" }
        ]
      }
    },
    {
      title: "Chức năng hệ thống",
      type: "system-features",
      features: [
        {
          icon: "/public/icons/features/ticket.png",
          title: "Quản lý vé",
          items: [
            "Đặt vé offline, online",
            "Quản lý đơn hàng",
            "Kiểm soát vé vào cổng",
            "Báo cáo doanh thu"
          ]
        },
        {
          icon: "/public/icons/features/customer.png", 
          title: "Quản lý khách hàng",
          items: [
            "Thông tin khách hàng",
            "Lịch sử giao dịch",
            "Chương trình khuyến mãi",
            "Chăm sóc khách hàng"
          ]
        },
        {
          icon: "/public/icons/features/report.png",
          title: "Báo cáo & Thống kê",
          items: [
            "Báo cáo doanh thu",
            "Thống kê lượt khách",
            "Phân tích xu hướng",
            "Dự báo kinh doanh"
          ]
        },
        {
          icon: "/public/icons/features/product.png",
          title: "Quản lý sản phẩm & kho",
          items: [
            "Quản lý sản phẩm, hàng hóa",
            "Combo vé + đồ ăn, đồ uống",
            "Quản lý kho và tồn kho",
            "Báo cáo nhập xuất kho"
          ]
        },
        {
          icon: "/public/icons/features/kiosk.png",
          title: "Self Kiosk tự động",
          items: [
            "Bán vé tự động 24/7",
            "Thanh toán đa phương thức",
            "In vé & hóa đơn tự động",
            "Tích hợp quét mã QR"
          ]
        },
        {
          icon: "/public/icons/features/settings.png",
          title: "Cấu hình hệ thống",
          items: [
            "Quản lý người dùng",
            "Phân quyền truy cập",
            "Cài đặt thanh toán",
            "Tích hợp HĐĐT"
          ]
        }
      ]
    },
    {
      title: "Mô hình triển khai",
      type: "deployment-model",
      steps: [
        {
          icon: "/public/icons/requirement.png",
          title: "Khảo sát & Phân tích",
          description: "Khảo sát hiện trạng, phân tích yêu cầu và đề xuất giải pháp phù hợp"
        },
        {
          icon: "/public/icons/design.png",
          title: "Thiết kế & Tùy biến",
          description: "Thiết kế giao diện, tùy chỉnh tính năng theo yêu cầu đặc thù"
        },
        {
          icon: "/public/icons/setup.png",
          title: "Triển khai & Cài đặt",
          description: "Lắp đặt thiết bị, cài đặt phần mềm và tích hợp hệ thống"
        },
        {
          icon: "/public/icons/training.png",
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
            <p className="subtitle">{slide.subtitle}</p>
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
                    <div key={index} className="payment-method-item">
                      <img src={payment.icon} alt={payment.name} />
                    </div>
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
      case 'system-features':
        return (
          <div className="system-features-slide slide">
            <h2>{slide.title}</h2>
            <div className="features-grid">
              {slide.features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
                    <img src={feature.icon} alt={feature.title} />
                  </div>
                  <h3>{feature.title}</h3>
                  <ul className="feature-list">
                    {feature.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="feature-page" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      <Slider ref={sliderRef} {...settings}>
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