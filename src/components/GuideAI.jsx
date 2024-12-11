import React, { useState, useEffect, useCallback, useRef } from 'react';
import Select from 'react-select';
import './GuideAI.css';
import { CONFIG } from '../config';

const locationOptions = [
  { value: 'hanoi', label: 'Hà Nội', icon: '🏙️' },
  { value: 'hoian', label: 'Hội An', icon: '🏮' },
  { value: 'halong', label: 'Hạ Long', icon: '⛵' },
  { value: 'chuahuong', label: 'Chùa Hương', icon: '🛕' }
];

const BookingOnline = () => {
  const [tourInfo, setTourInfo] = useState({
    location: '',
    description: '',
    isPlaying: false,
    voice: 'FEMALE',
    language: 'vi'
  });

  const audioRef = useRef(null);

  const handleSpeak = useCallback(async (text) => {
    const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${CONFIG.GOOGLE_TTS_API_KEY}`;

    const voiceConfig = tourInfo.language === 'vi' 
      ? {
          languageCode: 'vi-VN',
          name: tourInfo.voice === 'FEMALE' ? 'vi-VN-Wavenet-A' : 'vi-VN-Wavenet-B',
          ssmlGender: tourInfo.voice
        }
      : {
          languageCode: 'en-US',
          name: tourInfo.voice === 'FEMALE' ? 'en-US-Wavenet-F' : 'en-US-Wavenet-B',
          ssmlGender: tourInfo.voice
        };

    const requestBody = {
      input: { text },
      voice: voiceConfig,
      audioConfig: { audioEncoding: 'MP3' }
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();
      const audioContent = data.audioContent;

      if (audioContent) {
        if (audioRef.current) {
          audioRef.current.pause();
        }

        const audio = new Audio(`data:audio/mp3;base64,${audioContent}`);
        audioRef.current = audio;
        audio.play();
        setTourInfo(prev => ({ ...prev, isPlaying: true }));

        audio.onended = () => {
          setTourInfo(prev => ({ ...prev, isPlaying: false }));
        };
      }
    } catch (error) {
      console.error('Lỗi TTS:', error);
    }
  }, [tourInfo.voice, tourInfo.language]);

  useEffect(() => {
    if (tourInfo.location) {
      handleSpeak(getTourDescription(tourInfo.location, tourInfo.language));
    }
  }, [tourInfo.location, handleSpeak, tourInfo.language]);

  const customOption = ({ innerRef, innerProps, data }) => (
    <div ref={innerRef} {...innerProps} className="custom-option">
      <span>{data.icon}</span> {data.label}
    </div>
  );

  return (
    <div className="booking-online">
      <h2>Hướng dẫn viên du lịch ảo</h2>
      
      <div className="tour-info">
        <Select
          value={locationOptions.find(option => option.value === tourInfo.location)}
          onChange={(selectedOption) => {
            if (audioRef.current) {
              audioRef.current.pause();
            }
            setTourInfo(prev => ({
              ...prev,
              location: selectedOption.value,
              isPlaying: false
            }));
          }}
          options={locationOptions}
          getOptionLabel={option => (
            <div>
              <span>{option.icon}</span> {option.label}
            </div>
          )}
          components={{ Option: customOption }}
          placeholder="Chọn địa điểm"
        />

        <select 
          value={tourInfo.voice}
          onChange={(e) => {
            if (audioRef.current) {
              audioRef.current.pause();
            }
            setTourInfo(prev => ({
              ...prev,
              voice: e.target.value
            }));
          }}
        >
          <option value="FEMALE">Nữ</option>
          <option value="MALE">Nam</option>
        </select>

        <select 
          value={tourInfo.language}
          onChange={(e) => {
            if (audioRef.current) {
              audioRef.current.pause();
            }
            setTourInfo(prev => ({
              ...prev,
              language: e.target.value
            }));
          }}
        >
          <option value="vi">Tiếng Việt</option>
          <option value="en">English</option>
        </select>

        {tourInfo.location && (
          <div className="location-info">
            <p>{getTourDescription(tourInfo.location, tourInfo.language)}</p>
            <button 
              onClick={() => handleSpeak(getTourDescription(tourInfo.location, tourInfo.language))}
              disabled={tourInfo.isPlaying}
            >
              {tourInfo.isPlaying ? 'Đang phát...' : 'Nghe thuyết minh'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const getTourDescription = (location, language = 'vi') => {
  const descriptions = {
    vi: {
      hanoi: `Hà Nội - Thủ đô nghìn năm văn hiến với 36 phố phường. 
      Nơi đây nổi tiếng với Hồ Hoàn Kiếm, Lăng Chủ tịch Hồ Chí Minh, 
      và Văn Miếu Quốc Tử Giám. Hà Nội còn là trung tâm văn hóa, 
      chính trị và kinh tế của Việt Nam, với nhiều bảo tàng, 
      nhà hát và các công trình kiến trúc cổ kính. 
      Du khách có thể thưởng thức ẩm thực đường phố phong phú 
      và tham gia vào các hoạt động văn hóa truyền thống.`,
      
      hoian: `Phố cổ Hội An - Di sản văn hóa thế giới với những ngôi nhà cổ. 
      Hội An nổi bật với những con phố nhỏ, đèn lồng lung linh và 
      các cửa hàng thủ công mỹ nghệ. Du khách có thể tham quan 
      Chùa Cầu, Nhà cổ Tấn Ký, và thưởng thức các món ăn đặc sản 
      như Cao Lầu, Bánh Bao Bánh Vạc. Hội An còn có các lễ hội 
      truyền thống và các hoạt động văn hóa đặc sắc.`,
      
      halong: `Vịnh Hạ Long - Kỳ quan thiên nhiên thế giới với hàng nghìn đảo đá. 
      Vịnh Hạ Long nổi tiếng với cảnh quan thiên nhiên hùng vĩ, 
      các hang động kỳ bí như Hang Sửng Sốt, Động Thiên Cung. 
      Du khách có thể tham gia các tour du thuyền, chèo thuyền kayak 
      và khám phá các làng chài nổi. Vịnh Hạ Long còn là nơi lý tưởng 
      để thưởng thức hải sản tươi ngon và tham gia các hoạt động 
      giải trí trên biển.`,
      
      chuahuong: `Chùa Hương - Danh thắng tâm linh nổi tiếng tại Hà Nội, 
      còn được gọi là chùa Hương Tích hay Hương Sơn. 
      Quần thể di tích này nằm trong hệ thống các hang động kỳ thú 
      của dãy núi Hương Tích, với phong cảnh thiên nhiên hùng vĩ. 
      Du khách đến đây không chỉ để chiêm bái mà còn được thưởng ngoạn 
      cảnh đẹp với hành trình đi thuyền trên suối Yến thơ mộng, 
      leo núi khám phá các hang động như động Hương Tích, 
      và thưởng thức ẩm thực chay đặc trưng của vùng.`
    },
    en: {
      hanoi: `Hanoi - The thousand-year-old capital with 36 ancient streets. 
      Famous for Hoan Kiem Lake, Ho Chi Minh Mausoleum, and Temple of Literature. 
      Hanoi is the cultural, political, and economic center of Vietnam, 
      with numerous museums, theaters, and ancient architectural works. 
      Visitors can enjoy rich street cuisine and participate in traditional cultural activities.`,
      
      hoian: `Hoi An Ancient Town - A World Cultural Heritage site with historic houses. 
      Hoi An features small streets, glowing lanterns, and handicraft shops. 
      Visitors can explore the Japanese Bridge, Tan Ky Ancient House, 
      and enjoy local specialties like Cao Lau and White Rose dumplings. 
      Hoi An also hosts traditional festivals and unique cultural activities.`,
      
      halong: `Ha Long Bay - A Natural Wonder of the World with thousands of limestone islands. 
      Ha Long Bay is famous for its majestic natural scenery and mysterious caves 
      like Sung Sot Cave and Thien Cung Grotto. Visitors can join cruise tours, 
      kayaking, and explore floating fishing villages. Ha Long Bay is also ideal 
      for enjoying fresh seafood and participating in marine activities.`,
      
      chuahuong: `Huong Pagoda - A renowned spiritual landmark in Hanoi, 
      also known as Huong Tich Pagoda or Perfume Pagoda. 
      This religious complex is nestled within the mysterious cave system 
      of Huong Tich Mountain, surrounded by magnificent natural scenery. 
      Visitors come not only for pilgrimage but also to enjoy the scenic beauty, 
      including a poetic boat trip along Yen Stream, mountain climbing to explore caves 
      like Huong Tich Cave, and savoring traditional vegetarian cuisine of the region.`
    }
  };
  return descriptions[language][location] || '';
};

export default BookingOnline;
